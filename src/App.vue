<template>
  <div id="app">
    <Header></Header>
    <div id="bodys">
    <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Footers: require('@/components/pages/footers').default,
    Footer: require('@/components/pages/footer').default,
    Header: require('@/components/pages/header').default
  }
}
</script>

<style>
#app {
  font-family: '微软雅黑';
  min-width: 800px;

}
#bodys{
  min-height: 600px;
}
 *{
   padding: 0;
   margin: 0;
 }
[v-cloak] {
  display: none;
}
p,h2,h1,h3,h4,h5{
  white-space: pre-wrap
}
</style>
