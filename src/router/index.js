import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/home/home"

Vue.use(Router);

import city from "@/components/city/city"

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
        }
    ]
})
