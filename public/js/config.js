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
        ckeditor :'assets/ckeditor/ckeditor',
        language : 'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate:'assets/jquery-validate/jquery-validate',
        region : 'assets/jquery-region/jquery.region',
        form:'assets/jquery-form/jquery.form',
        uploadify : 'assets/jquery-uploadify/jquery.uploadify.min',
        jcrop : 'assets/jquery-jcrop/js/Jcrop.min',
        util : 'js/util',
        common : 'js/common',
        login  : 'js/login',
        nprogress : 'assets/nprogress/nprogress',
        teacherList : 'js/teacher-list',
        teacherAdd : 'js/teacher-add',
        settings : 'js/settings',
        index : 'js/index',
        courseAdd:'js/course-add',
        courseList:'js/course-list',
        courseBasic:'js/course-basic',
        coursePicture : 'js/course-picture',
        courseLesson :'js/course-lesson'
    },
    shim :{
        bootstrap :{
            deps : ['jquery']
        },
        language:{
            deps : ['jquery','datepicker']
        },
        validate:{
            deps: ['jquery']
        },
        uploadify :{
            deps :['jquery']
        },
        ckeditor :{
            exports : 'CKEDITOR'
        },
        jcrop : {
            deps : ['jquery']
        }


    }

});