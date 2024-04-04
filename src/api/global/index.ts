
        
    /** global
     * @description 业务
     * @Version 1.0.0
     */
    // 请求库
    import { request } from '@/utils/request';
    
        export interface IdsDTO{
        /** ids */
    ids:Array<any>
}
    export interface sendTextType{
        /** id */
    id:number
/** 收消息账号id */
    JID:string
/** 收消息账号 */
    content:string
}
    export interface 账号列表_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    设备:object
/**  */
    九段数据:object
/**  */
    昵称:string
/** 账号 */
    UUID:string
/** 节点地址 */
    NodeAddress:string
/** 节点端口 */
    NodePort:number
/**  */
    IP:object
/**  */
    区域:string
/**  */
    类型:string
/**  */
    二维码:string
/**  */
    好友:object
/**  */
    群:string
/**  */
    分组:string
/**  */
    状态:number
/**  */
    上号时间:string
}
    export interface pageDTO{
        /** 页码 */
    pageNo:number
/** 每页数量 */
    pageSize:number
/** 筛选 */
    where:object
}
    export interface limitDTO{
        /** 开始 */
    offset:number
/** 数量 */
    limit:number
/** 筛选 */
    where:object
}
    export interface selectDTO{
        /** 开始 */
    offset:number
/** 数量 */
    limit:number
/** 筛选 */
    key:string
}
    export interface devicesDTO{
        /** 开始 */
    分组:分组列表_Entity
/** 开始 */
    数量:number
/** 开始 */
    期限:number
/** 开始 */
    自动续费:boolean
}
    export interface 设备列表_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    分组:object
/**  */
    设备状态:string
/**  */
    绑定账号:object
/**  */
    过期时间:string
/**  */
    自动续费:boolean
}
    export interface devicesLimitDTO{
        /** 开始 */
    分组:string
}
    export interface 提取记录_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/** username */
    账号:string
/**  */
    版本:number
/**  */
    国家:number
/** 公钥 */
    StaticPubKey:string
/** 私钥 */
    StaticPriKey:string
/** 消息私钥 */
    IdentityPriKey:string
/** 消息公钥 */
    IdentityPubKey:string
/** 哈希 */
    Hash:string
/** 来源 */
    来源:string
}
    export interface loginDTO{
        /** 登录的账号 */
    list:Array<any>
/** 分组 */
    设备分组:object
/** 分组 */
    代理分组:object
/** 开始 */
    自动匹配代理:boolean
/** 开始 */
    登录去重:boolean
/** 代理类型 */
    归属地:number
}
    export interface upAccount{
        /** 国家 */
    国家:number
/** 版本 */
    版本:number
}
    export interface 分组列表_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    分组:string
/**  */
    客服:Array<any>
/**  */
    设备:Array<any>
}
    export interface ipDTO{
        /** 代理类型 */
    代理类型:number
/** 代理类型 */
    归属地:number
/** 分组 */
    分组:IP分组列表_Entity
/** ip */
    ip:string
/** 代理数据 */
    data:string
}
    export interface IP列表_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    IP:string
/**  */
    Data:string
/**  */
    代理类型:number
/**  */
    速度:string
/**  */
    归属地:number
/**  */
    分组:object
/**  */
    使用数量:number
/**  */
    是否可用:boolean
/**  */
    类型:number
}
    export interface IP分组列表_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    分组:string
/**  */
    IP列表:Array<any>
}
    export interface 注册任务_自动_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    任务名称:string
/**  */
    代理:string
/**  */
    分组:string
/**  */
    区域:string
/**  */
    任务总数:string
/**  */
    成功:string
/**  */
    进度:string
/**  */
    状态:string
/**  */
    通道类型:string
}
    export interface 注册任务_官方_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    任务名称:string
/**  */
    代理:string
/**  */
    分组:string
/**  */
    区域:string
/**  */
    任务总数:string
/**  */
    成功:string
/**  */
    进度:string
/**  */
    状态:string
/**  */
    通道类型:string
}
    export interface 组内新增任务_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    任务名称:string
/**  */
    开始时间:string
