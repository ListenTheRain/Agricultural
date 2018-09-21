
<script>
  import Vue from 'vue'
  import VueResource from '@/components/resource/index.js'
  Vue.use(VueResource)
  export default {
    name: "detils",
    methods:{
      //登录
      login(e,userPassword,userName,status,name,headPic){
        var resouce = e.$resource(VueResource.data.url+'/sysUserControler/login?userName='+userName+'&userPassword='+userPassword);
        resouce.query().then(function ( response ) {
            alert(response.data["message"])
            console.log(response.data)
            e.status = response.data['code']
            console.log("12122213"+e.status)
            localStorage.setItem("statu",e.status)
            if(response.data["code"]=='202'){
              $("#myModal").modal('hide')
              this.getUserName(e,name,headPic)
            }
          }
        )

      },
      getUserName(e,userName,headPic){
        var user = e.$resource(VueResource.data.url+'/informationController/getUser')
        user.query().then(function (response) {
          console.log('uesr:'+response.data["userName"])
          console.log('uesr:'+response.data)
          // console.log("用户信息"+response.data.t)
          e.userName = response.data["userName"]
          e.headPic =VueResource.data.url+ response.data["userPictureUri"]
          localStorage.setItem("userName",response.data["userName"])
          localStorage.setItem("headPic",VueResource.data.url+ response.data["userPictureUri"])
        })
      } ,
      /*getAddress(e,id){
        var user = e.$resource(VueResource.data.url+'/web/webIndexController/asyncGetNodes?id='+id)
        user.query().then(function (response) {
          alert(response.data)
          console.log(response.data)
        })
      }*/
      getAddress(e,id){
        alert("sdfsdf")
        var user = e.$resource(VueResource.data.url+'/web/webIndexController/asyncGetNodes?id='+0)
        user.query().then(function (response) {
            alert("sdfsdf")
          console.log('uesr:'+response)

        })
    }


    }
  }
</script>
