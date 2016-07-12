<template>
    <!-- sidebar start -->
    <div class="admin-sidebar am-offcanvas" id="admin-offcanvas">
      <div class="am-offcanvas-bar admin-offcanvas-bar">
        <ul class="am-list admin-sidebar-list">
          <li>
              <a v-link="{name:'home'}"><span class="am-icon-home"></span> 首页</a>
          </li>
          <li class="admin-parent">
            <a class="am-cf" data-am-collapse="{target: '#collapse-nav'}">
                <span class="am-icon-file"></span> 页面模块
                <span class="am-icon-angle-right am-fr am-margin-right"></span>
            </a>
            <ul class="am-list am-collapse admin-sidebar-sub am-in" id="collapse-nav">
              <li>
                  <a v-link="{path:'/'}" class="am-cf">
                      <span class="am-icon-check"></span> 个人资料
                      <span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span>
                  </a>
              </li>
              <li>
                  <a v-link="{path:'/article'}">
                      <span class="am-icon-th"></span> 文章列表
                      <span class="am-badge am-badge-secondary am-margin-right am-fr">24</span>
                  </a>
              </li>
              <li><a v-link="{path:'/log'}"><span class="am-icon-calendar"></span> 系统日志</a></li>
              <li><a v-link="{path:'/error'}"><span class="am-icon-bug"></span> 404</a></li>
            </ul>
          </li>
          <li><a v-link="{path:'/grid'}"><span class="am-icon-table"></span> 表格</a></li>
          <li><a v-link="{path:'/form'}"><span class="am-icon-pencil-square-o"></span> 表单</a></li>
          <li><a v-link="{path:'/logout'}"><span class="am-icon-sign-out"></span> 注销</a></li>
        </ul>
        <div class="am-panel am-panel-default admin-sidebar-panel">
          <div class="am-panel-bd">
            <p><span class="am-icon-bookmark"></span> 公告</p>
            <p>时光静好，与君语；细水流年，与君同。—— Amaze UI</p>
          </div>
        </div>
      </div>
    </div>
    <!-- sidebar end -->
</template>
