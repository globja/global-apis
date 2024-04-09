const fs = require("fs");
const path = require("path");
const SwaggerParser = require("@apidevtools/swagger-parser");


// api接口方法存放目录
const API_PATH = path.resolve(__dirname, "./src/api");

// 判断目录是否存在
const isExist = (lastPath = "") => {
    const privatePath = `${lastPath ? API_PATH + "/" + lastPath : API_PATH}`;
    const stat = fs.existsSync(privatePath);
    if (!stat) {
        fs.mkdirSync(privatePath);
    }
};
// 名字转换
const moduleName = (operationId) => {
    try {
        const ddd = operationId.replace(/Using|_|\/|-/g, "_").split('_')
        // console.log(ddd);
        if (ddd.length > 2 && ddd[0] == '') {
            ddd.splice(0, 2)
            return ddd.toString().replace(/\,/g, "_")
        }
        return ddd.toString().replace(/\,/g, "_")
    } catch {
        return operationId
    }
};

// 信息转text
function infoToText(info) {
    /** 服务名 */
    const Name = info.title;
    /** 介绍 */
    const Description = info.description ? info.description : "";
    /** 版本 */
    const Version = info.version ? info.version : "";
    return `
    /** ${Name}
     * @description ${Description}
     * @Version ${Version}
     */
    // 请求库
    import { request } from '@/utils/request';
    `;
}
// 类型key转text
function propertiesToText(name, data) {
    let type = ''
    /** 替换类型字符串 */
    if ('$ref' in data) { type = data['$ref'].replace(/\#\/components\/schemas\//i, '') }
    if ('type' in data) { type = data['type'] }
    if (type.toLowerCase() == 'array') { type = 'Array<any>' }

    return `/** ${data.description ? data.description : ''} */
    ${name}:${type}
`
}
//  类型转text
function schemasToTextItem(name, data) {
    // console.log(name, data);
    let properties = ''
    for (const item of Object.keys(data.properties)) {
        properties += propertiesToText(item, data.properties[item])
    }
    // console.log(properties);
    return `export interface ${name}{
        ${properties}}
    `
}
// 类型转text
function schemasToText(schemas) {
    let obj = ''
    for (const item of Object.keys(schemas)) {
        obj += schemasToTextItem(item, schemas[item])
    }
    return obj
}

/** 子结构递归 */
function itemSion(data) {
    const obj = {}
    for (const item in data) {
        // console.log('参数', item, data[item].type);
        obj[item] = data[item].type
        if (data[item].type == 'array') {
            obj[item] = arraySion(data[item].items)
        }
        else if (data[item].type == 'object') {
            obj[item] = itemSion(data[item].properties)
        }
        else if (data[item].type == 'integer') {
            obj[item] = 'number'
        }
    }
    return obj
}

function arraySion(data) {

    if (data.type == 'array') {
        return `Array<${arraySion(data.items)}>`
    }
    else if (data.type == 'object') {
        return `Array<${objectToString(itemSion(data.properties))}>`
    }
    else {
        return `Array<${data.type}>`
    }

}

function objectToString(obj, indent = '') {
    let str = '{';
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const newIndent = indent + '  '; // 增加缩进
            if (typeof value === 'object' && value !== null) {
                // 如果是对象，递归处理，并在值前添加逗号
                str += `\n${newIndent}${key}: ${objectToString(value, newIndent)}`;
            } else {
                // 基本类型值，直接拼接字符串，并在值前添加逗号
                str += `\n${newIndent}${key}: ${value} `;
            }
        }
    }
    // 移除最后一个逗号和换行符，并添加闭括号
    return str.trim() + '\n' + indent + '}';
}

// function objectToString(obj, indent = '') {
//     let str = '{';
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const value = obj[key];
//             const newIndent = indent + '  '; // 增加缩进

//             if (typeof value === 'object' && value !== null) {
//                 // 如果是对象，递归处理
//                 str += `${newIndent}${key}:\n${objectToString(value, newIndent)}`;
//             } else {
//                 // 基本类型值，直接拼接字符串
//                 str += `${newIndent}${key}: ${value}\n`;
//             }
//         }
//     }
//     // 移除最后一个换行符
//     return str.trim().slice(0, -1) + '\n' + indent + '}';
// }


