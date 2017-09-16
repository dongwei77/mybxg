<?php
  //header('content-type:text/html; charset=utf8');
  //include('./header.html');
  //include 包含一个子页面
  //echo '<div>页面内容</div>';




  //echo $_SERVER['PATH_INFO'];
  //var_dump($_SERVER);
  //$_SERVER['PATH_INFO'];是获取地址栏中后面拼接的地址

  //返回的是如 /a/b
  //默认目录名称
  $dir = 'main';
  //默认文件名称
  $filename = 'index';

   if(array_key_exists('PATH_INFO',$_SERVER)){
    //获取路径
    $path = $_SERVER['PATH_INFO'];
    //去掉第一个斜杠
    $str = substr($path,1);
    //字符串分隔
    $ret =explode('/',$str);
    //var_dump($ret);

    //判断有几个值
    if(count($ret)==2){
      $dir = $ret[0];
      $filename = $ret[1];
    }else{
    //其他情况全都跳转到login
      $filename = 'login';
    }
   }
    include('./views/'.$dir.'/'.$filename.'.html');



?>