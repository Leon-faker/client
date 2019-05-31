<template>
    <div class="col-page-article" >
        <div class="col-sx-parent">
            <div class="col-ch-describe">
                <span>Blog</span></br>
                <span>write by Federik</span></br>
                <span>Some technical blogs and life logs about Java.</span>
            </div>
        </div>
        <div v-for="(item,index) in articlelst" v-bind:key="index" class="col-sx-parent" @mouseenter="enter(index)" @mouseleave="leave(index)"> 
            <div class="col-ch-image" @click="toReaderPage(item.articleId)">
                <img  v-bind:class="{col_ch_image_fadein_actives: isActive == index}" src="../../static/home-1.jpg"/>
            </div>
            <div class="col-ch-date">
                <span>{{ index }}</span><p></p>
                <span>五月 2018</span>
            </div>
            <div class="col-ch-titel" v-bind:class="{col_titel_active: isActive == index,col_titel_fadeout_active: isFadeOut == index}">
                <span v-bind:class="{titel_active: isActive == index}">{{ item.articleName }}</span>
            </div>
        </div>
        <div id="footer">
            
        </div>
    </div>
</template>

<script>
import Footer from '../../components/Header'
export default {
    components: {
        Footer
    },
    data () {
        return {
            isActive: -1,
            isFadeOut: -1,
            articlelst: [],
        }
    },
    asyncData (app) {
        return app.$axios.post('http://localhost:9000/client/obtainArticles')
        .then((res) => {
            return {articlelst: res.data.data }
        })
        
    },
    mounted () {
        
    },
    methods: {
        enter(index) {
            this.isActive = index
            this.isFadeOut = -1
        },
        leave(index) {
            this.isActive = -1
            this.isFadeOut = index
        },

        toReaderPage(id) {
            this.$router.push({path: '/'+id})
        }
    }
}
</script>

<style>
    
    
    .col_titel_active{
        background-color: rgb(251, 83, 83);
        animation:myfirst 0.5s;
        -moz-animation:myfirst 0.5s; /* Firefox */
        -webkit-animation:myfirst 0.5s; /* Safari and Chrome */
        -o-animation:myfirst 0.5s; /* Opera */
    }

    .col_titel_fadeout_active{
        background-color:  #ffffff;
        -webkit-animation: fadeout 1s; /* Safari and Chrome */
    }

    .col_ch_image_fadein_actives{
        opacity: 0.5;
       -webkit-transform: scale(1.1);
    }

    

    @keyframes fadeout {
        from {background:rgb(251, 83, 83);}
        to {background:#ffffff;}
    }

    @keyframes myfirst
    {
    from {background:#ffffff;}
    to {background:rgb(251, 83, 83);}
    }

    @-moz-keyframes myfirst /* Firefox */
    {
    from {background: #ffffff;}
    to {background:rgb(251, 83, 83);}
    }

    @-webkit-keyframes myfirst /* Safari and Chrome */
    {
    from {background: #ffffff;}
    to {background:rgb(251, 83, 83);}
    }

    @-o-keyframes myfirst /* Opera */
    {
    from {background:#ffffff;}
    to {background:rgb(251, 83, 83);}
    }

    .col-ch-describe{
        width: inherit;
        height: inherit;
        padding: 80px;
    }

    .col-ch-describe span:first-child{
        text-align: left;
        font-size: 7em;
        font-family: "Impact";
        color: rgb(251, 83, 83);
    }

    .col-ch-describe span:nth-child(3){
        color: black;
        font-size: 3em;
        font-family: "Impact"
    }

    .col-ch-describe span:nth-child(5){
        font-size: 2em;
        color: rgb(38, 38, 38)
    }

    .col-sx-parent{
        position: relative;
        display: inline-block;
        vertical-align: top;
        width: 555px;
        height: 430px;
        margin-top: 15px;
    }

    .col-ch-image img{
        width: 550px;
        height: 370px;
        transition: all 0.5s linear 0s;
    }

    .col-ch-image{
        position: absolute;
        overflow: hidden;
        cursor: pointer;
        width: 550px;
        height: 370px;
    }

    .col-ch-date{
        position: absolute;
        width: 130px;
        height: 130px;
        background-color: rgb(251, 83, 83);
        text-align: center;
        padding-top: 13px;
    }

    .col-ch-date span{
         color: #ffffff;
    }

    .titel_active{
        color: #ffffff;
    }

    .col-ch-date span:first-child{
        text-align: center;
        font-size: 4em;
       
    }

    .col-ch-titel{
        position: absolute;
        padding: 10px;
        width: 550px;
        height: auto;
        top: 368px;
        /* background-color: rgb(251, 83, 83); */
        text-align: left;
    }

    .col-ch-titel span{
        font-size: 2em;
    }

   
</style>
