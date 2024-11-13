<template>
    <div class="main-content">
      <div class="container-section">
          <div class="main-container col-md-9">
              <section class="consommation-section">
                  <Consommation />
              </section>
              <section class="soubscription-section">
                  <Soubscription />
              </section>

              <section class="sim-section">
                  <Sim />
              </section>
          </div>
          <div class="left-container">
            <section class="infos-section">
                  <Infos />
              </section>
          </div>
      </div>
    </div>
  </template>
  
  <script>
import Consommation from '../main/Consommation.vue';
import Infos from '../main/Infos.vue';
import Sim from '../main/Sim.vue';
import Soubscription from '../main/Soubscription.vue';

  export default {
    name: 'MainContent',
    components: {
      Consommation,
      Soubscription,
      Sim,
      Infos
    },
  }

  </script>
  
  <style scoped>
  .main-content {
    flex-grow: 1;
  }

  .container-section, .consommation-section, .soubscription-section {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

@media (min-width: 768px) {
    .col-md-9 {
        -ms-flex: 0 0 75%;
        -webkit-box-flex: 0;
        flex: 0 0 75%;
        width: 75%;
    }
}

@media (min-width: 768px) {
    .col-md-3 {
        -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
        flex: 0 0 25%;
    }
}

.main-container, .left-container {
  height: 100%;
  overflow: hidden;
}

.main-container {
  padding-right: 15px;
  padding-left: 15px;
}

.left-container {
  width: 22%;
}
  
  
  </style>