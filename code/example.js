<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>值班管理系统</title>
<style type="text/css">
h1{
	text-align: center;
}
span{
	color:green;
}
#box1{
	float:left;
	width:255px;
	height:800px;
	
	margin-right: 10px;
		background-color: #0074cc;
  	*background-color: #0055cc;
  	background-image: -ms-linear-gradient(right,#FFFFFF,#99FFFF);
  	background-image: -webkit-gradient(linear,0 0,0 100%,
  		                                             from(#FFFFFF), to(#99FFFF));
  	background-image: -webkit-linear-gradient(right,#FFFFFF,#99FFFF);
  	background-image: -o-linear-gradient(right,#FFFFFF,#99FFFF);
  	background-image: -moz-linear-gradient(right,#FFFFFF,#99FFFF);
  	background-image: linear-gradient(right,#FFFFFF,#99FFFF);
  	background-repeat: repeat-x;
  	display: inline-block;
  	*display:inline;
  	border:1px solid #cccccc;
  	*border:0;
  	border-color:#ccc;
}
#box2{
	float:right;
	width:1610px;
	height:800px;
	
	margin-right: 10px;
		background-color: #0074cc;
  	*background-color: #0055cc;
  	background-image: -ms-linear-gradient(bottom,#FFFFFF,#ccffff);
  	background-image: -webkit-gradient(linear,0 0,0 100%,
  		                                             from(#FFFFFF), to(#ccffff));
  	background-image: -webkit-linear-gradient(bottom,#FFFFFF,#ccffff);
  	background-image: -o-linear-gradient(bottom,#FFFFFF,#ccffff);
  	background-image: -moz-linear-gradient(bottom,#FFFFFF,#ccffff);
  	background-image: linear-gradient(bottom,#FFFFFF,#ccffff);
  	background-repeat: repeat-x;
  	display: inline-block;
  	*display:inline;
  
  	*border:0;
  	border-color:#ccc;
}
p1{
	background: #00CCFF;
	background-size:200px 50px;
}
a:hover{
	color:black;
}
</style>
<body>
<script src="example.js"></script>>
<h1>值班管理系统</h1>
<div id="box1">
<h2>管理员权限</h2>
<nav>
    <p1>权限设置</p1>
	<p><a href="index.html">权限设置</a></p>
	<p1>注册用户审核管理</p1>
	<p><a href="index.html">注册用户审核管理</a></p>
	<p1>系统公告管理</p1>
	<p><a href="index.html">系统公告管理</a></p>
	<p1>值班安排</p1>
	<p><a href="index.html">值班安排</a></p>
	<p1>意见反馈</p1>
	<p><a href="index.html">意见反馈</a></p>
	<p1>系统管理</p1>
	<p><a href="index.html">修改密码</a></p>
	<p><a href="index.html">退出系统</a></p>

</nav>
</div>
<div id="box2">
<h2><span>系统时间：</span></h2>
     <p><span><time dtatime="2016-10-18 15:52" pubdate>2016-10-18 15:52 星期二</time></span></p>
   <div class="div1"><h2><span>通知公告</span></h2>
     <table>
     <tbody>
     <tr>
     	<th>标题</th>
     	<th>发布时间</th>
     	<th>查看</th>
     </tr>
     <tr>
     	<th>现在发布一条最新公告</th>
     	<th>2016-10-18 15:21</th>
     	<th><a href="index.html">查看详情</a></th>
     </tr>
     <tr>
     	<th>现在发布一条最新公告</th>
     	<th>2016-10-18 15:21</th>
     	<th><a href="index.html">查看详情</a></th>
     </tr>
     <tr>
     	<th>现在发布一条最新公告</th>
     	<th>2016-10-18 15:21</th>
     	<th><a href="index.html">查看详情</a></th>
     </tr>
     <tr>
        <th>现在发布一条最新公告</th>
     	<th>2016-10-18 15:21</th>
     	<th><a href="index.html">查看详情</a></th>
     </tr>
     </tbody>	
     </table>
   </div>
   <div class="div2"><h2>今日值班人员</h2>
     <table>
     <tbody>
     <tr>
     	<th>姓名</th>
     	<th>联系方式</th>
     	<th>值班日期</th>
     </tr>
     <tr>
     	<th>刘二蛋</th>
     	<th>110</th>
     	<th>2016-10-18</th>
     </tr>
     <tr>
     	<th>刘二蛋</th>
     	<th>110</th>
     	<th>2016-10-18</th>
     </tr>
     <tr>
     	<th>刘二蛋</th>
     	<th>110</th>
     	<th>2016-10-18</th>
     </tr>
     </tbody>
     </table>
   </div>
   <div class="div3"><h2>明日值班人员</h2>
     <table>
     <tbody>
     <tr>
     	<th>姓名</th>
     	<th>联系方式</th>
     	<th>值班日期</th>
     </tr>
     <tr>
     	<th>李二嘻</th>
     	<th>120</th>
     	<th>2016-10-20</th>
     </tr>
     <tr>
     	<th>李二嘻</th>
     	<th>120</th>
     	<th>2016-10-20</th>
     </tr>
     <tr>
     	<th>李二嘻</th>
     	<th>120</th>
     	<th>2016-10-20</th>
     </tr>
     <tr>
     	<th>李二嘻</th>
     	<th>120</th>
     	<th>2016-10-20</th>
     </tr>
     </tbody>
     </table>
   </div>
</div>
</body>
</head>