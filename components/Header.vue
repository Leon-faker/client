<template>
    <div class="blog-header">
        <div class="col-sx-4" @click="home()">
           <div>
                <p>
                <strong>Home</strong>
                </p>
                <p>
                    <Icon size="65" type="ios-planet" />
                </p>
           </div>
        </div>
        <div class="col-sx-4"  @click="article()">
            <div>
                <p>
                <strong>Article</strong>
                </p>
                <p>
                    <Icon size="65" type="md-paper" />
                </p>
            </div>
        </div>
        <div class="col-sx-4">
            <div>
                <p>
                    <strong>Message</strong>
                </p>
                <p>
                    <Icon size="65" type="ios-list-box" />
                </p>
            </div>
        </div>
        <div class="col-sx-4">
           <div>
                <p>
                    <strong>About</strong>
                </p>
                <p>
                    <Icon size="65" type="ios-person-add" />
                </p>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        article() {
            this.$router.push({path: '/articlelist'})
        },
        home() {
            this.$router.push({path: '/'})
        },
    }
}
</script>

<style>
    .blog-header{
        position: relative;
        overflow: hidden;
        display: -webkit-box;
        width: 100%;
        height: 110px;
        top: -30px;
      
    }

    .blog-header div{
        position: relative;
        cursor: pointer;
        background-color: #ffffff;
        margin-left: 16%;
        width: 90px;
        height: 110px;
        
    }

    .blog-header .col-sx-4:hover{
        border-bottom: 1px dashed gray;
    }


    .blog-header div div{
        position: absolute; 
        margin-left: 7px;
        margin-top: 7px;
        width: 70px;
        height: 90px;
        
    }

    .blog-header div strong,p{
        position: relative;
        text-align: center;
    }


    .blog-header div strong{
        color: rgb(251, 82, 82);
        font-size: 1.3em;
    }

    @media screen and (max-width: 1140px) {
    .blog-header div{
            margin-left: 12%;
        }
    }
</style>

