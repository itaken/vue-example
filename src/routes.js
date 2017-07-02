export default {
    "/": {
        name: 'home',
        component: require('./views/index.vue'),
        // auth: false
    },
    "/login": {
        name: 'login',
        component: {
            'login': require('./views/login.vue')
        }
    },
    '/logout': {
        name: 'logout',
        component: {
            // TODO::Logout
        }
    },
    '/log': {
        component: require('./views/log.vue'),
    },
    '/error': {
        component: {
            route: {
                data: function() {
                    // 修改标题
                    this.$root.pageTitle = '404错误提示 - 管理后台';
                }
            },
            template: '<p>这是一个404错误提示!</p>'
        }
    },
    '/grid': {
        pageTitle: "grid - 管理后台",
        component: {
            template: '<grids></grids>',
            components: {
                "grids": function(resolve) {
                    require(['./views/grid.vue'], resolve);
                }
            },
            route: {
                data: function(transition) {
                    // 修改标题
                    this.$root.$set('pageTitle', transition.to.pageTitle);
                    transition.next();
                }
            },
        }
    },
    '/form': {
        component: require('./views/form.vue'),
    },
    "/article": {
        component: {
            template: '<articles></articles>',
            components: {
                "articles": function(resolve) {
                    require(['./views/articles.vue'], resolve)
                }
            }
        }
    }
};
