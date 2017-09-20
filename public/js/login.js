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
                    //���û��ĵ�¼��Ϣ�浽cookie�У������ҳ�湲��
                    $.cookie('loginInfo',JSON.stringify(data.result));

                    //��¼�ɹ�����ת����ҳ��
                    location.href = '/main/index';
                }
            }
        })
        return false;
    })
})