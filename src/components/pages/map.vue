<template>
  <div class="container">
    <div class="row">
      <div class="col col-md-10">
  <div class="amap-page-container">
    <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
    <!--<el-amap vid="amap" :plugin="plugin" class="amap-demo">-->
    <!--</el-amap>-->
    <el-amap vid="amap" :center="mapCenter" :zoom="12" :plugin="plugin" class="amap-demo">
      <el-amap-marker v-for="marker in markers" :position="marker" ></el-amap-marker>
    </el-amap>
  </div>
      </div>
      <div class="col col-md-2"></div>
    </div>
  </div>
</template>

<style>
  .amap-demo {
    height: 300px;
  }
  .search-box-wrapper{
    border: 1px solid silver;
  }
  .search-btn{
    background: rgb(42, 171, 210)!important;
    color: white;
  }
  .search-box {
    position: absolute;
    top: 55px;
    left: 20px;
  }

  .amap-page-container {
    position: relative;
  }
  .amap-page-container{
    height: 540px;
  }
</style>

<script>
  module.exports = {
    data: function() {
      return {
        plugin: [{
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(instance) {
              console.log(instance);
            }
          }
        }],

        markers: [
          {
            center: [101.85, 25.7],
            radius: 20,
            fillOpacity: 1,
            fillColor: 'rgba(0,0,255,1)',
            events: {
              click: () => {
                alert('click');
              }
            }
          }
        ],
        searchOption: {
          city: '元谋',
          citylimit: true
        },
        mapCenter: [101.85, 25.7]
      };
    },
    methods: {
      addMarker: function() {
        let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
        let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
        this.markers.push([lng, lat]);
      },
      onSearchResult(pois) {
        let latSum = 0;
        let lngSum = 0;
        if (pois.length > 0) {
          pois.forEach(poi => {
            let {lng, lat} = poi;
            lngSum += lng;
            latSum += lat;
            this.markers.push([poi.lng, poi.lat]);
          });
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          };
          this.mapCenter = [center.lng, center.lat];
        }
      }
    }
  };
</script>
