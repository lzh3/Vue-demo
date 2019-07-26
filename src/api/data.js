import axios from "axios"



export let getCityData = function(){
    return axios.get("/static/mork/city.json")
};


