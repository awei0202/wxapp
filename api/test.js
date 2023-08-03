
function test() {
  // app.js
  const express = require('express');
  const app = express();

  // 定义 API 路由
  app.get('/api/hello', (req, res) => {
    res.send('Hello, World!');
  });
  module.exports=app;
  // 启动服务器，监听端口 3000
}

function testmysql() {
// 引入 mysql 模块
const mysql = require('mysql');

// 创建数据库连接配置
const connection = mysql.createConnection({
  host: '192.168.216.141',      // 数据库服务器地址
  user: 'ndky',           // 数据库用户名
  password: '123456',       // 数据库密码
  database: 'test'   // 要连接的数据库名
});

// 连接数据库
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);

  // 在连接成功后执行数据库操作
  // 例如，执行查询并输出结果
  connection.query('SELECT * FROM user', (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      return;
    }
    console.log('Query Result:', results);
  });

  // 关闭数据库连接
  connection.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err.stack);
      return;
    }
    console.log('MySQL connection closed.');
  });
});

}

module.exports = {
  test:test,
  testmysql:testmysql
};
