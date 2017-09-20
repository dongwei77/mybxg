/**
 * Created by Administrator on 2017/9/19.
 */
define(['jquery','cookie'], function ($) {
    $("#loginBtn").on('click', function () {
        $.ajax({
            type : 'post',
            url : '/api/login',
            data : $('#loginForm').serialize(),
            dataType : 'json',
            success : function (data) {
                //console.log(data);
                if(data.code == 200){
                    //把用户的登录信息存到cookie中，方便跨页面共享
                    $.cookie('loginInfo',JSON.stringify(data.result));

                    //登录成功，跳转到主页面
                    location.href = '/main/index';
                }
            }
        })
        return false;
    })
})