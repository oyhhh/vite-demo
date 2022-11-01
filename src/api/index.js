import { axios_get, axios_post, axios_delete, axios_put } from '@/utils/axios.js'


//按照格式确定方法名
export const user_get = p => axios_get("/user/user/", p);
export const add_post1 = p => axios_post("/user/user/", p);
//向后端传输要修改数据的id
export const user_updatad = p => axios_put("/user/user/?id=" + p.id, p);
export const del = p => axios_delete("/user/user/", p);