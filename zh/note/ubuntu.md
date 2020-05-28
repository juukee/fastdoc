# 更新系统
```
sudo apt update -y && sudo apt upgrade -y

```


# 安装xfce4界面
```
sudo apt-get install xfce4 -y
```

# 安装window xrdp模块
```
sudo apt-get install xrdp -y
```
## xsession配置
对于非root用户登录服务器的情况，应该首先将xfce4-session写入该用户文件夹的xsession文件：/home/username/.xsession
echo "xfce4-session" >~/.xsession


## 这一点至关重要,重启xrdp
```
sudo service xrdp restart
```

### 可能出现的问题（默认浏览器无法使用），安装firefox浏览器或者Chrome浏览器
``` bash
sudo apt install firefox  
```


二、Ubuntu系统安装中文字体
```
apt-get install language-pack-zh*
apt-get install chinese*
sudo apt install -y  --no-install-recommends fonts-wqy-microhei
sudo apt install -y  --no-install-recommends ttf-wqy-zenhei
```

设置支持中文显示执行
``` 
localectl set-locale LANG=zh_CN.UTF-8 
```
设置支持中文显示或者执行如下命令
```
echo 'export LC_ALL=zh_CN.utf8' >> ~/.bashrc
source ~/.bashrc
```


三、window连接Ubuntu注意事项：
1.如果是服务器版，注意安全组配置，是否放行对应的端口（一般为3389或者3350）
2.远程桌面切记性能选择最优，否则连接以后画面卡顿！！！