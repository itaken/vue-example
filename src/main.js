/**
 * VUE + Amaze 管理后台示例
 *
 * @author regel <regelhh@gmail.com>
 * @since 2016-07-01
 * @license MIT
 */
import Vue from 'vue';
import VueRouter from 'vue-router'; // vue路由
import VueResource from 'vue-resource';
import Amazeui from 'amazeui';
import $ from "jquery"; // 引入jquery

import routes from './routes';

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

// If your web server can't handle requests encoded as application/json
// Vue.http.options.emulateJSON = true;
// If your web server can't handle REST/HTTP requests like PUT, PATCH and DELETE
// Vue.http.options.emulateHTTP = true;

// Vue.http.options.root = '/root';
// Vue.http.headers.common['Authorization'] = 'Basic XYZ';

var router = new VueRouter();

router.map(routes);

// TODO::未登录跳转登录页
// router.go({
//     name: 'login'
// });

// 内容主题
import AppMain from './App';
Vue.component('app-main', AppMain);

var App = Vue.extend({});

// 添加调试
router.afterEach(function(transition) {
    console.log('成功浏览到: ' + transition.to.path);
});

router.start(App, '#vue-main');
