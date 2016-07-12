<template>
    <header class="am-topbar am-topbar-inverse admin-header">
      <div class="am-topbar-brand">
        <strong>VUE+AmazeUI</strong> <small>管理后台</small>
      </div>
      <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>
      <div class="am-collapse am-topbar-collapse" id="topbar-collapse">
        <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
          <li><a href="javascript:;"><span class="am-icon-envelope-o"></span> 消息 <span class="am-badge am-badge-warning">5</span></a></li>
          <li class="am-dropdown" data-am-dropdown>
            <a class="am-dropdown-toggle" data-am-dropdown-toggle href="javascript:;">
              <span class="am-icon-users"></span> 用户A <span class="am-icon-caret-down"></span>
            </a>
            <ul class="am-dropdown-content">
              <li><a href="#"><span class="am-icon-user"></span> 用户资料</a></li>
              <li><a href="#"><span class="am-icon-cog"></span> 设置</a></li>
              <li><a href="#"><span class="am-icon-power-off"></span> 退出</a></li>
            </ul>
          </li>
          <li class="am-hide-sm-only"><a href="javascript:;" id="admin-fullscreen"><span class="am-icon-arrows-alt"></span> <span class="admin-fullText">开启全屏</span></a></li>
        </ul>
      </div>
    </header>
    <div class="am-cf admin-main">
      <!--[if lte IE 9]>
          <p class="browsehappy">你正在使用<strong>过时</strong>的浏览器，Amaze UI 暂不支持。 请 <a   href="http://browsehappy.com/" target="_blank">升级浏览器</a>
            以获得更好的体验！</p>
      <![endif]-->
      <!-- sidebar start -->
      <sidebar></sidebar>
      <!-- sidebar end -->
      <!-- content start -->
        <div class="admin-content">
            <div class="admin-content-body">
                <router-view></router-view>
            </div>
            <footer class="admin-content-footer">
              <hr>
              <p class="am-padding-left">© 2016 这是版权信息区域.</p>
            </footer>
      </div>
      <!-- content end -->
    </div>
</template>

<script>
    // 侧边栏
    import sidebar from './views/sidebar.vue';

    export default {
        components: {
            'sidebar':sidebar
        }
    }
</script>

<style lang="scss">
    @import "~amazeui/dist/css/amazeui.min.css";
    @import "./assets/admin.css";
    @import "variables";  // 自定义常量
    @import "compass/support","compass/css3";
    // 定义支持的浏览器
    $supported-browsers: chrome,firefox,ie,opera,safari;
    // 定义最低支持浏览器版本
    $browser-minimum-versions:("ie":"8");
</style>
