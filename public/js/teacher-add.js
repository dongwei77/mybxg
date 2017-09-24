/**
 * Created by Administrator on 2017/9/22.
 */
define(['jquery','template','util','datepicker','language','validate','form'], function ($,template,util) {
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
                submitForm('/api/teacher/update')
            }

        })
    }else{
        var html = template('teacherTpl',{operate:'添加讲师'});
        $("#teacherInfo").html(html);
        submitForm('/api/teacher/add');
    }

    //实现表单的提交
    //function submitForm(url){
    //    $('#teacherForm').validate({
    //        sendForm :false,
    //        valid : function () {
    //            $(this).ajaxSubmit({
    //                type : 'post',
    //                url : url,
    //                success : function(data){
    //                    if(data.code == 200){
    //                       alert(1)
    //                        location.href = '/teacher/list';
    //                    }
    //                }
    //            })
    //        },
    //        description :{
    //            tcName : {
    //                required :'用户名不能为空'
    //            },
    //            tcPass  : {
    //                required : '密码不能为空',
    //                pattern : '密码必须为6为数字'
    //            },
    //            tcJoinDate : {
    //                required : '日期不能为空'
    //            }
    //        }
    //    })
    //}

    function submitForm(url) {

        $('#teacherForm').validate({
            sendForm: false,
            valid: function () {
                $(this).ajaxSubmit({
                    type : 'post',
                    url : url,
                    dataType : 'json',
                    success : function (data) {
                        if(data.code == 200){
                            console.log(data);
                            location.href = '/teacher/list';
                        }
                    }
                });
            },
            description: {
                tcName: {
                    required: '用户名不能为空'
                },
                tcPass: {
                    required: '密码不能为空',
                    pattern: '密码必须为6位数字'
                },
                tcJoinDate: {
                    required: '日期不能为空'
                }
            }
        });
    }


    //function submitForm(url){
    //    $("#btnSubmit").on('click', function () {
    //        $.ajax({
    //            type : 'post',
    //            url : url,
    //            data : $('#teacherForm').serialize(),
    //            dataType : 'json',
    //            success : function(data){
    //                if(data.code == 200){
    //                   alert(1)
    //                    location.href = '/teacher/list';
    //                }
    //            }
    //        })
    //    })
    //}

})