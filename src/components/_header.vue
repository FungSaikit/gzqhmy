<template>
  <div>
    <div class="topbar">
        <a href="#">首页</a>
        |
        <a href="#">权和商城</a>
        |
        <a href="#">采购入口</a>
        <span>
          &nbsp&nbsp欢迎您, <span>JackFung ！</span><span>请 <a href="#">登录</a> 。</span>
        </span>
    </div>
    <div class="header">
      <div class="header_inner">
        <img class="logo" src="/static/img/qh_logo.jpg">
        <div class="search_block">
          <input type="text" placeholder="请输入您感兴趣的产品">
          <img src="/static/img/search.png">
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="menu_inner">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">新闻资讯</template>
            <el-menu-item index="2-1">公司介绍</el-menu-item>
            <el-menu-item index="2-2">化工快讯</el-menu-item>
            <el-menu-item index="2-3">联系我们</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">查找产品</template>
            <el-menu-item index="">选项1</el-menu-item>
            <el-menu-item index="">选项2</el-menu-item>
            <el-menu-item index="">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">采购商城</el-menu-item>
          <el-menu-item index="5">订单管理</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "_header",
    data() {
      return {}
    }
  }
</script>

<style scoped>

  a {
    color: dimgray;
    text-decoration: none;
  }

  .topbar {
    min-width: 1280px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    margin: auto;
    background-color: #f6f6f6;
    color: #333;
    text-align: right;
  }

  .header {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #f6f6f6;
  }

  .header_inner {
    width: 1280px;
    margin: auto;
    position: relative;
    height: 75px;
  }

  .logo {
    position: absolute;
    margin: 15px 0;
    height: 45px;
    width: auto;
    left: 0;
    top: 0;
  }

  .search_block {
    position: absolute;
    right: 0;
    top: 22.5px;
    height: 30px;
    border: 1px solid lightgray;
    border-radius: 5px;
    overflow: hidden;
    padding: 0 5px;
  }

  .search_block input {
    height: 100%;
    border: none;
    outline: none;
    vertical-align: top;
    width: 200px;
  }

  .search_block img {
    height: 20px;
    width: 20px;
    margin: 5px;
    cursor: pointer;
  }

  .menu {
    border-bottom: 1px solid lightgray;
  }

  .menu_inner {
    width: 1280px;
    margin: auto;
  }

  .el-menu--horizontal {
    border: none;
  }

</style>
