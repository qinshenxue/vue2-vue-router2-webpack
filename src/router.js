module.exports = {
routes: [
    {
        path: '/about',
        component: resolve => require.ensure([], () => resolve(require('./views/about.vue')), 'about')
    }
]
}