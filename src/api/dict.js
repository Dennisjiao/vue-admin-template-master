import request from '@/utils/request'

export default {
    //数据字典列表
    dictList(id){
        return request({
            //url: '/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}',
            url: `/admin/cmn/dict/findChildData/${id}`,//

            method: 'get',//post提交方式
            //data: searchObj,  //使用json进行传递, searchObj是接口对象
            //params  //不用json进行传递
        })
    }
}