
import request from "../utils/request";

export default {
    login(params){
        return request({
            method: 'POST',
            url: '/users/login',
            data: params,
            mock: false
        })
    }
}
