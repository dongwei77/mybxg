define(['jquery','template','cookie'],function($,template){
	//NProgress.start();
    //
	//NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//检测用户是否登录
	var flag = $.cookie('PHPSESSID');
	if(!flag && location.pathname != '/main/login'){
		/*如果flag不存在  跳转登录页面*/
		location.href = '/main/login';
	}

	//设置用户头像信息
	var loginInfo = $.cookie('loginInfo');
	loginInfo = loginInfo && JSON.parse(loginInfo);
	//设置用户头像信息
	//$('.aside .profile .avatar img').attr('src',loginInfo.tc_avatar);
	//$('.aside .profile h4').html(loginInfo.tc_name);

	var tpl ='<div class="avatar img-circle">'
			 +'<img src="{{tc_avatar}}">'
			 +'</div>'
			 +'<h4>{{tc_name}}</h4>';

	var html = template.render(tpl,loginInfo);
	$('.aside .profile').html(html);



	/*退出登录*/
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


