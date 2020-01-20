import axios from "axios"



export let getCityData = function(){
    return axios.get("/static/mork/city.json")
};

export const getDetails=function(id){
    return axios.get("/static/mork/detail/"+id+".json");
};

export let getRecommend = function(){
    return axios.get("/static/mork/recommend/1.json")
};


