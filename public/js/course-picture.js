/**
 * Created by Administrator on 2017/9/25.
 */
define(['jquery','template','util','uploadify','jcrop','form'], function ($,template,util,uploadify) {
    //处理左侧菜单栏
    util.setMenu('/course/add');

    //获取课程Id
    var csId = util.qs('cs_id');

    //选中图片
    var img= $('.preview img').eq(0);

    var nowCrop = '';

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

                    // 上传成功之后直接选中选区
                    cropImage();
                    $('#cropBtn').text('保存图片').attr('data-flag',true);
                }
            });
            //处理图片裁切
            $('#cropBtn').on('click', function () {
                var flag =$(this).attr('data-flag');
                if(flag){
                    //跳转下一步
                    $('#cropForm').ajaxSubmit({
                        type : 'post',
                        url : '/api/course/update/picture',
                        data : {cs_id : csId},
                        dataType : 'json',
                        success : function (data) {
                            if(data.code == 200){
                                location.href ='/course/lesson?cs_id='+data.result.cs_id;
                            }
                        }
                    })
                }else{
                   //第一次点击
                    $(this).text('保存图片').attr('data-flag',true);
                    //实现裁切功能
                    cropImage();
                }
            })

            //封装一个独立的方法实现图片裁切功能
            function cropImage(){
                img.Jcrop({
                    aspectRatio : 2
                }, function () {
                    //销毁之前的示例对象
                    nowCrop && nowCrop.destroy();
                    nowCrop = this;

                    //获取图片的宽和高
                    var width = this.ui.stage.width;
                    var height = this.ui.stage.height;
                    //计算选取的参数
                    var x = 0;
                    var y = (height-width/2)/2;
                    var w = width;
                    var h = width/2;
                    //初始化默认选区参数
                    var aInput = $('#cropForm').find('input');
                    aInput.eq(0).val(x);
                    aInput.eq(1).val(y);
                    aInput.eq(2).val(w);
                    aInput.eq(3).val(h);
                    //动态创建一个选区
                    this.newSelection();
                    this.setSelect([x, y, w, h]);
                    //初始化缩略预览图
                    this.initComponent('Thumbnailer',{
                        width : 240,
                        height : 120,
                        mythumb : '.thumb'
                    })
                    //$('#steps').css({'position':'relative'})
                    $('.jcrop-thumb').css({
                        position : 'absolute',
                        top : 0,
                        left : 0
                    })
                    //监控选区变化
                    img.parent().on('cropstart cropmove cropend', function (a,b,c) {
                        var aInput = $('#cropForm').find('input');
                        aInput.eq(0).val(c.x);
                        aInput.eq(1).val(c.y);
                        aInput.eq(2).val(c.w);
                        aInput.eq(3).val(c.h);

                    })
                })
            }


        }
    })

})