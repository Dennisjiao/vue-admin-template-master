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
  }
}