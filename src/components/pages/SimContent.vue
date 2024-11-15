<template>
    <div class="sim-content row">
        <div class="col-md-12 page-title">
            <h1>Gérer ma carte SIM</h1>
            <p class="text-muted">
                Opérations et paramétrages pour carte SIM
            </p>
        </div>
        <div class="container-section row">
          <div class="left-container col-md-9">
                  <SimLeft />
          </div>
          <div class="right-container col-md-3">
                  <Infos />
          </div>
      </div>
    </div>
  </template>
  
  <script>
import SimLeft from '../sim/SimLeft.vue';
import Infos from '../main/Infos.vue';



  export default {
    name: 'business',
    components: {
        SimLeft,
        Infos
    },
  }

  </script>
  

  <style scoped>
    @media (min-width: 768px) {
    .col-md-9 {
        -ms-flex: 0 0 75%;
        -webkit-box-flex: 0;
        flex: 0 0 75%;
        max-width: 75%;
        padding-right: 15px;
        padding-left: 15px;
    }
}

@media (min-width: 768px) {
    .col-md-3 {
        -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
        flex: 0 0 25%;
        padding-right: 15px;
        padding-left: 15px;
        min-width: 10%;
    }
}

.row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

@media (max-width: 768px) {
    .sim-content {
        padding: 0 15px;
    }
}
</style>