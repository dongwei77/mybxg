/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','template','util','uploadify'], function ($,template,util,uploadify) {
    //处理左侧菜单栏
    util.setMenu('/course/add');

    //获取课程Id
    var csId = util.qs('cs_id');

    //页面数据渲染
    $.ajax({
        type : 'get',
        url : '/api/course/picture',
        dataType: 'json',
        data : {cs_id : csId},
        success : function (data) {
            var html = template('pictureTpl',data.result);
            $('#pictureInfo').html(html);
            //处理图片上传
            $('#myfile').uploadify({
                width : 80,
                height : 'auto',
                itemTemplate : '<span></span>',
                buttonText : '选择图片',
                buttonClass : 'btn btn-success btn-sm',
                swf : '/public/assets/jquery-uploadify/uploadify.swf',
                uploader : '/api/uploader/cover',
                fileObjName : 'cs_cover_original',
                formData : {cs_id : csId},
                onUploadSuccess : function(a,b,c){
                    console.log(b);
                    var obj =JSON.parse(b.trim());
                    console.log(obj);
                    $('.preview img').attr('src','obj.result.path');
                   
                    //// 上传成功之后直接选中选区
                    //cropImage();
                    //$('#cropBtn').text('保存图片').attr('data-flag',true);
                }
            });


        }
    })

})