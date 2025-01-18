# SUSTech-CAS-ChooseCourse
(给个star谢谢喵~)

1. 打开全校课表，筛选出自己想要的课。按照图示找到课程的p_id。(没有看到queryRwxxcxList的话重新点一下查询)
![alt text](./imgs/image.png)


2. 随便选一门课，同样的方式找到addGouwuche请求，右键copy as fetch(nodejs)
<img src="./imgs/image2.png" width="50%">

3. 打开VSCode，新建一个js文件，将刚刚复制的代码粘贴进去，修改其中的cookie和body 字段中的 p_id，保存。

4. 把代码拷进f12-console中执行

Note: 带有定时器的代码样例，请查看scripts.js文件。修改定时器和课程id即可。



