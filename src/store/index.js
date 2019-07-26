import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        hotCity:"",
        selectCity:localStorage.getItem("selectcity")||"深圳",
        
    },
    mutations:{
        saveCity(state,val){
            state.selectCity=val;
            localStorage.setItem("selectcity",val);
        }
    }
});