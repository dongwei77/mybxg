/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','template','util','form'], function ($,template,util,form) {
    util.setMenu(location.pathname)
    //绑定表单提交点击事件
    $('#courseBtn').on('click', function () {
        $('#courseForm').ajaxSubmit({
            type :'post',
            url : '/api/course/create',
            dataType : 'json',
            success : function (data) {
                if(data.code == 200){
                    location.href = '/course/basic?cs_id='+data.result.cs_id;
                }
            }
        })
    })
})