/**
 * Created by Administrator on 2017/9/20.
 */
define(['jquery','template'], function ($,template) {
    $.ajax({
        type: 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function (data) {
            var html = template('teacherListTpl',{list:data.result});
            $('.teacher-list-con').html(html);
        }


    })
})