/**  */
    所属分组:string
/**  */
    未分配:string
/**  */
    任务总数:string
/**  */
    已执行:string
/**  */
    待执行:string
/**  */
    失败:string
/**  */
    进度:string
/**  */
    状态:string
}
    export interface 导入好友任务_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    名称:string
/**  */
    单项数量:string
/**  */
    状态:string
}
    export interface 引流统计_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    账号:string
/**  */
    申请总数:string
/**  */
    今日申请数:string
}
    export interface 好友列表_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    昵称:string
/**  */
    好友账号:string
/**  */
    所属账号:object
/**  */
    方式:string
}
    export interface 关于素材_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    名称:string
/**  */
    素材:string
/**  */
    MD5:string
}
    export interface 昵称素材_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    名称:string
/**  */
    素材:string
/**  */
    MD5:string
}
    export interface 发动态任务_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    任务名:string
/**  */
    类型:string
/**  */
    开始时间:string
/**  */
    状态:string
}
    export interface 客服管理_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    账号:string
/** 密码 */
    密码:string
/** 验证器key */
    MFAKey:string
/**  */
    管理账号分组:分组列表_Entity
/**  */
    进入翻译:boolean
/**  */
    发出翻译:boolean
/**  */
    新增好友:boolean
/**  */
    账号注册:boolean
/**  */
    好友转移:boolean
}
    export interface Login_seats_DTO{
        /** 验证码id */
    id:string
/** 验证码 */
    answer:string
/** 用户名 */
    fatherUser:string
/** uuid */
    uuid:string
/** 用户名 */
    username:string
/** 密码 */
    password:string
}
    export interface setStateDTO{
        /** 账号 */
    UUID:string
/** 节点地址 */
    ApiInfo:string
/** 消息类型 */
    Reason:number
}
    export interface Page{
        }
    export interface 群发任务_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    执行总数:string
/**  */
    已执行:string
/**  */
    创建时间:string
/**  */
    开始时间:string
/**  */
    结束时间:string
