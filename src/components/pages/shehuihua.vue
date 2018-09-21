<template>
  <div class="container">
    <div class="row">
      <ul class="breadcrumb" style="margin-left: 50px">
        <li>
          <a href="/">首页</a> <span class="divider">></span>
        </li>
        <li>
          <a href="/List">社会化服务</a> <span class="divider">></span>
        </li>
      </ul>
    </div>
    <ul class="list">
      <a href="/Detail"><li class="list-group-item" v-for="(list,index) in lists">
        <div class="media">
          <a v-on:click=" getAll(list.imgUrl,list.title,list.about)" class="media-left">
            <img v-bind:src="list.imgUrl" alt="媒体对象" class="media-object">
          </a>
          <div class="media-body" style="padding-top: 1%;line-height: 30px;padding-left: 2%">
            <h3 class="media-heading">{{list.title}}</h3>
            <p style="padding-top: 2%">{{list.detail}}</p>
          </div>
        </div>
      </li>
      </a>
    </ul>
    <div class="button-group" style="text-align: center;margin-bottom: 10px">
      <button class="btn btn-default pull-left">第{{currPage}}/{{total}}页</button> &nbsp;
      <a class="btn btn-default" v-on:click="page($event)" value="10">10</a>
      <a class="btn btn-default" v-on:click="page($event)" value="20">20</a>
      <a class="btn btn-default" v-on:click="page($event)" value="50">50</a>
      <a class="btn btn-default" v-on:click="page($event)" value="100">100</a>
      <a class="btn btn-default" v-on:click="page($event)" value="200">200</a>
      <a class="btn btn-default" v-on:click="page($event)" value="first">第一页</a>
      <a class="btn btn-default" v-on:click="page($event)" value="top">上一页</a>
      <a class="btn btn-default" v-on:click="page($event)" value="next">下一页</a>
      <a class="btn btn-default" v-on:click="page($event)" value="last">尾页</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shehuihua",
    data() {
      return {
        lists: '',
        item: 10,
        currPage: 1 ,
        total:'',
        start:0,
        end:10,
        lLength:''
      }
    },
    created: function () {
      this.$http.get('static/shehuihua.json').then(function (data) {
        let json = data.bodyText;
        this.lists = JSON.parse(json)
        this.total = Math.ceil(this.lists.length/this.item)
      })
    },
    methods: {
      page: function (event) {
        let item = event.target.getAttribute('value')
        if(item%1===0){
          console.log(event.target.getAttribute('value'))
          this.item = item
          this.start = 0
          this.total = Math.ceil(this.lists.length/this.item)
          this.currPage=1
          console.log("true")
        }else if(item==='first'){
          this.currPage = 1
          this.start = 0
          this.end = this.start+this.item
        }else if(item==='last'){
          this.currPage = this.total
          this.end = this.lists.length
          this.start = this.total -this.item
        }else if(item==='top'){
          if(this.currPage>1){
            this.currPage = this.currPage-1
            this.start = this.start-this.item
            this.end = this.end-this.item
          }else if(item==='next'){
            if(this.currPage<this.total){
              this.currPage = this.currPage+1
              this.start = this.start+this.item
              this.end = this.end+this.item
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  img{
    height:250px;
    width: 350px;
  }
  a{
    text-decoration: none;
    color: black;
  }
  p{
    text-indent: 2em;
  }
</style>
