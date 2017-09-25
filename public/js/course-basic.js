/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','template','util','ckeditor'], function ($,template,util,ckeditor) {
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


            //处理二级分类的下拉联动
            $('#firstType').on('change', function () {
               var pid = $(this).val();
                //根据一级分类的ID查询二级分类的数据
                $.ajax({
                    type:'get',
                    url : '/api/category/child',
                    data :{cg_id : pid},
                    dataType : 'json',
                    success : function (data) {
                        console.log(data);
                        //拼接二级分类的下拉选项
                        var tpl = '<option value="">请选择二级菜单</option>{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
                        var html =template.render(tpl,{list:data.result});
                        $('#secondType').html(html);

                    }
                })
            })

            //处理富文本
            CKEDITOR.replace('editor');
        }
    })


})