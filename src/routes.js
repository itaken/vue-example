export default {
    "/": {
        component: require('./views/index.vue'),
        // auth: false
    },
    "/login": {
        name: 'login',
        component: require('./views/login.vue')
    },
    '/logout': {
        // TODO::Logout
    },
    '/foo': {
        component: {
            template: '<p>This is foo!</p>'
        }
    },
    "/article": {
        component: require('./views/articles.vue')
    }
};
