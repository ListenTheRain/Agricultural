<template>
    <div class="container" style="margin-top: 50px">
      <!--福导航横幅图片内容开始-->
      <div class="row" style="height: 60px;background: url('../../../static/images/m2.jpg');background-size: 100%;background-repeat: no-repeat;width: 100%">
        <h2 style="color: white;font-weight: 800;text-align: center">农村社会化公共服务平台</h2>
      </div>
      <!--横幅部分内容结束-->
      <div class="row" style="margin-top: 5rem">
        <div class="col col-md-3" id="d_menu">
          <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">{{title}}</h3>
            </div>
            <div class="panel-body">
              <ul id="d_menu-list">
                <li :class="index==0?'active':''" v-for="(item,index) in menuList" @click="itemChange(index)">{{item.name}}<i
                  class="pull-right icon iconfont icon-youjiantou"></i></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col col-md-9" id="detail">
          <div class="panel panel-default">
            <div class="panel-heading" style="display: inline-block">
              <h3 class="panel-title pull-left" style="width: 30%;line-height: 34px;line-height: 55px">数据列表</h3>
              <form   class="form-horizontal pull-right" style="width: 100%"  >
                <div class="form-group" style="margin-bottom: 0px">
                  <label class="col-sm-1 control-label" style="width: 5%">省</label>
                  <div class="col-sm-1">
                    <select  class="form-control" >
                      <option></option>
                      <option ></option>
                    </select>
                  </div>

                  <label  class="col-sm-1 control-label" style="width: 5%">州</label>
                  <div class="col-sm-1">
                    <select type="text" class="form-control" >
                      <option></option>
                      <option ></option>
                    </select>
                  </div>

                  <label  class="col-sm-1 control-label" style="width: 5%">县</label>
                  <div class="col-sm-1">
                    <select type="text" class="form-control"  >
                      <option></option>
                      <option ng-repeat="item in county "  ></option>
                    </select>
                  </div>

                  <label  class="col-sm-1 control-label" style="width: 5%">镇</label>
                  <div class="col-sm-1">
                    <select type="text" class="form-control" >
                      <option></option>
                      <option ng-repeat="item in town "  ></option>
                    </select>
                  </div>


                  <label  class="col-sm-1 control-label" style="width: 9%">村委会</label>
                  <div class="col-sm-1">
                    <select type="text" class="form-control"  >
                      <option></option>
                      <option ></option>
                    </select>
                  </div>

                  <label  class="col-sm-1 control-label" style="width: 9%">村小组</label>
                  <div class="col-sm-2">
                    <input  type="text"  class="form-control"  name="groupName"/>
                  </div>
                </div>
              </form>
            </div>


          </div>

            <div class="panel-body">
              <!--<ul id="detail-list">-->
                <!--<li class="active">-->
                  <!--<span class="title">全国农药质量追溯系统生产追溯信息数据对接标准</span>-->
                  <!--<p><span class="pull-left item-left">全国农药质量追溯系统生产迫溯信息数据对接标准已发布，农药生产企业上报生产数据可参照附件《全</span> <span class="pull-right item-right"> 2018-05-06</span></p>-->
                <!--</li>-->

              <!--</ul>-->
              <table class="table table-striped" id="dataList">
                <thead>
                <tr>
                  <th v-for="thead in thead">{{thead}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="data in dataList">
                  <td>{{data.name}}</td>
                  <td>{{data.a}} </td>
                  <td>10</td>
                  <td>18</td>
                </tr>
                </tbody>
              </table>
              <ul class="pagination pull-right">
                <li><a href="#">&laquo;</a></li>
                <li class="active"><a href="#">1</a></li>
                <li ><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&raquo;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--主体内容部分结束-->

</template>

<script>
  import Vue from 'vue'
  import service from '@/components/service/serviceDetils.vue'

  Vue.use(service)
  import VueResource from '@/components/resource/index.js'

  Vue.use(VueResource)
    export default {
        name: "menu",
      data:function () {
                     return{
                       title:'',
                       test :'1111',
                       menuList:[],
                       dataList:[{name:'户主名称',a:'1'}],
                       thead:['户主名称','水田/亩','旱地/亩','林地/亩']
                     }
      },
      watch: {
        "$route": function (e) {
          this.title = this.$route.query.menuName,
            this.menuList =  this.$route.query.menuItem
        }
      },
      created(){
          this.getAddress()
          // this.$http.get('http://192.168.0.222:8083/web/webIndexController/asyncGetNodes?id=44').then(function (res) {
          //     console.log(res.data)
          // })
      },
      mounted(){
          this.title = this.$route.query.menuName,
            this.menuList =  this.$route.query.menuItem
        console.log(this.menuList)
      },
      methods:{
        itemChange(e){
          console.log(e)
          if(e=='0'){
            this.dataList=[]
          }
        },
        getAddress(e){
          console.log(this.test+"sdf")//
          this.dataList= service.methods.getAddress(this,0);
          console.log(this.test+"sdfsfasdfasfassfsdfas")
        }
      }
    }
    $(function () {
                $("#d_menu-list li").click(function () {
                   $("#d_menu-list li").removeClass('active'),
                     $(this).addClass("active")
                })
    })
</script>

<style scoped>
  /****************左侧菜单标题部分样式************/
  #d_menu .panel-title {
    font-size: 30px;
    text-align: center;
    padding-left: 0;
  }

  /*面板主体样式*/
  #d_menu .panel-body {
    padding: 0;
  }

  /*面板内容列表样式*/
  #d_menu-list {
    list-style: none;
    padding: 0;
  }

  /*面板内容列表项样式*/
  #d_menu-list li {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    font-size: 14px;
    cursor: pointer;
  }

  /*面板列表前菱形图标样式*/
  #d_menu-list li:before {
    content: "\e609"; /* 图标编码 */
    font-family: iconfont;
    display: inline-block;
    font-size: 10px;
    margin-left: 1.3em;
    width: 1.3em;
  }

  /*鼠标滑过列表项样式*/
  #d_menu-list li.active, #d_menu-list li:hover {
    background: #48b5d5;
    color: white;
  }

  /*列表面板主体样式*/
  #d_menu .panel-body {
    padding-top: 10px;
  }

  /****************************详情页右侧内容************************/
  /*面板头部样式*/
  #detail .panel-heading {
    border-bottom: 2px solid #009bc7;
    color: #0497ca;

  }

  /*面板标题样式*/
  #detail .panel-heading .panel-title {
    font-size: 18px;
    font-weight: 800;
  }

  /*面板列表样式*/
  #detail-list {
    list-style: none;
  }

  /*列表项图标样式*/
  #detail-list li:before {
    content: "\e609";
    font-family: iconfont;
    display: inline-block;
    font-size: 10px;
    margin-left: 0rem;
    width: 1.3em;
  }

  /*列表项标题部分样式*/
  #detail-list li .title {
    font-size: 18px;
    font-weight: 300;
  }

  /*列表项样式*/
  #detail-list li {
    font-size: 16px;
    line-height: 30px;
    border-bottom: 1px dashed silver;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  }

  /*列表项左侧内容部分样式*/
  #detail-list li p .item-left {
    width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    overflow: hidden;
  }

  /*列表项右侧内容样式*/
  #detail-list li p .item-right {
    width: 14%;
    display: block;
  }

  /*列表项内容描述样式*/
  #detail-list li p {
    font-size: 14px;
    color: #969696;
    text-indent: 1rem;
  }

  /*列表项内容鼠标滑过样式*/
  #detail-list li:hover,  #detail-list li:hover p {
    color: #0497ca;
    border-color: #0497ca;
  }
   .col-md-3{
     padding-left: 0;
   }
  .panel-default{
    border: none;
  }
</style>
