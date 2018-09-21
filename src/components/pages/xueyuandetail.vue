<template>
  <div class="container" >
    <div class="row">
      <ul class="breadcrumb" style="margin-left: 50px">
        <li>
          <a href="/">首页</a> <span class="divider">></span>
        </li>
        <li>
          <a href="/List">农合学院</a> <span class="divider">></span>
        </li>
        <li class="active">详情</li>
      </ul>
    </div>
    <div class="row">
      <div class="col col-md-9">
        <h3 style="text-align: center">【视频】最新下发的2000万农业补贴去哪拿！</h3>
        <div class="col">
        <img src="../../../static/images/nongc.jpg" class="img-responsive" alt="" style="z-index: 0;width: 100%">
        <img id="play" src="../../../static/images/play.png" class="img-responsive" alt="" style="z-index: 1;position: absolute; top: 50%; left: 50%; margin-left: -50px; margin-top: -50px; ">
        </div>
        <p>许多合作社在成立初期面临不知道怎么发展、运作，而运转一段时间的合作社也有经营困难、方向不明显等问题。这
          些问题产生的原因可能是多方面的，当地的产业环境不好。合作社的方向和目的不明确、运营能力差、社员组织性
          差、缺少可盈利项目等都可能是其中的原因。
        </p>
        <p>那么对于我们广大的合作社来说，有什么经历、经验可供借鉴吗?合作社怎样能从决泱人群中脱颗而出。这节课我们
          将通过*示范合作社一克山县仁发现代农机专业合作社的发展历程和主要负责人的经历，经验来说明合作社发展需
          要注意的几个问题，希望能给大家带来帮助。
        </p>
      </div>
      <div class="col col-md-3">
        <div class="title">
        <a href="#" class="btn btn-default btn-lg">农合推荐</a>
        </div>
        <div class="ul" style="border: 1px ridge silver">
          <ul style="list-style: none">
            <a href="#"><li> 合作社赚钱了，该怎么分。太实用了!</li></a>
            <a href="#"><li>  抢占先机土地股份合作社的春天  >></li></a>
            <a href="#"><li>  合作社发展现状与聚人方法  >></li></a>
            <a href="#"><li>  张图看懂”公司+合作社+农户“的运营模式>></li></a>
            <a href="#"><li>  400万元如何撬动1.7亿元支持合作社  >></li></a>
            <a href="#"><li>  合作社发起主体面面观。看看暗样的才赚钱  >></li></a>
            <a href="#"><li>  合作社培调必知合作社性质与相关法律法规>></li></a>
            <a href="#"><li>  合作社开展信用合作五大注意事项</li></a>
            <a href="#"><li>  合作社异地开展业务怎么办?</li></a>
            <a href="#"><li>  你的合作社发展困难，就因为差一个权利</li></a>
            <a href="#"><li>  国家给贷3万亿，合作社等十大领域将受益</li></a>
            <a href="#"><li>  更多</li></a>
          </ul>
        </div>
        <img src="../../../static/images/xueyuan/nongheship.png" alt="" class="img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col" style="border: 1px ridge silver;margin-right: 15px">
        <strong style="font-size: 16px;margin-left: 10px">发表评论 </strong> <span class="btn btn-success" style="margin-left: 10%;margin-top: 5px;margin-bottom: 5px">好评</span><span class="btn btn-default" style="margin-left: 10px">差评</span>
      </div>
      <div class="col">
        <div>
          <h5 style="width: 20%" class="pull-left">我想说两句</h5> <p class="pull-right" style="margin-top: 5px">已有 <a href="#">0</a>条评论</p>
          <textarea type="text" class="form-control" style="height: 200px">  </textarea>
          <div style="display: inline">
          <p style="width: 10%" class="pull-left;">还可以输入200个字符</p>
          <p class="btn btn-default pull-right" style="margin-top: 2px;">发表评论</p>
          </div>
        </div>
      </div>
      <div class="row">
      <div  style="padding: 10px 10px;border-top: 1px ridge silver;border-bottom: 1px ridge silver;margin-top: 50px">
        <h4>近期评论</h4>
      </div>
        <div class="pinglun">
          <ul class="list-group">
            <li class="list-group-item">
              <div class="media">
                <a  class="media-left">
                  <img src="../../../static/images/logo.png" alt="媒体对象" class="media-object img-circle">
                </a>
                <div class="media-body" style="/*padding-top: 1%;line-height: 30px;*/padding-left: 2%">
                  <p class="media-heading"><h4><strong>abc</strong></h4><span>2018-5-14</span>&nbsp;&nbsp;&nbsp;&nbsp;14:08:00<span></span></p>
                  <p style="text-indent:2em">各地应注重政策创设，不断加大产业园支持力度。统筹现有资金渠道，按照“渠道不乱、用途不变”的原则向产业园倾斜，形成集聚效应。要鼓励地方创新产业园管理体制和产业园投资、建设、运营方式，积极通过PP.政府购买服务、贷款贴息等方式，撬动更多金融和社会资本投入产业园建设。</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "xueyuandetail"
    }
</script>

<style scoped>
  #play:hover{
    transform: scale(1.4);
    cursor: pointer;
  }
  ul li{
    line-height: 40px;
  }
  ul a{
    color: black;
  }
  .col-md-9 p{
    margin-top: 30px;
    line-height: 25px;
    text-indent: 2em;
  }
  .pinglun  ul li img{
    width: 80px;
    height: 80px;
  }
</style>
