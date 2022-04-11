import request from '@/utils/request'

export default {
    getHospSetList(current,limit,searchObj){
        return request({
            //url: '/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}',
            url: `/admin/hosp/hospitalSet/findPageHospSet/${current}/${limit}`,

            method: 'post',//post提交方式
            data: searchObj,  //使用json进行传递, searchObj是接口对象
            //params  //不用json进行传递
        })
    },
    //删除医院设置
    deleteHospSet(id){
        return request({
            //url: `/admin/hosp/hospitalSet/${id}`,
            url: `/admin/hosp/hospitalSet/${id}`,
            method: 'delete',//delete提交方式
        
        })
    },
    //批量删除
    batchRemoveHospSet(idList){
        return request({
            url: `/admin/hosp/hospitalSet/batchRemove`,
            method:'delete',
            data: idList,
        })
    }

}