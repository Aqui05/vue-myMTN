<!--Home component-->

<template>
    <div class="container">
        <section class="left-bar">
            <LeftNav />
        </section>

        <div class="main-container">
            <section class="top-bar">
                <TopNav />
            </section>

            <section class="main-container-content">
                <MainContent />
            </section>

        </div>
    </div>
  </template>
  
  <script>

    import LeftNav from './nav/LeftNav.vue';
    import TopNav from './nav/TopNav.vue';
    import MainContent from './nav/MainContent.vue';
  
  export default {
    name: 'home',
    components: {
        LeftNav,
        TopNav,
        MainContent
    },
  }
  </script>
  
  <style>
  
  .container {
    display: flex;
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
    padding-top: 70px;
    overflow-y: scroll;
    overflow-x: hidden !important;
  }

  .top-bar {
    left: 250px;
    top: 0;
    width: calc(100% - 250px);
    position: fixed;
    padding: 1% 3.5%;
    background: #fff;
    height: 70px;
    border-bottom: 1px solid #e5e5e5;
    z-index: 15;
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
    .left-bar {
      display: none;
    }
}    

  </style>