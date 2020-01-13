

 # p-digital-matrix
数字矩阵特效

> 引入介绍（Introduction）

p-digital-matrix是一款根据黑客帝国数字雨编写的htmlweb网页特效，可根据自定义样式展示
```javascript
npm i p-digital-matrix -s
```
    
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<style type="text/css">
				html,body{
					margin: 0;
					padding: 0;
					width: 100%;
					height: 100%;
				}
				.app{
					width: 100%;
					height: 100%;
					background: #000;
				}
			</style>
		</head>
	<body>
		<div class="app"></div>
		<script src="../lib/p-digital-matrix.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			let main = new PMatrix({
				el:'.app',//容器的选择器标识
				fontSize:20,//字符的字号
				color:'red',//字符的颜色
				backgroundColor:'green',//字符的背景颜色
				maxSpeed:20//随机下落的最大速度
			})
			main.start()
			window.onresize = function(){
				main.resize();
			}
		</script>
	</body>
</html>
```  
```javascript
  import PMatrix from 'p-digital-matrix'
  let main = new PMatrix({
  	el:'.app',//容器的选择器标识
  	fontSize:20,//字符的字号
  	color:'red',//字符的颜色
  	backgroundColor:'green',//字符的背景颜色
  	maxSpeed:20//随机下落的最大速度
  })
  main.start()
  window.onresize = function(){
  	main.resize();
  }
```
