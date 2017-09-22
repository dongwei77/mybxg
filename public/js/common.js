define(['jquery','template','cookie'],function($,template){
	//NProgress.start();
    //
	//NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//
	var flag = $.cookie('PHPSESSID');
	if(!flag && location.pathname != '/main/login'){
		/**/
		location.href = '/main/login';
	}

	//
	//var loginInfo = $.cookie('loginInfo');
	//loginInfo = loginInfo && JSON.parse(loginInfo);
	var loginInfo = $.cookie('loginInfo') && $.parseJSON($.cookie('loginInfo'));
	//
	//$('.aside .profile .avatar img').attr('src',loginInfo.tc_avatar);
	//$('.aside .profile h4').html(loginInfo.tc_name);

	var tpl ='<div class="avatar img-circle">'
			 +'<img src="{{tc_avatar}}">'
			 +'</div>'
			 +'<h4>{{tc_name}}</h4>';

	var html = template.render(tpl,loginInfo);
	$('.aside .profile').html(html)

	//console.log(loginInfo+"_______"+html);



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


