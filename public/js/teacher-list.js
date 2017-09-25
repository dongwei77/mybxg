/**
 * Created by Administrator on 2017/9/20.
 */
define(['jquery','template','util','bootstrap'], function ($,template,util) {
    //设置导航菜单选中
    util.setMenu(location.pathname)
    $.ajax({
        type: 'get',
        url : '/api/teacher',
        dataType : 'json',
        success : function (data) {
            var html = template('teacherListTpl',{list:data.result});
            $('.teacher-list-con').html(html);

            //注册启用功能
            $('.eod').on('click', function () {
                var that = this
                var td = $(this).parent();
                var tcId = td.attr('data-tcId');
                var status = td.attr('data-status');
                $.ajax({
                    type : 'post',
                    url : '/api/teacher/handle',
                    data : {tc_id:tcId , tc_status: status},
                    dataType : 'json',
                    success : function(data){
                        if(data.code == 200){
                            td.attr('data-status',data.result.tc_status);
                            if(data.result.tc_status == 0){
                                $(that).text('注销');
                            }else{
                                $(that).text('启用');
                            }
                        }
                    }
                })
            })

            //查看讲师
            $('.preview').on('click',function(){
                var td = $(this).parent();
                var tcId = td.attr('data-tcId');
                $.ajax({
                    type : 'get',
                    url  : '/api/teacher/view',
                    data : {tc_id:tcId },
                    dataType : 'json',
                    success : function(data){
                        //渲染模板
                        var html = template('teacherTpl',data.result);
                        $('#teacherInfo').html(html);
                        $('#teacherModal').modal()
                    }
                })
            })
        }


    })
})