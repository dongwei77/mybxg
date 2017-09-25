/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','template','util'], function ($,template,util) {
    //左侧菜单栏
    util.setMenu('/course/add');
    //获取课程id
    var csId = util.qs('cs_id');
    //获取操作标志位
    var flag = util.qs('flag');
    $.ajax({
        type : 'get',
        url : '/api/course/basic',
        data : {cs_id : csId},
        dataType : 'json',
        success : function (data) {
           if(flag){
               data.result.operate = '课程编辑';
           }else{
               data.result.operate = '课程添加';
           }
            var html = template('basicTpl',data.result);
            $('#basicInfo').html(html)
        }
    })
})