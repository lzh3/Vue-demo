import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/home"

Vue.use(Router);

import city from "@/components/city/city"
import detail from "@/components/detail/detailContainer"
import weekend from "@/components/weekend/weekend"
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path:"/city",
            component:city,
        },
        {
            path:"/detaillink/:id",
            name:"detaillink",
            component:detail,
        },
        {
            path:"/weekend/:id",
            name:"weekend",
            component:weekend
        }
    ]
})
