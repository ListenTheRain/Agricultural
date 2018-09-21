
<script>
  import Vue from 'vue'
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
  export default {
    name: "test",
    methods:{
      //初始化所有的数据Integer pageSzie,Integer currentPage
      queryPage(e,commentsPageSize,commentsCurrentPage,informationType,selectValue){
        var resouce= e.$resource(VueResource.data.url+'/informationController/getTypePage?informationType='+informationType+'&currentPage='+commentsCurrentPage+ "&pageSzie="+commentsPageSize+"&selectValue="+encodeURI(selectValue));
        resouce.query().then(function ( response ) {
          e.lists=response.data.result
          e.commentsPageSize=response.data.pageSize
          e. commentsCurrentPage=response.data.curPage
          e.commentsPageTotal=response.data.totalPage
          e.commentsCountTotal=response.data.totalCount
        });
      }
    }
  }

</script>

