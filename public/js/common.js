define(['jquery','cookie'],function($){
	//NProgress.start();
    //
	//NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//����û��Ƿ��¼
	var flag = $.cookie('PHPSESSID');
	if(!flag && location.pathname != '/main/login'){
		/*���flag������  ��ת��¼ҳ��*/
		location.href = '/main/login';
	}

	//�����û�ͷ����Ϣ
	var loginInfo = $.cookie('loginInfo');
	loginInfo = loginInfo && JSON.parse(loginInfo);
	//�����û�ͷ����Ϣ
	$('.aside .profile .avatar img').attr('src',loginInfo.tc_avatar);
	$('.aside .profile h4').html(loginInfo.tc_name);

	/*�˳���¼*/
	$('#logoutBtn').on('click', function () {
		$.ajax({
			url : '/api/logout',
			type: 'post',
			success:function(data){
				if(data.code == 200){
					location.href = '/login';
				}
			}
		})
	})
})


