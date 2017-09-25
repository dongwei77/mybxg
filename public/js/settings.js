/**
 * Created by Administrator on 2017/9/24.
 */
define(['jquery','template','ckeditor','validate','form','uploadify','datepicker','language','region'], function ($,template,ckeditor,validate,form) {
    $.ajax({
        type : 'get',
        url : '/api/teacher/profile',
        dataType : 'json',
        success : function(data){
            /*渲染数据*/
            var html = template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
            //处理上传照片
            $('#upfile').uploadify({
                width:120,
                height:120,
                buttonText : '',
                itemTemplate:'<span></span>',
                swf :'/public/assets/jquery-uploadify/uploadify.swf',
                uploader : '/api/uploader/avatar',
                fileObjName : 'tc_avatar',
                onUploadSuccess : function (a,b) {
                    var obj = JSON.parse(b)
                    $('.preview img').attr('src',obj.result.path);
                }

            })
            //处理省市县三级联动
            $('#pcd').region({
                url : '/public/assets/jquery-region/region.json'
            })

            //处理富文本
            CKEDITOR.replace('editor');

            //处理表单提交
            $('#settingsForm').validate({
                sendForm : false,
                valid : function () {
                    //获取家乡信息
                    var p = $('#p').find('option:selected').text();
                    var c = $('#c').find('option:selected').text();
                    var d = $('#d').find('option:selected').text();
                    var homeTown = p+'|'+c+'|'+d;
                    //同步富文本内容
                    for(var instance in CKEDITOR.instances){
                        CKEDITOR.instances[instance].updateElement()
                    }
                    //提交表单
                    $(this).ajaxSubmit({
                        type:'post',
                        url : '/api/teacher/modify',
                        data : {tc_hometown:homeTown},
                        dataType : 'json',
                        success : function(data){
                            console.log(data);
                            if(data.code == 200){
                               location.reload()
                            }
                        }
                    })
                }
            })
        }
    })
})