// 
function paramsToTextItem(name, data) {
    // console.log(name, data);
    let type = ''
    /** 替换类型字符串 */
    if ('$ref' in data.schema) { type = data.schema['$ref'].replace(/\#\/components\/schemas\//i, '') }
    if ('type' in data.schema) { type = data.schema['type'] }
    if (type == 'array') { type = arraySion(data[item].items) }

    if (type == 'object') { type = objectToString(itemSion(data.schema.properties)) }
    // 拼接
    return `/** ${data.description} **/
            ${name}${data.required ? '' : '?'}:${data.schema ? type : 'any'};
    `
}
function paramesToText(obj) {
    let jsn = ''
    for (const item of Object.keys(obj)) {
        jsn += paramsToTextItem(item, obj[item])
    }
    return jsn
}

function headerToText(obj) {
    let jsn = ''
    for (const item of Object.keys(obj)) {
        jsn += typeof obj[item] == 'string' ? `${item}:'${obj[item]}'` : paramsToTextItem(item, obj[item])
    }
    return jsn
}


function bodyToText(data) {
    let type = ''
    /** 替换类型字符串 */
    if ('$ref' in data.schema) { type = data.schema['$ref'].replace(/\#\/components\/schemas\//i, '') }
    if ('type' in data.schema) { type = data.schema['type'] }
    if (type == 'array') { type = arraySion(data[item].items) }

    if (type == 'object') { type = objectToString(itemSion(data.schema.properties)) }

    return `${data.schema ? type : 'any'};
    `
}
function pathsToTextItemReq(path, name, data, tagsList) {
    // path +
    // console.log(moduleName(path) + "_" + name, path, name, data);
    // 解析请求参数 
    const reqdate = {

    }

    data.parameters.forEach(item => {
        if (!(item.in in reqdate)) {
            reqdate[item.in] = {}
        }
        reqdate[item.in][item.name] = {
            description: item.description ? item.description : '',
            required: item.required ? item.required : true,
            schema: item.schema
        }
    })

    if (data.requestBody) {
        reqdate.body = {
            required: data.requestBody.required ? data.requestBody.required : true,
            description: data.requestBody.description ? data.requestBody.description : '',
        }
        if (!reqdate.header) {
            reqdate.header = {}
        }
        const keys = Object.keys(data.requestBody.content)
        if (keys.length > 0) {
            reqdate.header['"Content-Type"'] = keys[0]
            reqdate.body.schema = data.requestBody.content[keys[0]].schema
        }
    }

    // 请求参数
    const ini = `export interface ${moduleName(path) + "_" + name + '_DTO'}{
        ${reqdate.query ? `params:{
             ${paramesToText(reqdate.query)}      
        }` : ''}${reqdate.body ? `/** ${reqdate.body.description} **/
        data${reqdate.body.required ? '' : '?'}:${bodyToText(reqdate.body)}` : ''}${reqdate.header ? `headers:{
            ${headerToText(reqdate.header)}
        }`: ''}
    }
    `
    const key = Object.keys(data.responses).find(item => {
        return item == '200' || item == 'default'
    })

    let res3 = 'any'
    if ('content' in data.responses[key]) {
        for (const name2 of Object.keys(data.responses[key].content)) {
            const data2 = data.responses[key].content[name2]

            if (name2 == 'application/json') {
                let type = ''
                if ('$ref' in data2.schema) { type = data2.schema['$ref'].replace(/\#\/components\/schemas\//i, '') }
                if ('type' in data2.schema) { type = data2.schema['type'] }
                if (type == 'array') { type = arraySion(data[item].items) }
                if (type == 'object') { type = objectToString(itemSion(data2.schema.properties)) }
                res3 = `${data2.schema ? type : 'any'}`
            }
        }
    }


    // 请求程序
    const funText = `
    /** ${data.description ? data.description : ''}
     * @return ${data.responses[key].description}
     */
    export function ${moduleName(path) + "_" + name}(data:${moduleName(path) + "_" + name + '_DTO'}){
        const E={
            method:'${name}',
            url:serviceName+'${path}',
            ...data
        }
        return request.request<${res3}>(E)
    }
    `
    for (const item of data.tags) {
        tagsList[item].push({ i: ini, f: funText })
    }

}
function pathsToTextItem(name, data, tagsList) {

    for (const item of Object.keys(data)) {
        pathsToTextItemReq(name, item, data[item], tagsList)
    }
}

function pathsToText(paths, name, tags, tagsList) {

    for (const item of Object.keys(paths)) {
        pathsToTextItem(item, paths[item], tagsList)
    }

    let Text = ''
    for (const item of Object.keys(tagsList)) {

        let interfaceText = ''
        let functionText = ''

        tagsList[item].forEach(ite => {
            interfaceText += ite.i
            functionText += ite.f
        })

        const ttt = tags.find(ite => {
            return ite.name == item
        })

        console.log(ttt, item);

        Text += `
        /** ${ttt.description ? ttt.description : ''} */
        export namespace ${item} {
            const serviceName = '/${name}'
            ${interfaceText}
            ${functionText}
        }
        `
    }

    return Text
    // return fundata
}


async function main(url) {
    console.log('开始解析:', url);
    isExist();

    const tagsList = {
    }

    // 解析url 获得
    const parsed = await new SwaggerParser().parse(url);

    const { info, tags, components, paths } = parsed;

    // 给tags初始化类数据
    tags.forEach(item => {
        tagsList[item.name] = []
    })
    // 创建服务目录
    // console.log(info);
    isExist(info.title)
    // 获取模块信息
    const infoText = infoToText(info)
    // 获取类型定义信息
    const interfaceText = components.schemas ? schemasToText(components.schemas) : ''
    // 获取函数信息
    const pathsText = pathsToText(paths, info.title, tags, tagsList)

    // 写到文件
    fs.writeFileSync(`${API_PATH}/${info.title}/index.ts`, `
        ${infoText}
        ${interfaceText}
        ${pathsText}
    ` );
    console.log("解析完成:", info.title);
};

if (process.argv[2] == '-url') {
    if (process.argv.length == 4) {
        main(process.argv[3]);
    } else {

        main(process.env.VITE_API_URL);
    }
} else {
    console.log('自动模式:', '更新全部服务接口');
    console.log('正在获取尝试从system服务，获取服务列表:', process.env.VITE_API_URL + '/system/config/get-service-list');
    fetch(process.env.VITE_API_URL + '/api/system/config/get-service-list').then(res => res.json()).then(async (res) => {
        const { data } = res
        console.log(res)
        for (const item of data) {
            console.log('服务:', item);
            await main(process.env.VITE_API_URL + '/api/' + item + '/swagger-api');
            console.log('----');
        }
    })
}
