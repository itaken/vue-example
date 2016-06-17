import Vue from 'vue'
import sidebar from './sidebar'
import container from './container' /* eslint-disable no-new */
new Vue({
    el: 'body',
    components: {
        sidebar, container
    }
})
