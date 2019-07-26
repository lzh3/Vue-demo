<template>
    <div class="search">
        <div class="inp">
            <input class="" type="text" placeholder="请输入城市名或拼音:" v-model="keywords">
        </div>
        <div class="search-content wrapper" v-show="keywords">
            <ul class="search-list">
                <li class="list-item border-bottom" v-for="(item,index) in searchData" :key="index">{{item}}</li>
                <li class="list-item border-bottom" v-show="!notfound.length">未匹配到数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll"
    export default {
        name: "citySearch",
        props:["allcity"],
        data(){
            return {
                keywords:"",
                notfound:[],
            }
        },
        created(){

        },
        mounted(){
            new BScroll('.wrapper', {
                scrollY: true,
                click:true
            })
        },
        computed:{
            searchData(){
                let results=[];
                let word=this.keywords.toLowerCase();
                for(let i=0;i<this.allcity.length;i++){
                    this.allcity[i].list.forEach((item,index)=>{
                        if(item.name.includes(this.keywords)||item.pinyin.toLowerCase().includes(word)){
                            results.push(item.name)
                        }
                    })
                }
                this.notfound=results;
                return results;
            }
        },
        methods:{

        }
    }
</script>

<style lang="stylus" scoped>
    .border-bottom:before
        border-color:#aaa
    .search
        height:0.64rem
        margin-top:0
        padding:0.08rem 0
        background rgb(0,187,213)
        overflow hidden
        .inp
            width:100%
            height: 100%
            input
                display block
                width:94%
                height:0.64rem
                margin:0 auto
                border:none
                border-radius 0.1rem
                box-sizing border-box
                text-indent 0.26rem
                outline:none
        .search-content
            position:fixed
            z-index 99
            top:1.6rem
            left:0
            right:0
            bottom:0
            background #ddd
            overflow hidden
            .search-list
                background #fff
                .list-item
                    height:0.6rem
                    line-height 0.6rem
                    text-indent 0.1rem
                    font-size:0.26rem
</style>