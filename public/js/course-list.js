/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','template','util'], function ($,template,util) {
    util.setMenu(location.pathname);
    //动态渲染数据
    $.ajax({
        type : 'get',
        url : '/api/course',
        dataType : 'json',
        success : function (data) {
            var html = template('courseTpl',data);


            console.log(data);
            $('#courseInfo').html(html);
        }
    })
})