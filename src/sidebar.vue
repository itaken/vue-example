<template>
  <div class="sidebar">
    <h1 class="serious-error">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'sidebar!'
    }
  }
}
</script>
<style lang="scss">
    @import "~normalize.css"; // 引入reset
    .main-body{
        height: 100%;
        width: 100%;
        margin: 0px;
        padding: 0px;
    }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "variables";
    @import "compass/support","compass/css3";
    // defind support browsers
    $supported-browsers: chrome,firefox,ie,opera,safari;
    $browser-minimum-versions:("ie":"8");
    .sidebar{
        overflow: hidden;
        padding: 0px;
        width: 350px;
        @include user-select(none);
        float: left;
        padding-left: 10px;
        background: -webkit-linear-gradient(rgba(234, 238, 243, 0.2), #EAEAEA), -webkit-linear-gradient(left, #EAEAEA, #EAEAEA 97%, #DDDDDD);
        z-index: 20;
        width: 340px;
        height: 100%;
        position: fixed;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .error {
        color:#f00;
    }
    .serious-error{
        @extend .error;
        border: 1px #f00;
    }
</style>
