<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="navbar" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <!--<a class="navbar-brand" href="#"  style=" color: #c0d649;    font: 28px/30px 'Impact';padding: 12px 12x">农村社会化公共服务系统</a>-->
            <h1 class="h1" id="h1">农村社会化公共服务系统</h1>
          </div>
          <div class="pull-right">
            <div>
              <ul class="nav navbar-nav">
                <li> <div>
                  <div class="input-group nav navbar-nav" style="width: 210px;float: right;top: 8px">
                    <input type="text" class="form-control" PLACEHOLDER="请输入搜索内容" v-model="selectValue">
                    <router-link :to="{path:'/moreDetils',query:{selectValue:selectValue,informationType:-1}}"
                                 class="input-group-addon"><i class="glyphicon glyphicon-search" style="color: #0056b3"></i>
                    </router-link>
                  </div>
                </div></li>
                <li v-if="userName!==''"><img v-bind:src="headPic" alt="" class="img-circle img-responsive"
                                              style="max-width: 50px;max-width: 50px">
                </li>
                <li v-if="userName!==''" class="welcome" style="margin-left: 8px;margin-top: 5px;cursor: pointer"><h4>
                  {{userName}}</h4>
                  <ul class="welcome-option">
                    <li><a href="" data-toggle="modal" id="" data-target="#mymodal-data-changge"
                           v-on:click="creatCode()">修改密码</a></li>
                    <div class="modal" id="mymodal-data-changge" tabindex="-1" role="dialog"
                         aria-labelledby="mySmallModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">
                              <span aria-hidden="true">×</span>
                              <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title" style="text-align: center">修改密码</h4>
                          </div>
                          <div class="modal-body">
                            <div style="padding: 20px 100px 10px;">
                              <form class="bs-example bs-example-form" role="form">
                                <div class="input-group">
                                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                  <input type="text" class="form-control " placeholder="用户名" v-model="userName"
                                         disabled="disabled"
                                  >
                                  <!--<span class="btn glyphicon glyphicon-remove form-control-feedback"-->
                                  <!--v-on:click="clearName()"></span>-->
                                </div>
                                <span style="color: #761c19">{{namedis}}</span>
                                <br>
                                <div class="input-group">
                                  <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                  <input type="password" class="form-control" PLACEHOLDER="密码" v-model="pass"
                                         v-on:blur="validactorNamePass()"><span
                                  class="btn glyphicon glyphicon-remove form-control-feedback"
                                  v-on:click="clearPass()"></span>
                                </div>
                                <span style="color: #761c19">{{passdis}}</span>
                                <br>
                                <div class="input-group">
                                  <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                  <input type="password" class="form-control" PLACEHOLDER="确认密码" v-model="apass"
                                         v-on:blur="validactorNameaPass()"><span
                                  class="btn glyphicon glyphicon-remove form-control-feedback"
                                  v-on:click="clearaPass()"></span>
                                </div>
                                <span style="color: #761c19">{{apassdis}}</span>
                                <br>
                                <div class="input-group">
                                  <span class="input-group-addon"><div v-model="checkCode">{{checkCode}}</div></span>
                                  <input type="text" class="form-control" placeholder="验证码" v-model="checkPass"
                                         v-on:blur="validactorNameCkeckPass()">
                                  <span style="padding: 0 0" class="input-group-addon">
                              <a style="padding: 0 0;margin: 0 0 " class="btn btn-xs btn-success"
                                 v-on:click="creatCode()">换一张</a></span>
                                </div>
                                <span style="color: #761c19">{{codedis}}</span>
                                <div style="margin-top: 10px">
                                  <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                                  </button>
                                  <button type="button" class="btn btn-primary pull-right">
                                    提交
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <li><a v-on:click="loginOut()" style="cursor: pointer;" class="head-button">退出登录</a></li>
                  </ul>
                </li>
                <li v-if="userName==''"><a href="#" data-toggle="modal" id="submitData" data-target="#myModal"
                                           v-on:click="creatCode()" style="color: black">登录</a></li>
                <!-- 模态框（Modal） -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                     aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                          &times;
                        </button>
                        <h4 class="modal-title" id="myModalLabel" style="text-align: center">
                          登录
                        </h4>
                      </div>
                      <div class="modal-body">
                        <div style="padding: 20px 100px 10px;">
                          <form class="bs-example bs-example-form" role="form">
                            <div class="input-group">
                              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                              <input type="text" class="form-control" placeholder="用户名" v-model="name"
                                     v-on:blur="validactorName()">
                              <span class="btn glyphicon glyphicon-remove form-control-feedback"
                                    v-on:click="clearName()"></span>
                            </div>
                            <span style="color: #761c19">{{namedis}}</span>
                            <br>
                            <div class="input-group">
                              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                              <input type="password" class="form-control" PLACEHOLDER="密码" v-model="pass"
                                     v-on:blur="validactorNamePass()"><span
                              class="btn glyphicon glyphicon-remove form-control-feedback"
                              v-on:click="clearPass()"></span>
                            </div>
                            <span style="color: #761c19">{{passdis}}</span>
                            <br>
                            <div class="input-group">
                              <span class="input-group-addon"><div v-model="checkCode">{{checkCode}}</div></span>
                              <input type="text" class="form-control" placeholder="验证码" v-model="checkPass"
                                     v-on:blur="validactorNameCkeckPass()">
                              <span style="padding: 0 0" class="input-group-addon">
                              <a style="padding: 5px 5px;margin: 0 0;color: black;cursor: pointer "
                                 v-on:click="creatCode()">换一张</a></span>
                            </div>
                            <span style="color: #761c19">{{codedis}}</span>
                            <div style="margin-top: 10px">
                              <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                              </button>
                              <button type="button" class="btn btn-primary head-button pull-right" id="submit"
                                      v-on:click="submitLogin()">
                                登录
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div><!-- /.modal-content -->
                  </div><!-- /.modal -->
                </div>
                <li v-if="userName==''"><a href="#" data-toggle="modal" data-target="#mymodal-data"
                                           v-on:click="creatCode()" style="color: black;background: ">注册</a></li>
                <div class="modal" id="mymodal-data" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
                     aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                          <span aria-hidden="true">×</span>
                          <span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title" style="text-align: center">注册</h4>
                      </div>
                      <div class="modal-body">
                        <div style="padding: 20px 100px 10px;">
                          <form class="bs-example bs-example-form" role="form">
                            <div class="input-group">
                              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                              <input type="text" class="form-control" placeholder="用户名" v-model="name"
                                     v-on:blur="validactorName()">
                              <span class="btn glyphicon glyphicon-remove form-control-feedback"
                                    v-on:click="clearName()"></span>
                            </div>
                            <span style="color: #761c19">{{namedis}}</span>
                            <br>
                            <div class="input-group">
                              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                              <input type="password" class="form-control" PLACEHOLDER="密码" v-model="pass"
                                     v-on:blur="validactorNamePass()"><span
                              class="btn glyphicon glyphicon-remove form-control-feedback"
                              v-on:click="clearPass()"></span>
                            </div>
                            <span style="color: #761c19">{{passdis}}</span>
                            <br>
                            <div class="input-group">
                              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                              <input type="password" class="form-control" PLACEHOLDER="确认密码" v-model="apass"
                                     v-on:blur="validactorNameaPass()"><span
                              class="btn glyphicon glyphicon-remove form-control-feedback"
                              v-on:click="clearaPass()"></span>
                            </div>
                            <span style="color: #761c19">{{apassdis}}</span>
                            <br>
                            <div class="input-group">
                              <span class="input-group-addon"><div v-model="checkCode">{{checkCode}}</div></span>
                              <input type="text" class="form-control" placeholder="验证码" v-model="checkPass"
                                     v-on:blur="validactorNameCkeckPass()">
                              <span style="padding: 0 0" class="input-group-addon">
                              <a style="padding: 0 6px;margin: 0 0;background: transparent;border: none;color: black "
                                 class="btn btn-xs btn-success"
                                 v-on:click="creatCode()">换一张</a></span>
                            </div>
                            <span style="color: #761c19">{{codedis}}</span>
                            <div style="margin-top: 10px">
                              <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                              </button>
                              <button type="button" class="btn btn-primary pull-right">
                                注册
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <li><a href="http://183.224.16.71:2080" class="head-button" target="_blank"
                       style="color: black">管理平台登录</a></li>

              </ul>
            </div>

          </div>
        </div>
      </nav>

    </div>
      <div class="container-fluid" style="background: rgba(57, 119, 59, 0.81);height: 50px;position: absolute;z-index: 999;width: 99%;padding: 0">
        <!--<div class="col col-md-2 col-xs-2 col-sm-2" style="padding-left: 0"><a href="#">-->
        <!--<img src="../../../static/images/logo.png" class="img-responsive" alt=""></a></div>-->
        <div class="container">
          <ul class="menu">
            <router-link to="/"><li class="menu-item active">
             首页
            </li> </router-link>
            <router-link :to="{path:'/Menu',query: {informationType: 2,menuName:'档案管理',menuItem:archives}}"><li class="menu-item">
             档案管理
            </li> </router-link>
            <router-link :to="{path:'/Map',query: {menuName:'地图管理',menuItem:[{name:'地图管理'}]}}"><li class="menu-item">
             地图管理
            </li> </router-link>
            <router-link :to="{path:'/Menu',query: {informationType: 3,menuName:'地块管理',menuItem:[
              {name:'地块管理'}]}}"> <li class="menu-item">
             地块管理
            </li></router-link>

            <router-link :to="{path:'/Menu',query:{menuName:'党建合作社',menuItem:[{name:'党建合作社'}]}}"><li class="menu-item">党建合作社</li>  </router-link>
            <li class="menu-item">专家库</li>
            <!--<li>-->
              <!--<router-link :to="{path:'/moreDetils',query: {informationType: 1,menuName:'社会化服务'}}">社会化服务</router-link>-->
            <!--</li>-->
            <!--<li>-->
              <!--<router-link :to="{path:'/moreDetils',query: {informationType: 4,menuName:'农业快讯'}}">农业快讯</router-link>-->
            <!--</li>-->
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import service from '@/components/service/serviceDetils.vue'

  Vue.use(service)
  export default {
    name: "header",
    data: function () {
      return {
        name: '',
        pass: '',
        checkPass: '',
        message: '',
        passdis: '',
        codedis: '',
        checkCode: '',
        namedis: '',
        menu: '',
        apass: '',
        apassdis: '',
        userName: '',
        headPic: '',
        statuCode: '',
        selectValue: '',
        archives: [{name:'人员档案管理'},{name:'种植档案'}]
      }
    },
    mounted: function () {
      if (localStorage.getItem("statu") == 202) {
        if (this.userName == '') {
          this.userName = localStorage.getItem("userName")
          this.headPic = localStorage.getItem("headPic")
        }
      }
    },
    methods: {
      clearName: function () {
        this.name = ''
      },
      clearPass: function () {
        this.pass = ''
      },
      clearaPass: function () {
        this.apass = ''
      },
      validactorName: function () {
        if (this.name === '') {
          this.namedis = '用户名不能为空！'
        } else {
          if (this.name.length > 6) {
            this.namedis = '用户名长度不能超过6位'
          } else {
            this.namedis = ''
          }
        }
      },
      loginOut: function () {
        this.userName = ''
      },
      validactorNamePass: function () {
        if (this.pass === '') {
          this.passdis = '密码不能为空！'
        } else {
          if (this.pass.length < 6 || this.pass.length > 15) {
            this.passdis = '密码长度不能小于6位且不能大于15位'
          } else {
            this.passdis = ''
          }
        }
      },
      validactorNameaPass: function () {
        if (this.apass !== this.pass) {
          this.apassdis = '两次输入密码不一致！请核对'
        }
      },
      validactorNameCkeckPass: function () {
        if (this.checkPass.length == 0) {
          console.log("验证码长度：" + this.checkPass.length)
          this.codedis = '请输入验证码！'
        } else {
          console.log(this.checkCode + ":" + this.checkPass)
          //this.checkCode=this.checkCode.trim()
          console.log((this.checkCode).replace(/\s+/g, "").toLocaleLowerCase() + ":" + (this.checkPass).replace(/\s+/g, "").toLocaleLowerCase())
          if (((this.checkCode).replace(/\s+/g, "").toLocaleLowerCase()) != ((this.checkPass).replace(/\s+/g, "").toLocaleLowerCase())) {
            this.codedis = '验证码不正确！'
            console.log()
            this.$options.methods.creatCode()
          } else {
            this.codedis = ''
          }
        }
      },
      creatCode: function () {
        var code = "";
        var codeLength = 4;//验证码的长度
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//随机数
        for (var i = 0; i < codeLength; i++) {
          //循环操作
          var index = Math.floor(Math.random() * 36);//取得随机数的索引（0~35）
          code += " " + random[index];//根据索引取得随机数加到code上
        }
        this.checkCode = code;//把code值赋给验证码
        // console.log(this.checkCode)
      },
      submitLogin: function () {
        if ((this.namedis == '') && (this.passdis == '') && (this.apassdis == '') && (this.codedis == '') && (this.name != '')) {
          service.methods.login(this, this.pass, this.name, this.statuCode, this.userName, this.headPic);
          console.log("状态代码" + this.statuCode)
        } else {
          alert("请按要求将字段填写完整")
        }

      },
      getUserName: function () {
        service.methods.getUserName(this, this.userName, this.headPic);


      }
    }
  }
  $(function () {
    $(".menu a").click(function () {
      $(".menu a li").removeClass('active'),
        $(this).children("li").addClass("active")
    })
  })
