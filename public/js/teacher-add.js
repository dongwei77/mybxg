/**
 * Created by Administrator on 2017/9/22.
 */
define(['jquery','template','util'], function ($,template,util) {
    var tcId = util.qs('tc_id');
    if(tcId){
        //编辑操作
        $.ajax({
            type:'get',
            url : '/api/teacher/edit',
            data : {tc_id : tcId},
            dataType :' json',
            success : function (data) {
                data.result.operate = '编辑讲师';
                var html = template('teacherTpl',data.result);
                $("#teacherInfo").html(html);
            }

        })
    }else{
        var html = template('teacherTpl',{operate:'添加讲师'});
        $("#teacherInfo").html(html);
    }
})