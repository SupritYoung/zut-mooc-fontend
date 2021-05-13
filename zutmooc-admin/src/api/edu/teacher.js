import request from '@/utils/request'

//定义接口，静态页面中调用
export default{
    //讲师列表（条件分页查询）
    getTeacherListPage(current, limit, teacherQuery) {
        return request({
            // url两种写法
            // url: '/eduservice/teacher/pageTeacherCondition/'+current+'/'+limit, 
            url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method: 'post',
            // teacherQuery为条件对象1，后端使用RequestBody获取数据
            // data表示把对象转成json传递到接口中
            data: teacherQuery
          })
    },
    //删除讲师（逻辑删除）
    removeTeacher(id) {
        return request({
            url: `/eduservice/teacher/${id}`,
            method: 'delete'
          })
    },
    //添加讲师
    addTeacher(teacher){
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
        })
    },
    //查询指定id的讲师信息
    getTeacher(id){
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get'
        })
    },
    //修改讲师
    updateTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
        })
    }

}