/**  */
    状态:string
}
    export interface 群组群发任务_Entity{
        /** ID */
    id:number
/** 更新人ID */
    updaterId:number
/** 创建人ID */
    createrId:number
/** 创建时间 */
    createTime:string
/** 更新时间 */
    updateTime:string
/**  */
    执行总数:string
/**  */
    已执行:string
/**  */
    创建时间:string
/**  */
    开始时间:string
/**  */
    结束时间:string
/**  */
    状态:string
}
    
        
        /** 微服务可以调用的开放接口 */
        export namespace system {
            const serviceName = '/global'
            export interface seats_login_post_DTO{
        /**  **/
        data:Login_seats_DTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface seats_getSocketPath_post_DTO{
        
    }
    export interface seats_getAccount_post_DTO{
        params:{
             /**  **/
            page:number;
          
        }
    }
    export interface getAccount_post_DTO{
        params:{
             /**  **/
            UUID:string;
          
        }
    }
    export interface setState_post_DTO{
        /**  **/
        data:setStateDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface getAccountList_post_DTO{
        params:{
             /**  **/
            page:number;
    /**  **/
            groupId:number;
          
        }
    }
    
            
    /** 客服子账号登录
     * @return OK
     */
    export function seats_login_post(data:seats_login_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/system/seats-login',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 获取IM链接
     * @return OK
     */
    export function seats_getSocketPath_post(data:seats_getSocketPath_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/system/seats-getSocketPath',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 获取账号列表/客服
     * @return OK
     */
    export function seats_getAccount_post(data:seats_getAccount_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/system/seats-getAccount',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 获取客服分组数据
     * @return 
     */
    export function getAccount_post(data:getAccount_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/system/getAccount',
            ...data
        }
        return request.request<账号列表_Entity>(E)
    }
    
    /** 设置账号状态
     * @return OK
     */
    export function setState_post(data:setState_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/system/setState',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 获取账号列表
     * @return 
     */
    export function getAccountList_post(data:getAccountList_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/system/getAccountList',
            ...data
        }
        return request.request<Page>(E)
    }
    
        }
        
        /** WS账号接口 */
        export namespace accounts {
            const serviceName = '/global'
            export interface isOnline_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface online_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface sendText_post_DTO{
        /**  **/
        data:sendTextType;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:账号列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:账号列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 刷新在线状态
     * @return OK
     */
    export function isOnline_post(data:isOnline_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/isOnline',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 上线
     * @return OK
     */
    export function online_post(data:online_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/online',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 发消息
     * @return OK
     */
    export function sendText_post(data:sendText_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/sendText',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/update',
            ...data
        }
        return request.request<账号列表_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/findById',
            ...data
        }
        return request.request<账号列表_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/findByIds',
            ...data
        }
        return request.request<账号列表_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/page',
            ...data
        }
        return request.request<账号列表_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/limit',
            ...data
        }
        return request.request<账号列表_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/accounts/findOne',
            ...data
        }
        return request.request<账号列表_Entity>(E)
    }
    
        }
        
        /** 设备相关接口 */
        export namespace devices {
            const serviceName = '/global'
            export interface create_order_post_DTO{
        /**  **/
        data:devicesDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:设备列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_Null_post_DTO{
        /**  **/
        data:devicesLimitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:设备列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建购买设备的订单
     * @return 
     */
    export function create_order_post(data:create_order_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/create-order',
            ...data
        }
        return request.request<devicesDTO>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/update',
            ...data
        }
        return request.request<设备列表_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/findById',
            ...data
        }
        return request.request<设备列表_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/findByIds',
            ...data
        }
        return request.request<设备列表_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/page',
            ...data
        }
        return request.request<设备列表_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/limit',
            ...data
        }
        return request.request<设备列表_Entity>(E)
    }
    
    /** LIMIT查询_定制
     * @return 
     */
    export function limit_Null_post(data:limit_Null_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/limit_Null',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/devices/findOne',
            ...data
        }
        return request.request<设备列表_Entity>(E)
    }
    
        }
        
        /** 导入的WS账号的相关接口 */
        export namespace extract {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:提取记录_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface login_post_DTO{
        /**  **/
        data:loginDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:提取记录_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:提取记录_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface upload_put_DTO{
        params:{
             /** 国家 **/
            国家:number;
    /** 版本 **/
            版本:number;
          
        }/**  **/
        data:object;
    headers:{
            accept:'multipart/form-data'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/create',
            ...data
        }
        return request.request<提取记录_Entity>(E)
    }
    
    /** 登录账号
     * @return OK
     */
    export function login_post(data:login_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/login',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/update',
            ...data
        }
        return request.request<提取记录_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/findById',
            ...data
        }
        return request.request<提取记录_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/findByIds',
            ...data
        }
        return request.request<提取记录_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/page',
            ...data
        }
        return request.request<提取记录_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/limit',
            ...data
        }
        return request.request<提取记录_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/extract/findOne',
            ...data
        }
        return request.request<提取记录_Entity>(E)
    }
    
    /** 上传文件
     * @return OK
     */
    export function upload_put(data:upload_put_DTO){
        const E={
            method:'put',
            url:serviceName+'/extract/upload',
            ...data
        }
        return request.request<any>(E)
    }
    
        }
        
        /** ip代理接口 */
        export namespace ip {
            const serviceName = '/global'
            export interface create_ip_post_DTO{
        /**  **/
        data:ipDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:IP列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:IP列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_ip_post(data:create_ip_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ip/create-ip',
            ...data
        }
        return request.request<IP列表_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ip/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ip/update',
            ...data
        }
        return request.request<IP列表_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ip/findById',
            ...data
        }
        return request.request<IP列表_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ip/findByIds',
            ...data
        }
        return request.request<IP列表_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ip/page',
            ...data
        }
        return request.request<IP列表_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ip/limit',
            ...data
        }
        return request.request<IP列表_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ip/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ip/findOne',
            ...data
        }
        return request.request<IP列表_Entity>(E)
    }
    
        }
        
        /** 分组接口 */
        export namespace groups {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:分组列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:分组列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:分组列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/groups/create',
            ...data
        }
        return request.request<分组列表_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/groups/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/groups/update',
            ...data
        }
        return request.request<分组列表_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/groups/findById',
            ...data
        }
        return request.request<分组列表_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/groups/findByIds',
            ...data
        }
        return request.request<分组列表_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/groups/page',
            ...data
        }
        return request.request<分组列表_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/groups/limit',
            ...data
        }
        return request.request<分组列表_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/groups/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/groups/findOne',
            ...data
        }
        return request.request<分组列表_Entity>(E)
    }
    
        }
        
        /** ip代理的分组接口 */
        export namespace ipGroup {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:IP分组列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:IP分组列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:IP分组列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ipGroup/create',
            ...data
        }
        return request.request<IP分组列表_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ipGroup/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ipGroup/update',
            ...data
        }
        return request.request<IP分组列表_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ipGroup/findById',
            ...data
        }
        return request.request<IP分组列表_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ipGroup/findByIds',
            ...data
        }
        return request.request<IP分组列表_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ipGroup/page',
            ...data
        }
        return request.request<IP分组列表_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ipGroup/limit',
            ...data
        }
        return request.request<IP分组列表_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ipGroup/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/ipGroup/findOne',
            ...data
        }
        return request.request<IP分组列表_Entity>(E)
    }
    
        }
        
        /** 注册任务(脚本)的相关接口 */
        export namespace registerAutomatic {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:注册任务_自动_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:注册任务_自动_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:注册任务_自动_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerAutomatic/create',
            ...data
        }
        return request.request<注册任务_自动_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerAutomatic/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerAutomatic/update',
            ...data
        }
        return request.request<注册任务_自动_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerAutomatic/findById',
            ...data
        }
        return request.request<注册任务_自动_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerAutomatic/findByIds',
            ...data
        }
        return request.request<注册任务_自动_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerAutomatic/page',
            ...data
        }
        return request.request<注册任务_自动_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerAutomatic/limit',
            ...data
        }
        return request.request<注册任务_自动_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerAutomatic/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerAutomatic/findOne',
            ...data
        }
        return request.request<注册任务_自动_Entity>(E)
    }
    
        }
        
        /** 注册任务(平台发布)的相关接口 */
        export namespace registerPlatform {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:注册任务_官方_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:注册任务_官方_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:注册任务_官方_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerPlatform/create',
            ...data
        }
        return request.request<注册任务_官方_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerPlatform/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerPlatform/update',
            ...data
        }
        return request.request<注册任务_官方_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerPlatform/findById',
            ...data
        }
        return request.request<注册任务_官方_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerPlatform/findByIds',
            ...data
        }
        return request.request<注册任务_官方_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerPlatform/page',
            ...data
        }
        return request.request<注册任务_官方_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerPlatform/limit',
            ...data
        }
        return request.request<注册任务_官方_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerPlatform/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/registerPlatform/findOne',
            ...data
        }
        return request.request<注册任务_官方_Entity>(E)
    }
    
        }
        
        /** 组内添加好友 */
        export namespace addFriendsGroup {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:组内新增任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:组内新增任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:组内新增任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriendsGroup/create',
            ...data
        }
        return request.request<组内新增任务_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriendsGroup/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriendsGroup/update',
            ...data
        }
        return request.request<组内新增任务_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriendsGroup/findById',
            ...data
        }
        return request.request<组内新增任务_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriendsGroup/findByIds',
            ...data
        }
        return request.request<组内新增任务_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriendsGroup/page',
            ...data
        }
        return request.request<组内新增任务_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriendsGroup/limit',
            ...data
        }
        return request.request<组内新增任务_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriendsGroup/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriendsGroup/findOne',
            ...data
        }
        return request.request<组内新增任务_Entity>(E)
    }
    
        }
        
        /** 添加好友的相关接口 */
        export namespace addFriends {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:导入好友任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:导入好友任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:导入好友任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriends/create',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriends/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriends/update',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriends/findById',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriends/findByIds',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriends/page',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriends/limit',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriends/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/addFriends/findOne',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
        }
        
        /** 引流统计相关的接口 */
        export namespace count {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:引流统计_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:引流统计_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:引流统计_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/count/create',
            ...data
        }
        return request.request<引流统计_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/count/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/count/update',
            ...data
        }
        return request.request<引流统计_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/count/findById',
            ...data
        }
        return request.request<引流统计_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/count/findByIds',
            ...data
        }
        return request.request<引流统计_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/count/page',
            ...data
        }
        return request.request<引流统计_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/count/limit',
            ...data
        }
        return request.request<引流统计_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/count/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/count/findOne',
            ...data
        }
        return request.request<引流统计_Entity>(E)
    }
    
        }
        
        /** 好友列表 */
        export namespace friends {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:好友列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:好友列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:好友列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/friends/create',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/friends/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/friends/update',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/friends/findById',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/friends/findByIds',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/friends/page',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/friends/limit',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/friends/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/friends/findOne',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
        }
        
        /** 导入好友相关的接口 */
        export namespace importFriends {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:导入好友任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:导入好友任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:导入好友任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/importFriends/create',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/importFriends/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/importFriends/update',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/importFriends/findById',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/importFriends/findByIds',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/importFriends/page',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/importFriends/limit',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/importFriends/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/importFriends/findOne',
            ...data
        }
        return request.request<导入好友任务_Entity>(E)
    }
    
        }
        
        /** 养号相关的接口 */
        export namespace trends {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:发动态任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:发动态任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:发动态任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/trends/create',
            ...data
        }
        return request.request<发动态任务_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/trends/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/trends/update',
            ...data
        }
        return request.request<发动态任务_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/trends/findById',
            ...data
        }
        return request.request<发动态任务_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/trends/findByIds',
            ...data
        }
        return request.request<发动态任务_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/trends/page',
            ...data
        }
        return request.request<发动态任务_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/trends/limit',
            ...data
        }
        return request.request<发动态任务_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/trends/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/trends/findOne',
            ...data
        }
        return request.request<发动态任务_Entity>(E)
    }
    
        }
        
        /** 客服相关的接口 */
        export namespace customerService {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:客服管理_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:客服管理_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:客服管理_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/customerService/create',
            ...data
        }
        return request.request<客服管理_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/customerService/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/customerService/update',
            ...data
        }
        return request.request<客服管理_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/customerService/findById',
            ...data
        }
        return request.request<客服管理_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/customerService/findByIds',
            ...data
        }
        return request.request<客服管理_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/customerService/page',
            ...data
        }
        return request.request<客服管理_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/customerService/limit',
            ...data
        }
        return request.request<客服管理_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/customerService/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/customerService/findOne',
            ...data
        }
        return request.request<客服管理_Entity>(E)
    }
    
        }
        
        /** 群发相关接口 */
        export namespace massSending {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:群发任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:群发任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:群发任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSending/create',
            ...data
        }
        return request.request<群发任务_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSending/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSending/update',
            ...data
        }
        return request.request<群发任务_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSending/findById',
            ...data
        }
        return request.request<群发任务_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSending/findByIds',
            ...data
        }
        return request.request<群发任务_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSending/page',
            ...data
        }
        return request.request<群发任务_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSending/limit',
            ...data
        }
        return request.request<群发任务_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSending/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSending/findOne',
            ...data
        }
        return request.request<群发任务_Entity>(E)
    }
    
        }
        
        /** 群组群发相关接口 */
        export namespace massSendingGroup {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:群组群发任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:群组群发任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:群组群发任务_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSendingGroup/create',
            ...data
        }
        return request.request<群组群发任务_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSendingGroup/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSendingGroup/update',
            ...data
        }
        return request.request<群组群发任务_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSendingGroup/findById',
            ...data
        }
        return request.request<群组群发任务_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSendingGroup/findByIds',
            ...data
        }
        return request.request<群组群发任务_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSendingGroup/page',
            ...data
        }
        return request.request<群组群发任务_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSendingGroup/limit',
            ...data
        }
        return request.request<群组群发任务_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSendingGroup/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/massSendingGroup/findOne',
            ...data
        }
        return request.request<群组群发任务_Entity>(E)
    }
    
        }
        
        /** consul */
        export namespace consul {
            const serviceName = '/global'
            export interface health_self_check_get_DTO{
        
    }
    
            
    /** 
     * @return OK
     */
    export function health_self_check_get(data:health_self_check_get_DTO){
        const E={
            method:'get',
            url:serviceName+'/consul/health/self/check',
            ...data
        }
        return request.request<any>(E)
    }
    
        }
        
        /**  */
        export namespace about {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:关于素材_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:关于素材_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:关于素材_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/about/create',
            ...data
        }
        return request.request<关于素材_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/about/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/about/update',
            ...data
        }
        return request.request<关于素材_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/about/findById',
            ...data
        }
        return request.request<关于素材_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/about/findByIds',
            ...data
        }
        return request.request<关于素材_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/about/page',
            ...data
        }
        return request.request<关于素材_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/about/limit',
            ...data
        }
        return request.request<关于素材_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/about/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/about/findOne',
            ...data
        }
        return request.request<关于素材_Entity>(E)
    }
    
        }
        
        /**  */
        export namespace avatar {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:好友列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:好友列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:好友列表_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/avatar/create',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/avatar/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/avatar/update',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/avatar/findById',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/avatar/findByIds',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/avatar/page',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/avatar/limit',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/avatar/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/avatar/findOne',
            ...data
        }
        return request.request<好友列表_Entity>(E)
    }
    
        }
        
        /**  */
        export namespace nickname {
            const serviceName = '/global'
            export interface create_post_DTO{
        /**  **/
        data:昵称素材_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface delete_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface update_post_DTO{
        /**  **/
        data:昵称素材_Entity;
    headers:{
            accept:'application/json'
        }
    }
    export interface findById_post_DTO{
        params:{
             /**  **/
            id:number;
          
        }
    }
    export interface findByIds_post_DTO{
        /**  **/
        data:IdsDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface page_post_DTO{
        /**  **/
        data:pageDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface limit_post_DTO{
        /**  **/
        data:limitDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface select_post_DTO{
        /**  **/
        data:selectDTO;
    headers:{
            accept:'application/json'
        }
    }
    export interface findOne_post_DTO{
        /**  **/
        data:昵称素材_Entity;
    headers:{
            accept:'application/json'
        }
    }
    
            
    /** 创建
     * @return 
     */
    export function create_post(data:create_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/nickname/create',
            ...data
        }
        return request.request<昵称素材_Entity>(E)
    }
    
    /** 删除
     * @return OK
     */
    export function delete_post(data:delete_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/nickname/delete',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 更新
     * @return 
     */
    export function update_post(data:update_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/nickname/update',
            ...data
        }
        return request.request<昵称素材_Entity>(E)
    }
    
    /** 通过主键查找
     * @return 
     */
    export function findById_post(data:findById_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/nickname/findById',
            ...data
        }
        return request.request<昵称素材_Entity>(E)
    }
    
    /** 通过一批主键查找
     * @return 
     */
    export function findByIds_post(data:findByIds_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/nickname/findByIds',
            ...data
        }
        return request.request<昵称素材_Entity>(E)
    }
    
    /** 分页查询
     * @return 
     */
    export function page_post(data:page_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/nickname/page',
            ...data
        }
        return request.request<昵称素材_Entity>(E)
    }
    
    /** LIMIT查询
     * @return 
     */
    export function limit_post(data:limit_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/nickname/limit',
            ...data
        }
        return request.request<昵称素材_Entity>(E)
    }
    
    /** select查询
     * @return 
     */
    export function select_post(data:select_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/nickname/select',
            ...data
        }
        return request.request<any>(E)
    }
    
    /** 查询一个
     * @return 
     */
    export function findOne_post(data:findOne_post_DTO){
        const E={
            method:'post',
            url:serviceName+'/nickname/findOne',
            ...data
        }
        return request.request<昵称素材_Entity>(E)
    }
    
        }
        
    