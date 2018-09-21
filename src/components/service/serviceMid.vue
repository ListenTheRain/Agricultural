
<script>
  import Vue from 'vue'
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
  export default {
    name: "test",
    methods:{
      //初始化所有的数据
       defaultData(e,informationType,flag){
        var resouce2 = e.$resource(VueResource.data.url+'/informationController/getJsonDate?informationType='+informationType);
        resouce2.query().then(function ( response ) {
          if(informationType==-1){ //热点
              e.topics= response.data
            console.log(e.topics)
          }
          if(informationType==2){//政策
            e.policies= response.data
            console.log(e.policies)
          }
          if(informationType==3||informationType==6){//农技
            e.cooperation= response.data
            console.log(e.cooperation)
          }
          //农合观点viewpoint
          if(informationType==7){//政策
            e.viewpoint= response.data
            console.log(e.viewpoint)
          }
          //农合 学院collage=5
          if(informationType==5){//政策
            e.collage= response.data
            console.log(e.collage)
          }
          //社会服务service=1
          if(informationType==1){//政策
            e.service= response.data
            console.log(e.service)
          }
          //农业快讯news=4
          if(informationType==4){//政策
            e.news= response.data
            console.log(e.news)
          }
        });
      },

      getImages(e) {
          var resouce2 = e.$resource('http://183.224.16.71:2080/informationController/getImages');
          resouce2.query().then(function (response) {
            e.images
          });
        }
      }
  }

</script>

