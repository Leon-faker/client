<template>
    <div id="article">
        <div class="col-ac-date">
            <strong><span style="color: rgb(251, 83, 83)">{{ $route.params.id }}</span>年<span style="color: rgb(251, 83, 83)">5</span>月<span style="color: rgb(251, 83, 83)">29</span></strong>
        </div>
        <div class="col-ac-titel">
            <strong>{{ articleDetail.articleName }}</strong>
        </div>
        <div class="col-ac-image">
            <img src="../../static/home-1.jpg"/>
        </div>
        <div class="col-ac-content">
            <no-ssr>
                <mavon-editor  defaultOpen="preview" :boxShadow="false"   :subfield="false" :editable="false" :toolbarsFlag="false" v-model="articleContent" />
            </no-ssr>
        </div>
        <!-- 文章留言 -->
        <div class="col-article-comments">
            <Divider />
            <div class="col-cm-titel">
                 <h2>2 Comments</h2>
            </div>
            <Divider />
            <div class="col-cm-content">
                <div class="col-cm-ch-img">
                    <img src="../../static/home-1.jpg"/>
                </div>
                <div class="col-cm-ch-detail">  
                    <h3>热心网友</h3>
                    <h4>2019-01-24</h4>
                    <span>测试留言dsadassssssssssssssssssssssssssssssssssssssssssssdsasasasasasasasasasasasasasasads</span>
                </div>
            </div>
            <Divider />
        </div>
        <!-- 发表评论 -->
        <div class="col-push-comment">
            <div>
                <h2>Leave a comment</h2>
            </div>
            <div class="col-user-detail">
                <Input placeholder="Your Name" style="width: 300px" />
                <Input placeholder="Your Email" style="width: 300px" />
                <Input placeholder="Enter something..." style="width: 300px" />
            </div>
            <div class="col-push-content">
               <Input  size="large" type="textarea" placeholder="Input your comment" />
            </div>
            <div class="col-push-submit">
                 <Button @click="submitComment()" type="success" style="width:300px;height:40px">PUSH COMMENT</Button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            articleDetail: '',
            articleContent: '',
        }
    },
    asyncData({app,route}) {
        return app.$axios.post('http://localhost:9000/client/obtainArticleDetail',{
            articleId: route.params.id
        }).then((res) => {
            console.log(res)
            return {
                articleContent: res.data.data[0].articleContent,
                articleDetail: res.data.data[0]
            }
        })
    },
    methods: {
        submitComment() {
            console.log(this.articleCotent);
        }
    }
}
</script>
<style>

    #article{
        width: 750px;
        margin: 0px auto;
    }

    .col-ac-date strong{
        font-size: 2.5em;
    }

    .col-ac-titel strong{
        font-size: 2.5em;
        font-family: "微软雅黑";
        color: rgb(53,53,53);
    }

    .col-ac-image{
        width: inherit;
        height: 500px;
    }

    .col-ac-image img{
        width: 750px;
        height: 500px;
    }

    .col-ac-date{
        height: 60px;
    }
    

    .col-ac-date,.col-ac-image,.col-ac-titel{
        width: inherit;
        text-align: center;
        margin-top: 30px;
    }


    /* 文章类型区域 */
    .col-ac-content{
        position: relative;
        top: 20px;
    }

    /* 评论区样式 */
    .col-article-comments{
        position:relative;
        top: 20px;
    }
    .col-article-comments div{
        text-align: left;
    }

    .col-cm-content div{
        display: inline-block;
        vertical-align: top;
    }

    .col-cm-content .col-cm-ch-img{
        position:relative;
        top: 18px;
        width: 70px;
        height: 70px;
    }

    .col-cm-ch-detail{
        position: relative;
        width: 400px;
        word-wrap:break-word;
        top: 15px;
        left: 10px;
    }

    .col-cm-ch-detail h3{
        font-size: 2em;
    }

    .col-cm-ch-detail h4{
        font-size: 1.2em
    }
    
    .col-cm-content .col-cm-ch-img img{
        width: 70px;
        height: 70px;
    }

    /*  发表评论区域 */
    
    .col-push-comment{
        overflow: hidden;
        height: 100%;
    }

    .col-push-comment div{
        position: relative;
        margin-top: 10px;
    }

    .col-push-content{
        width: 910px;
    }
    .col-push-submit{
        position: relative;
        width: 300px;
    }

</style>

