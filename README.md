# who-am




## 传输
    put /path/filename(本地主机) /path/filename(远端主机)
    get /path/filename(远端主机) /path/filename(本地主机)
## 打包
### 参数
```
-c: 建立压缩文档
-x: 解压
-t: 查看压缩包内容
-r: 向压缩归档的文件里面追加文件
-u: 更新原压缩包中的文件
-v: 显示所有过程
-f: 指定压缩文件
-C: 切换到指定目录
```
### 命令
    解压：`tar -xzvf 2.tar.gz -C ../contents/`
    压缩：`tar -czvf rumenz.tar.gz .[!.]* *`

## 部署
---
### 命令
    构建 docker build -t web .
    启动 docker run -d -p 80:80 web