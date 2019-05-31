<template>

  <div class="col-hm-content">
    <!-- <div class="col-hm-mbx">
      <Breadcrumb :style="{margin: '16px 5px'}">
        <BreadcrumbItem><Icon size="25" type="ios-planet" />Home</BreadcrumbItem>
      </Breadcrumb>
    </div> -->

    <div class="col-hm-image">
        <div class="col-hm-parent">
            <div class="col-cl-introduce">
              <span style="font-size:7em;font-family:'Impact';color:rgb(251,83,83)">Federik</span><p></p>
              <span style="font-size:2em;font-family:'Impact';color:rgb(64,64,64)">A Java Developer.</span><p></p>
              <span style="font-size:1.5em;color:rgb(38,38,38)">maker of things for the web app, always focused on elegant simplicity, relentlessly learning by making mistakes.</span>
            </div>
        </div>
        <div class="col-hm-parent" v-for="item in items" v-bind:key="item.message">
            <div class="col-cl-image">
              <img src="../../static/home-2.jpg"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    data () {
      return {
        username: '',
        password: '',
        theme1: 'light',
        items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
      }
    }
}
</script>

<style scoped>
.col-hm-content{
  width: 1140px;
  height: 100%;
  margin: 0px auto;
}

.col-hm-image{
  position: relative;
  overflow: hidden;
}

.col-hm-image .col-hm-parent{
  position: relative;
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 555PX;
  height: 355px;
  margin-left: 6PX;
  margin-top: 10px;
}

.col-hm-image .col-hm-parent:hover{
  opacity: 0.5;
}

.col-hm-image .col-hm-parent .col-cl-introduce{
  position: absolute;
  padding: 60px;
  width: 500px;
  height: 300px;
  text-align: left;
}

.col-hm-image .col-hm-parent img{
  width: 555PX;
  height: 355px;
}


@media screen and (max-width: 1140px) {
  /* .col-hm-image{
    width: 980px; 
  }
  
  .col-hm-image .col-hm-parent{
    
  }

  .col-hm-image .col-hm-parent img{
    width: 430px;
  } */
}
</style>
