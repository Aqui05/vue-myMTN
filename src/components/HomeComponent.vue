<!--Home component-->
<template>
  <div class="container">
    <section class="left-bar" :style="{ display: isLeftNavVisible ? 'block' : 'none' }">
      <LeftNav />
    </section>
    <section class="left-bar bureau">
      <LeftNav />
    </section>
    <div class="main-container" :class="{ 'dimmed': isLeftNavVisible }"> 
      <section class="top-bar"> 
        <TopNav /> 
      </section> 
      <section class="top-bar-mobile"> 
        <TopNavMobile /> 
      </section> <!-- Render content based on current route --> 
      <section class="main-container-content"> 
        <router-view /> 
      </section> 
    </div>
  </div>
</template>


<script>
import LeftNav from './nav/LeftNav.vue';
import TopNav from './nav/TopNav.vue';
import TopNavMobile from './nav/TopNavMobile.vue';

export default {
  name: 'home',
  components: {
    LeftNav,
    TopNav,
    TopNavMobile
  },
  data() {
    return {
      isLeftNavVisible: false
    };
  },
  methods: {
    toggleLeftNav() {
      this.isLeftNavVisible = !this.isLeftNavVisible;
    }
  }
}
</script>


  <style>
  .main-container.dimmed { opacity: 0.5;}
  .container {
    height: 100vh;
  }

  .left-bar {
    background: #fc0;
    left: 0;
    top: 0;
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 20;
    -webkit-transition: -webkit-transform .3s ease-in-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
    overflow: hidden;
  }


  .main-container {
    height: 100%;
    padding-top: 4%;
    overflow-y: scroll;
    overflow-x: hidden !important;
  }

  .top-bar {
    left: 250px;
    top: 0;
    width: calc(100% - 250px);
    position: fixed;
    /* padding: 1% 2%; */
    background: #fff;
    height: 70px;
    border-bottom: 1px solid #e5e5e5;
    z-index: 15;
    margin: auto;
    justify-content: space-between;
    display: flex;
    /* align-content: center; */
    /* flex-wrap: wrap; */
    align-items: center;
    padding: 0px 2%;
  }

  .top-bar-mobile {
  display: none;
  width: 100%;
  top: 0;
}

  .main-container-content {
    padding: 40px 60px;
    left: 250px;
    /* top: 0; */
    width: calc(100% - 250px);
    position: absolute;
    overflow: hidden;
  }

  @media (max-width: 600px) {
    .top-bar {
      display: none;
  }
  .main-container {
    padding-top: 0px;
  }
  

  .main-container-content {
    left: 0px;
    /* top: 0; */
    width: 100%;
    position: absolute;
    overflow: hidden;
  }

  .top-bar-mobile {
    top: 0;
    width:100%;
    z-index: 15;
    margin: auto;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }
}   


@media screen and (max-width: 600px) {
  .main-container-content {
        padding: 0 15px;
    }
}

@media screen and (max-width: 600px) {
  .main-container-content {
        margin-top: 60px;
    }
}

@media screen and (max-width: 600px) {
  .bureau {
        display: none;
    }
}



  </style>