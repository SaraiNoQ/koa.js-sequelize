[jj112358/node-api: 【杰哥课堂】-项目实战-通用api接口服务 (github.com)](https://github.com/jj112358/node-api)



#### cloud SQL

[手动部署MySQL数据库（CentOS 7）](https://help.aliyun.com/document_detail/116727.htm?spm=a2c4g.11186623.0.0.76f01748e1JGIG#concept-221087)



#### cloud git

[云主机搭建Git服务器 - 云+社区 - 腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1367561)



#### nextcloud

https://www.cnblogs.com/shipment/p/14011910.html



#### cloudreve

[(2条消息) centos7下安装cloudreve，自建网盘_TodChen_Blogger的博客-CSDN博客](



### 二、准备

1. 合理性分析
2. 需求分析
3. 概要设计（原型图）

### 三、技术分析

1. 技术选型
2. 系统框架
3. 数据库设计
4. 接口设计（写出接口文档，方便前端mock）



## koa

### 一、初始化项目

- npm初始化
- git初始化
- 创建README文件

### 二、搭建项目

- 安装koa框架
- helloworld测试

### 三、项目基本优化

- nodemon
- dotenv
- eslint

### 四、添加路由

- 安装@koa/router
- 编写路由

### 五、目录结构优化

- http服务和app业务拆分
- route与controller拆分

### 六、解析body

- 安装koa-body

- 注册中间件

  - middleware的顺序很重要，这个koa-body必须在router之前被注册到app对象上
  - 绑定中间件时必须用函数

- 解析请求数据（controller）

- 操作数据库（model）

  - [Nodejs之ORM框架 - 简书 (jianshu.com)](https://www.jianshu.com/p/0738e29d8af3)

  ORM；Object Relational Mapping

  - 数据表映射（对应）一个类
  - 数据表中的记录（column）对应一个对象
  - 数据表字段对应对象的属性
  - 数据表的操作对应对象的方法

### 七、集成sequelize

- 安装sequelize
  - [Sequelize 简介 | Sequelize 中文文档 | Sequelize 中文网](https://www.sequelize.com.cn/)
- 连接数据库
- 编写配置文件

### 八、创建User模型

- 拆分Model层

### 九、添加用户入库 && 错误处理

- 合法性检测（有无空数据、数据格式）
- 合理性检测（user_name不能重复）
  - async/await 掌握

### 十、拆分中间件

- 统一的错误处理

### 十一、密码加密

- 安装bcryptjs库

- ```js
  // 生成密钥
  	const salt = bcrypt.genSaltSync(10)
  // 生成密文
  	const hash = bcrypt.hashSync(password, salt)
  // 密码比对 
      bcrypt.compareSync(password, res.password)
  ```

   

### 十二、登录验证

### 十三、颁发token

用户认证，登录成功后，给用户颁发一个令牌token

jwt：json web token

- header：头部
- payload：载荷
- signature：签名

安装jsonwebtoken

- jwt.sign
- jwt.verify

auth中间件

- token的获取方式

用户登出

- 删除用户的token

### 十四、改写router

在router目录下写一个入口文件，利用fs.readdirSync方法，加载文件夹中所有路由

### 十五、上传图片

- 安装koa-static
- 配置body，改变multipart和formidable
- 利用ctx.request.files属性，获取到上传的图片
- 通过path.basename方法获取上传图片的名字
- 