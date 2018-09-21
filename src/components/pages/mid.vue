<template>
  <div id="mid" class="container" style="padding: 0">
    <div class="row">
      <div id="myCarousel" class="carousel slide" style="height: 380px;overflow: hidden">
        <!-- 轮播（Carousel）指标 -->
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
        <!-- 轮播（Carousel）项目 -->
        <div class="carousel-inner">
          <div class="item active">
            <img src="../../../static/images/m1.jpg" alt="First slide">
            <div class="carousel-caption">
              <h1>标题1</h1>
            </div>
          </div>
          <div class="item">
            <img src="../../../static/images/m2.jpg" alt="Second slide">
            <div class="carousel-caption"><h1>标题1</h1></div>
          </div>
          <div class="item">
            <img src="../../../static/images/m3.jpg" alt="Third slide">
            <div class="carousel-caption"><h1>标题1</h1></div>
          </div>
          <div class="item">
            <img src="../../../static/images/m1.jpg" alt="Fourth slide">
            <div class="carousel-caption"><h1>标题1</h1></div>
          </div>
        </div>
        <!-- 轮播（Carousel）导航 -->
        <!--<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">-->
        <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
        <!--<span class="sr-only">Previous</span>-->
        <!--</a>-->
        <!--<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">-->
        <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
        <!--<span class="sr-only">Next</span>-->
        <!--</a>-->
      </div>
    </div>
    <!--<div class="row col-md-12" id="butie-nav">-->
    <!--<h4 style="color: white;height: 50px;padding-top: -5px;font:28px/30px 'Impact';color: #c0d649" class="col col-md-2" v-on:click="makeActive()">政策补贴</h4>-->
    <!--<ul class="pull-right" style="line-height: 50px;font-size: 16px">-->
    <!--<li><a href="#">农机购置补贴政策 </a>&nbsp;&nbsp;|</li>-->
    <!--<li><a href="#">设施农用地支持政策</a>&nbsp;&nbsp; |</li>-->
    <!--<li><a href="#">种植业结构调整政策</a>&nbsp;&nbsp; |</li>-->
    <!--<li><a href="#">畜牧良种补贴政策</a> &nbsp;&nbsp;|</li>-->
    <!--<li><span class="glyphicon glyphicon-chevron-left"></span><span class="glyphicon glyphicon-chevron-left"></span>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <div class="container" style="margin-top: 10px">
      <div class="row col-md-12 zcbt">
        <div class="col col-md-7">
          <h4 class=""
              style="color:white;font: 700 18px/37px 'Microsoft Yahei';display: block;background: url('../../../static/images/bander.png');background-size: 30%;background-repeat: no-repeat;border-bottom: 2px solid #2aabd2">
            <strong style="padding-left: 48px">政策指南</strong><a
            href="#" class="pull-right" style="font-size: 10px"><router-link :to="{path:'/moreDetils',query: {informationType: 2,menuName:'政策补贴'}}">更多>></router-link></a></h4>
          <ul class="butie" style="line-height: 25px">
            <li v-for="(site,index) in policies" v-if="index<7">
              <!--<router-link  v- to="/Butie" v-bind="">{{site.informationTtile}}<span class="pull-right " style="color: black">{{site.informationDate}}</span></router-link>-->
              <router-link
                :to="{path:'/Detail',query: {informationId: site.informationId,informationType:site.informationType}}">
              <span style="display: inline-block;width: 64%"> {{site.informationTtile}}
              </span><span class="pull-right " style="display: inline-block;width: 32%">{{site.informationDate}}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="col col-md-5">
          <h4
            style="color:white;font: 700 18px/37px 'Microsoft Yahei';display: block;background: url('../../../static/images/bander.png');background-size: 40%;background-repeat: no-repeat;border-bottom: 2px solid #2aabd2">
            <strong style="padding-left: 47px">档案管理</strong> <a class="pull-right" style="font-size: 10px">更多>></a></h4>
          <ul class="redian">
            <li v-for="(item,index) in topics" v-if="index<8">
              <router-link
                :to="{path:'/detail',query:{informationId:item.informationId,informationType:item.informationType}}">
                {{item.informationTtile}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row" style="height: 60px;background: url('../../../static/images/m2.jpg');background-size: 100%;background-repeat: no-repeat;width: 100%">
        <h2 style="color: white;font-weight: 800;text-align: center">农村社会化公共服务平台</h2>
      </div>
      <div class="row col-md-12 nonghe">
        <div class="col col-md-5">
          <h4 class=""
              style="color:white;font: 700 18px/37px 'Microsoft Yahei';display: block;background: url('../../../static/images/bander.png');background-size: 40%;background-repeat: no-repeat;border-bottom: 2px solid #2aabd2">
            <strong style="padding-left: 48px">地块管理</strong><a
            href="#" class="pull-right" style="font-size: 10px"><router-link :to="{path:'/moreDetils',query: {informationType: 2,menuName:'政策补贴'}}">更多>></router-link></a></h4>
          <ul class="butie" style="line-height: 25px">
            <li v-for="(site,index) in policies" v-if="index<7">
              <!--<router-link  v- to="/Butie" v-bind="">{{site.informationTtile}}<span class="pull-right " style="color: black">{{site.informationDate}}</span></router-link>-->
              <router-link
                :to="{path:'/Detail',query: {informationId: site.informationId,informationType:site.informationType}}">
              <span style="display: inline-block;width: 64%"> {{site.informationTtile}}
              </span><span class="pull-right " style="display: inline-block;width: 32%">{{site.informationDate}}</span>
              </router-link>
            </li>

          </ul>
        </div>

        <div class="col col-md-4">
        <h4
          style="color:white;font: 700 18px/37px 'Microsoft Yahei';display: block;background: url('../../../static/images/bander.png');background-size: 64%;background-repeat: no-repeat;border-bottom: 2px solid #2aabd2">
          <strong style="padding-left: 47px">党建合作社</strong> <a class="pull-right" style="font-size: 10px">更多>></a></h4>
        <ul class="redian">
          <li v-for="(item,index) in topics" v-if="index<8">
            <router-link
              :to="{path:'/detail',query:{informationId:item.informationId,informationType:item.informationType}}">
              {{item.informationTtile}}
            </router-link>
          </li>
        </ul>
      </div>
        <div class="col col-md-3">
          <h4
            style="color:white;font: 700 18px/37px 'Microsoft Yahei';display: block;background: url('../../../static/images/bander.png');background-size: 70%;background-repeat: no-repeat;border-bottom: 2px solid #2aabd2">
            <strong style="padding-left: 54px">专家库</strong> <a class="pull-right" style="font-size: 10px">更多>></a></h4>
          <ul class="redian">
            <li v-for="(item,index) in topics" v-if="index<8">
              <router-link
                :to="{path:'/detail',query:{informationId:item.informationId,informationType:item.informationType}}">
                {{item.informationTtile}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import serviceTest from '@/components/service/serviceMid.vue'

  Vue.use(serviceTest)
  export default {
    name: "mid",
    data: function () {
      return {
        //初始化政策补贴
        policies: serviceTest.methods.defaultData(this, 2),
        //搜索热点
        topics: serviceTest.methods.defaultData(this, -1),
        //合奏设运营和农技
        cooperation: serviceTest.methods.defaultData(this, 3),
        //样式设置
        isActive1: true,
        isActive2: false,
        activeClass: 'btn btn-success--1 btn-lg',
        errorClass: 'btn  btn-lg',
        //农合观点
        viewpoint: serviceTest.methods.defaultData(this, 7),
        //红河学院
        collage: serviceTest.methods.defaultData(this, 5),
        //社会化服务
        service: serviceTest.methods.defaultData(this, 1),
        //农业跨讯
        news: serviceTest.methods.defaultData(this, 4),
        //获取图片
        images: serviceTest.methods.getImages(this)
      }
    },
    methods: {
      /* 政策补贴*/
      makeActive: function () {
        //console.log(serviceTest.methods.detectCats(this,1) )
        console.log(this.policies)
        console.log(this.topics)
      },
      changeDate(e) {
        this.cooperation = serviceTest.methods.defaultData(this, e.id)
        if (e.id == 3) {
          this.isActive1 = true
          this.isActive2 = false
        } else {
          this.isActive1 = false
          this.isActive2 = true
        }
        //设值样式
      }
    }
  };
  // $(document).ready(function () {
  //   var oDiv = document.getElementById('box');
  //   var oUl = document.getElementById('ul');
  //   var speed = 2;//初始化速度
  //
  //   oUl.innerHTML += oUl.innerHTML;//图片内容*2-----参考图（2）
  //   var oLi = document.getElementById('ul').getElementsByTagName('li');
  //   oUl.style.width = oLi.length * 300 + 'px';//设置ul的宽度使图片可以放下
  //
  //   // var oBtn1 = document.getElementById('btn1');
  //   // var oBtn2 = document.getElementById('btn2');
  //
  //
  //   function move() {
  //     if (oUl.offsetLeft < -(oUl.offsetWidth / 2)) {//向左滚动，当靠左的图4移出边框时
  //       oUl.style.left = 0;
  //     }
  //
  //     if (oUl.offsetLeft > 0) {//向右滚动，当靠右的图1移出边框时
  //       oUl.style.left = -(oUl.offsetWidth / 2) + 'px';
  //     }
  //
  //     oUl.style.left = oUl.offsetLeft + speed + 'px';
  //   }
  //
  //   // oBtn1.addEventListener('click',function(){
  //   //   speed = -2;
  //   // },false);
  //   // oBtn2.addEventListener('click',function(){
  //   //   speed = 2;
  //   //},false);
  //
  //   var timer = setInterval(move, 30);//全局变量 ，保存返回的定时器
  //
  //   oDiv.addEventListener('mouseout', function () {
  //     timer = setInterval(move, 30);
  //   }, true);
  //   oDiv.addEventListener('mousemove', function () {
  //     clearInterval(timer);//鼠标移清入除定时器
  //   }, true);
  // });
  $(function () {
    $('#myCarousel').carousel({
      interval: 2000
    })

  })
</script>

<style scoped>
  .carousel-indicators li {
    width: 50px;
    height: 8px;
    border-radius: 0;
  }

  #ul li {
    cursor: pointer;
  }

  .carousel-inner .item img {
    width: 100%;
    height: 100%;
  }

  * {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .fenge {
    padding-left: 0;
    padding-right: 0;
    margin-top: 5px
  }

  .box-bottom {
    margin-top: 20px;
    padding-left: 0;
    padding-right: 0
  }

  .carousel-control:hover {
    color: white;
  }

  .box-bottom-left {
    padding-left: 0;
    padding-right: 20px;
    border: 1px ridge #337ab7;
    min-height: 489px
  }

  .box-bottom-left h4 {
    color: white;
    padding: 10px 10px;
    height: 50px;
    border-bottom: 3px solid #337ab7;
  }

  .box-bottom-left h4 .hr-left {
    width: 15%;
    border-top: 3px solid #eee;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 10px
  }

  .box-bottom-left h4 .hr-right {
    width: 25%;
    border-top: 3px solid #eee;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 10px
  }

  #butie-nav {
    background-color: #074b12;
    height: 50px
  }

  #box {
    position: relative;
    overflow: hidden;
    height: 150px;
    padding-left: 0;
    padding-right: 0;
  }

  .carousel-caption h1 {
    color: #449d44;
    font-weight: 800;
  }

  #box ul {
    width: 1200px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }

  a:hover {
    color: blue;
  }

  .btn-success--1 {
    background-color: white;
    border-top: 1px inset #449d44;
    border-left: 2px inset silver;
    border-right: 2px inset silver;
  }

  #ul li {
    width: 300px;
    height: 150px;
    float: left;
    list-style: none;
  }

  .pull-right {
    list-style: none;
    margin-right: 2px;
  }

  .list-group-item {
    border: none;
    border-bottom: 2px dashed silver;
  }

  .zcbt {
    /*border: 1px ridge #337ab7;*/
    margin: 0 0;
    padding-left: 0;
    padding-right: 0;
  }

  .zcbt-1 {
    padding-left: 0;
  }

  .zcbt-1 img {
    height: 100%
  }

  #play {
    cursor: pointer;
    transition: all 0.6s;
  }

  #img img {
    width: 500px;
    height: 100px;
  }

  #play:hover {
    transform: scale(1.4);
  }

  .list-group-item:hover {
    -webkit-animation: myItem 2s;
  }

  @-webkit-keyframes myItem {
    from {
    }
    to {
      background-color: #449d44;
      background-size: 100%;
      border-radius: 5px;
    }
  }

  #play1 {
    cursor: pointer;
    transition: all 0.6s;
  }

  #play1:hover {
    transform: scale(1.4);
  }

  #play2 {
    cursor: pointer;
    transition: all 0.6s;
  }

  #play2:hover {
    transform: scale(1.4);
  }

  #play3 {
    cursor: pointer;
    transition: all 0.6s;
  }

  #play3:hover {
    transform: scale(1.4);
  }

  #tixishow {
    border: 1px solid #337ab7;
    position: absolute;
    background: #449d44;
    color: #f8f8f8;
    border-radius: 10px;
  }

  .row {
    margin-left: 0;
    margin-right: 0;
  }

  #kuaixunshow {
    border: 1px solid #337ab7;
    position: absolute;
    background: #449d44;
    color: #f8f8f8;
    border-radius: 10px;
  }

  #shehuihua p a {
    margin-top: 20px;
    margin-bottom: 20px;
    color: black;
  }

  .pull-right li {
    float: left;
    color: #f8f8f8;
    margin-right: 20px;
    padding-top: 10px;
  }

  h3 {
    color: #f8f8f8;
    margin-top: 10px;
  }

  a {
    /*text-decoration: none;*/
  }

  .pull-right li a {
    color: #f8f8f8;
  }

  ul {
    list-style: none;
  }

  .butie {
    padding-left: 10px;
    line-height: 30px;
  }

  /*.butie li{*/
  /*margin-top: 6px;*/
  /*margin-bottom: 6px;*/
  /*}*/
  .butie li a {
    color: black;
  }

  .redian li {
    margin-top: 6px;
    margin-bottom: 6px;
  }

  .redian li a {
    color: black;
  }

  .redian {
    padding-left: 10px;
  }

  .nongji li a {
    color: black;
  }

  .nongji li {
    line-height: 25px;
  }


  .fuwu li {
    float: left;
    margin-right: 60px;
    margin-top: 10px;
    width: 30%;
  }

  .fuwu li a {
    color: black;
    font-size: 14px;
    font-weight: bold;
  }

  /*.fuwu li a:hover{*/
  /*background-color: #4cae4c;*/
  /*border-radius: 5px;*/
  /*padding: 10px 10px;*/
  /*color: #f8f8f8;*/
  /*}*/
  #guandian a {
    line-height: 30px;
    /*font-size: 18px;*/
    margin-top: 20px;
    color: black;
  }

  #xueyuan a {
    /*line-height: 35px;*/
    /*font-size: 16px; */
    margin-top: 20px;
    color: black;
  }

  .butie li .pull-right {
    color: black;
  }

  .box-bottom-left-left {
    padding-left: 0;
    padding-right: 0;
  }

  .box-bottom-left-left h5 {
    color: #f8f8f8;
    background-color: #72e0e0;
    padding-top: 5px;
    padding-bottom: 5px
  }

  .box-bottom-left-left img {
    z-index: 0;
    padding-right: 0
  }

  .box-bottom-right {
    padding-right: 0;
    border: 1px ridge #337ab7;
    min-height: 450px
  }

  .box-bottom-right h4 {
    background-color: white;
    color: white;
    padding: 8px 10px;
    height: 50px;
    border-bottom: 3px solid #337ab7;
  }

  .box-bottom-right h4 .hr-left {
    width: 20%;
    border-top: 3px solid #eee;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 10px
  }

  .box-bottom-right h4 span {
    float: left;
  }

  .box-bottom-right h4 {
    padding-top: 15px;
  }

  .box-bottom-left h4 {
    padding-top: 15px;
  }

  .box-bottom-right h4 .hr-right {
    width: 40%;
    border-top: 3px solid #eee;
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 10px
  }

  .box-bottom-right-right {
    padding-left: 0;
    padding-right: 0;
  }

  .butie li {
    width: 100%;
  }

  .nonghe {
    padding-bottom: 20px;
    margin-top: 20px;
    margin-left: 0;
    padding-left: 0;
    margin-right: 0;
    padding-right: 0
  }

  .nonghe-left {
    padding-left: 0;
    min-height: 405px;
    /*border: 1px solid #a9a9a9*/
  }

  .nonghe-left .button-group-lg {
    padding-bottom: 0;
    background-color: #449d44;
  }

  .nonghe-left-box {
    border: 1px outset #337ab7;
    border-top: none;
    min-height: 344px;
  }

  .nonghe-left-box ul {
    line-height: 20px;
    padding-left: 20px;
    padding-right: 20px;
    min-height: 316px
  }

  .nonghe-left-box ul li {
    margin-left: 20px
  }

  .nonghe-right {
    margin-right: 0;
    padding-right: 0;
    border: 1px outset #337ab7;
    padding-left: 0;
    min-height: 370px
  }

  .nonghe-right div .btn-lg {
    border: none;
    border-radius: 0;
    background-color: #449d44;
    width: 100%
  }

  .nonghe-right div img {
    margin-top: 10px
  }

  .midbox {
    border: 1px ridge #337ab7;
    margin-left: 0
  }

  .midbox-left {
    padding-left: 0
  }

  .midbox-mid .btn-lg {
    border: none;
    border-radius: 0;
    background-color: #449d44;
    width: 100%;
    text-align: left
  }

  .midbox-right {
    padding-right: 0
  }

  .midbox-right .btn-lg {
    border: none;
    border-radius: 0;
    background-color: #449d44;
    width: 100%;
    text-align: left;
    margin-right: -30px
  }
</style>
