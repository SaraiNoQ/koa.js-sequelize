[jj112358/node-api: ���ܸ���á�-��Ŀʵս-ͨ��api�ӿڷ��� (github.com)](https://github.com/jj112358/node-api)



#### cloud SQL

[�ֶ�����MySQL���ݿ⣨CentOS 7��](https://help.aliyun.com/document_detail/116727.htm?spm=a2c4g.11186623.0.0.76f01748e1JGIG#concept-221087)



#### cloud git

[�������Git������ - ��+���� - ��Ѷ�� (tencent.com)](https://cloud.tencent.com/developer/article/1367561)



#### nextcloud

https://www.cnblogs.com/shipment/p/14011910.html



#### cloudreve

[(2����Ϣ) centos7�°�װcloudreve���Խ�����_TodChen_Blogger�Ĳ���-CSDN����](



### ����׼��

1. �����Է���
2. �������
3. ��Ҫ��ƣ�ԭ��ͼ��

### ������������

1. ����ѡ��
2. ϵͳ���
3. ���ݿ����
4. �ӿ���ƣ�д���ӿ��ĵ�������ǰ��mock��



## koa

### һ����ʼ����Ŀ

- npm��ʼ��
- git��ʼ��
- ����README�ļ�

### �������Ŀ

- ��װkoa���
- helloworld����

### ������Ŀ�����Ż�

- nodemon
- dotenv
- eslint

### �ġ����·��

- ��װ@koa/router
- ��д·��

### �塢Ŀ¼�ṹ�Ż�

- http�����appҵ����
- route��controller���

### ��������body

- ��װkoa-body

- ע���м��

  - middleware��˳�����Ҫ�����koa-body������router֮ǰ��ע�ᵽapp������
  - ���м��ʱ�����ú���

- �����������ݣ�controller��

- �������ݿ⣨model��

  - [Nodejs֮ORM��� - ���� (jianshu.com)](https://www.jianshu.com/p/0738e29d8af3)

  ORM��Object Relational Mapping

  - ���ݱ�ӳ�䣨��Ӧ��һ����
  - ���ݱ��еļ�¼��column����Ӧһ������
  - ���ݱ��ֶζ�Ӧ���������
  - ���ݱ�Ĳ�����Ӧ����ķ���

### �ߡ�����sequelize

- ��װsequelize
  - [Sequelize ��� | Sequelize �����ĵ� | Sequelize ������](https://www.sequelize.com.cn/)
- �������ݿ�
- ��д�����ļ�

### �ˡ�����Userģ��

- ���Model��

### �š�����û���� && ������

- �Ϸ��Լ�⣨���޿����ݡ����ݸ�ʽ��
- �����Լ�⣨user_name�����ظ���
  - async/await ����

### ʮ������м��

- ͳһ�Ĵ�����

### ʮһ���������

- ��װbcryptjs��

- ```js
  // ������Կ
  	const salt = bcrypt.genSaltSync(10)
  // ��������
  	const hash = bcrypt.hashSync(password, salt)
  // ����ȶ� 
      bcrypt.compareSync(password, res.password)
  ```

   

### ʮ������¼��֤

### ʮ�����䷢token

�û���֤����¼�ɹ��󣬸��û��䷢һ������token

jwt��json web token

- header��ͷ��
- payload���غ�
- signature��ǩ��

��װjsonwebtoken

- jwt.sign
- jwt.verify

auth�м��

- token�Ļ�ȡ��ʽ

�û��ǳ�

- ɾ���û���token

### ʮ�ġ���дrouter

��routerĿ¼��дһ������ļ�������fs.readdirSync�����������ļ���������·��

### ʮ�塢�ϴ�ͼƬ

- ��װkoa-static
- ����body���ı�multipart��formidable
- ����ctx.request.files���ԣ���ȡ���ϴ���ͼƬ
- ͨ��path.basename������ȡ�ϴ�ͼƬ������
- 