</script>

<style scoped>
  #h1 {
    color: #4CAF50;
    text-shadow: 1px 1px 1px #4CAF50;
    font-size: 26px;
  }
   .menu-item ul li{
     border-bottom: 1px dashed yellow;
   }
  nav {
    font-weight: bold;
    margin-bottom: 2px;
  }

  .container-fluid {
    margin-right: 0;
    margin-left: 0;
    padding: 0;
  }

  .glyphicon-search {
    cursor: pointer;
  }

  router-link span {
    margin-right: 5px;

  }

  .menu .menu-item {
    float: left;
    display: block;
    width: 12%;
    line-height: 50px;
    color: white;
    font-size: 16px;
    text-align: center;
  }
  .menu li:hover,.menu li.active{
    background: rgba(0,0,0,0.5);
    cursor: pointer;
  }
  .menu li,li.menu-item{
    padding-right: 0;
    padding-left: 0;
  }
  .menu li ul{
    display: none;
    padding-left: 0;
    padding-right: 0;
  }
  .menu li:hover ul{
    display: block;
    -webkit-transition: all 300ms;
    -moz-transition: all 300ms;
    -o-transition: all 300ms;
    transition: all 300ms;
  }

  .menu li a{
    color: white;
  }
  .menu li:hover{
     padding: 0;
  }

  .glyphicon-remove {
    color: #761c19;
    pointer-events: auto;
  }

  .btn-success {
    /*background-color:#24783e;*/
    /*border: none;*/
  }

  .glyphicon-remove :hover {
    cursor: pointer;
  }

  .head-button:hover {
    border-radius: 0;
  }

  .navbar-inverse .navbar-nav > li > a {
    color: black;
  }

  .footer {
    list-style: none;

  }

  .navbar-inverse .navbar-brand {

    font: 28px/30px 'Impact'
  }

  .modal-header {
    background-color: #238129;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    border: none;
  }

  h4 {
    color: #ffffff;
  }

  .footer ul li {
    margin-top: 10px;
  }

  li {
    word-break: break-all;
    word-wrap: break-word;
  }

  li {
    width: auto;
  }

  #menu li a :hover {
    color: #fff;
    border-radius: 5px;
    background-color: #1cba9d;
  }

  .nav > li > a:hover, .nav > li > a:focus {
    text-decoration: none;
    border: 1px #1cba9d;
    /*border-radius: 5px;*/
  }

  .welcome-option {
    list-style: none;
    display: none;
    z-index: 9999;
    position: absolute;
    /*background-color: rgba(22,159,20,0.8);*/
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
    padding: 12px 16px;
    margin-left: -50px;
  }

  .welcome-option li {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .welcome-option li a:hover {
    background-color: #169f14;
    border-radius: 10px;
    padding: 8px 8px;
    color: white;
  }

  .welcome img {
    height: 40px;
    width: 40px;
    z-index: 0;
    position: relative;
    margin-top: 5px;
  }

  .welcome:hover .welcome-option {
    display: block;
  }
</style>
