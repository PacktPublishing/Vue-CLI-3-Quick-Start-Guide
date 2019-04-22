import Vue from 'vue';
import CustomArticle from './CustomArticle.vue';

new Vue({
    el: '#entryPoint',
    render: h => h(CustomArticle),
})
