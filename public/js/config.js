/**
 * Created by Administrator on 2017/9/19.
 */
require.config({
    baseUrl : '/public',
    paths : {
        jquery : 'assets/jquery/jquery',
        cookie : 'assets/jquery-cookie/jquery.cookie',
        template : 'assets/artTemplate/template-web',
        bootstrap : 'assets/bootstrap/js/bootstrap.min',
        common : 'js/common',
        login  : 'js/login',
        nprogress : 'assets/nprogress/nprogress',
        teacherList : 'js/teacher-list',
        teacherAdd : 'js/teacher-add',
        util : 'js/util'
    },
    shim :{
        bootstrap : ['jquery']
    }

});