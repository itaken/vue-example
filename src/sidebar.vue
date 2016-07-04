<template>
  <div class="sidebar">
    <input class="sidebar-search" v-model="search" v-on:keyup.enter="doSearch" placeholder="请输入查询条件~">
    <h2>消费者版</h2>
    <ul id="customer">
        <li v-for="url in urls">
            {{$index + 1}}.{{url.name}}
        </li>
    </ul>
    <h2>商家版</h2>
    <ul id="merchant">
        <li>第一级</li>
        <li>第二级</li>
        <li>第三级</li>
        <li>第四级</li>
        <li>第五级</li>
        <li>第六级</li>
        <li>第七级</li>
    </ul>
  </div>
</template>

<script>
    export default {
      data () {
          return {
              search: '',
              urls:[
                  {name:'链接1'},
                  {name:'链接2'},
                  {name:'链接3'}
              ],
              doSearch:function(){
                  this.search = '11111';
              }
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
        @at-root{
            .sidebar-search{
                margin: 15px 5px 5px 5px;
                @include border-radius(18px);
                height: 22px;
                padding: 2px 5px 4px 8px;
                color: #a71616;
            }
        }
        h2{
            font-size: 20px;
            color: #F77D7D;
        }
        ul{
            text-decoration: none;
            border:1px solid #fff;
            @include border-radius(8px);
            background-color: #ffe3e3;
            margin: 2px 8px;
            padding: 3px 10px;
        }
        li{
            cursor: pointer;
            list-style: none;
            text-decoration: none;
            // color: #fff;
            padding: 2px 0px;
            &:hover{
                color:#fff;
            }
        }
    }

    .error {
        color:#f00;
    }
    .serious-error{
        @extend .error;
        border: 1px #f00;
    }
</style>
