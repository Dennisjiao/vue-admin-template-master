import request from '@/utils/request'

export default {
    //医院列表
    getHospList(page,limit,searchObj){ //当前页，显示数量， 条件对象
        return request({
            //url: '/admin/hosp/hospitalSet/findPageHospSet/{current}/{limit}',
            url: `/admin/hosp/hospital/list/${page}/${limit}`,

            method: 'get',//get提交方式
            params: searchObj
            //data: searchObj,  //使用json进行传递, searchObj是接口对象
            //params  //不用json进行传递
        })
    },

    //根据dictcode查询所有节点
    findByDictCode(dictCode){
        return request({
            url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
            method: 'get',//get提交方式
        })
    },

    //根据数据id查询子数据列表
    findChildId(id){
        return request({
            url: `/admin/cmn/dict/findChildData/${id}`,
            method: 'get',//get提交方式
        })
    },

    //更新医院上线状态
    updateStatus(id, status) {
        return request({
          url: `/admin/hosp/hospital/updateHospStatus/${id}/${status}`,
          method: 'get'
        })
    },

    //查看医院详情
    getHospById(id) {
        return request ({
            url: `/admin/hosp/hospital/showHospDetail/${id}`,
            method: 'get'
    })
    },

    //查看医院详情
    getDeptByHoscode(hoscode) {
        return request ({
            url: `/admin/hosp/department/getDeptList/${hoscode}`,
            method: 'get'
    })
    },

    //查询预约规则
    getScheduleRule(page, limit, hoscode, depcode){
        return request({
            url:`/admin/hosp/schedule/getScheduleRule/${page}/${limit}/${hoscode}/${depcode}`,
            method:'get'
        })
    },

    //查询排班详情
    getScheduleDetail(hoscode,depcode,workDate) {
        return request ({
        url: `/admin/hosp/schedule/getScheduleDetail/${hoscode}/${depcode}/${workDate}`,
        method: 'get'
        })
    }
}