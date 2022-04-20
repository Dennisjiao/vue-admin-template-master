import request from '@/utils/request'
import url from 'postcss-url'

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
    },

    //锁定和取消锁定
    lockHospSet(id,status){
        return request({
          url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
          method: 'put' 
        })
    },

    //添加医院设置
    saveHospSet(hospitalSet){
        return request({
            url:`/admin/hosp/hospitalSet/saveHospitalSet`,
            method: 'post',
            data: hospitalSet
        })
    },


    //修改医院设置
    updateHospSet(hospitalSet){
        return request({
            //路由冲突错误由于url路径没写对
            url:`/admin/hosp/hospitalSet/updateHospitalSet/`,
            method: 'post',
            data: hospitalSet
        })
    },

    //医院设置id查询
    getHospSet(id){
        return request({
            url:`/admin/hosp/hospitalSet/getHospSet/${id}`,
            method: 'get',
            //加了这个就产生路由冲突了↓
            // headers: {
            //     'Content-Type':'application/x-www-form-urlencoded',
            //     'Access-Control-Allow-Origin':'*' //cors错误是因为请求头没加Access-Control-Allow-XXX信息
            // },
        })
    }

}