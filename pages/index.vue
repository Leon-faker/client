<template>
    <div>
        <div id="carousel">
            <Carousel/>
        </div>
        <div id="header">
            <Header/>
        </div>
        <div id="content">
            <Divider orientation="left">Federik Technical documentation</Divider>
            <nuxt-child/>
        </div>
        <div id="footer">
            <Footer/>
        </div>
    </div>

</template>

<script>
import Carousel from '../components/Carousel'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  name: 'home',
  components: {
     Carousel,
     Header,
     Footer
  }
}
</script>
  
<style>
  

  *{
    margin: 0px;
    padding: 0px;
  }
  #login{
    width: 100%;
    height: 100%;  
  }

  #carousel img{
    width: 100%;
    height: 450px;
    object-fit: cover;
  }
  
  #content{
      width: 1140px;
      height: auto;
      overflow: hidden;
      margin: 0px auto;
  }

  @media screen and (max-width: 1140px) {
  
}

</style>

