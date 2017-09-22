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
        datepicker : 'assets/bootstrap-datepicker/js/bootstrap-datepicker',
        language : 'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        common : 'js/common',
        login  : 'js/login',
        nprogress : 'assets/nprogress/nprogress',
        teacherList : 'js/teacher-list',
        teacherAdd : 'js/teacher-add',
        util : 'js/util'
    },
    shim :{
        bootstrap :{
            deps : ['jquery']
        },
        language:{
            deps : ['jquery','datepicker']
        }

    }

});