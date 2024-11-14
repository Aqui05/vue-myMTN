<template>
    <div data-v-012ad630="" class="row mt-3 v-step-4">
  
      <div class="col-md-3 service-card">
        <div>
          <h3 class="text-truncate">Infos carte SIM</h3>
          <p class="text-muted">
            Informations perso liées à la SIM
          </p>
          <div class="service-card-bottom">
            <button class="btn btn-secondary ripple">
              <span class="float-left">Afficher</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m561-208-88-88 121-121H126v-126h468L473-664l88-88 273 272-273 272Z"/></svg>
            </button>
          </div>
        </div>
      </div>
  
      <div class="col-md-3 service-card">
        <div>
          <h3 class="text-truncate">PUK</h3>
          <p class="text-muted">Récupérer mon code PUK</p>
          <div class="service-card-bottom">
            <button class="btn btn-secondary ripple">
              <span class="float-left">Afficher</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m561-208-88-88 121-121H126v-126h468L473-664l88-88 273 272-273 272Z"/></svg>
            </button>
          </div>
        </div>
      </div>
  
      <div class="col-md-3 service-card">
        <div>
          <h3 class="text-truncate">Activer internet</h3>
          <p class="text-muted">
            Recevoir les paramètres internet
          </p>
          <div class="service-card-bottom">
            <button class="btn btn-secondary ripple">
              <span class="float-left">Afficher</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m561-208-88-88 121-121H126v-126h468L473-664l88-88 273 272-273 272Z"/></svg>
            </button>
          </div>
        </div>
      </div>
  
      <div class="col-md-3 service-card">
        <div>
          <h3 class="text-truncate">Désactiver internet</h3>
          <p class="text-muted">
            Désactiver internet sur ma SIM
          </p>
          <div class="service-card-bottom">
            <button class="btn btn-secondary ripple">
              <span class="float-left">Afficher</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m561-208-88-88 121-121H126v-126h468L473-664l88-88 273 272-273 272Z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-3 service-card">
        <div>
          <h3 class="text-truncate">PUK</h3>
          <p class="text-muted">Récupérer mon code PUK</p>
          <div class="service-card-bottom">
            <button class="btn btn-secondary ripple">
              <span class="float-left">Afficher</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m561-208-88-88 121-121H126v-126h468L473-664l88-88 273 272-273 272Z"/></svg>
            </button>
          </div>
        </div>
      </div>
  
      <div class="col-md-3 service-card">
        <div>
          <h3 class="text-truncate">Activer internet</h3>
          <p class="text-muted">
            Recevoir les paramètres internet
          </p>
          <div class="service-card-bottom">
            <button class="btn btn-secondary ripple">
              <span class="float-left">Afficher</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m561-208-88-88 121-121H126v-126h468L473-664l88-88 273 272-273 272Z"/></svg>
            </button>
          </div>
        </div>
      </div>
  
      <div class="col-md-3 service-card">
        <div>
          <h3 class="text-truncate">Désactiver internet</h3>
          <p class="text-muted">
            Désactiver internet sur ma SIM
          </p>
          <div class="service-card-bottom">
            <button class="btn btn-secondary ripple">
              <span class="float-left">Afficher</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m561-208-88-88 121-121H126v-126h468L473-664l88-88 273 272-273 272Z"/></svg>
            </button>
          </div>
        </div>
      </div>
  
      <!--
      <div class="col-md-12 see-more">
        <a
         
         
          href="/me/#/carte-sim/"
          class="show-more-btn float-right"
          target="_self"
        >
          <span>Voir plus</span>
          <svg class="mdi mdi-arrow-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m556-258-38-39 158-158H180v-54h496L518-667l38-39 224 224-224 224Z"/></svg>
            
        </a>
      </div> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'SimLeft',
  };
  </script>
  

  <style scoped>
    .mt-3, .my-3 {
    margin-top: 1rem !important;
}

.row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

@media (min-width: 768px) {
    .col-md-12 {
        -ms-flex: 0 0 100%;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }
}

.section-header h3 {
    font-size: 18px;
    margin: 0;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.section-header p {
    font-size: 16px;
}

.text-muted {
    color: #6c757d !important;
}
.font-weight-light {
    font-weight: 300 !important;
}

.service-card {
    margin-bottom: 30px;
}

@media (min-width: 768px) {
    .col-md-3 {
        -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
        flex: 0 0 25%;
        padding-left: 15px;
        padding-right: 15px;
    }
}

.float-right {
    float: right !important;
}

@font-face {
  font-family: "MTNBrighterSans-Medium";
  src:
    url('@/fonts/MTNBrighterSans-Medium.otf') format("opentype");
  font-weight: normal;
  font-style: normal;
}

.btn {
    border-radius: 30px !important;
    font-size: 14px;
    font-family: MTNBrighterSans-Medium, Century Gothic, Arial, sans-serif;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px;
}
.service-card>* {
    background: #fff;
    padding: 15px;
    border-radius: 15px;
    overflow: hidden;
    display: block;
    position: relative;
    color: #000;
}

.service-card h3 {
    font-size: 16px;
}

.service-card h3 {
    color: #000;
}
.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


.service-card p {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
}

.service-card .service-card-bottom {
    margin-left: -15px;
    margin-right: -15px;
    margin-bottom: -15px;
}

.service-card .service-card-bottom .btn {
    vertical-align: middle;
    width: 100%;
    border-radius: 0 !important;
    font-weight: 400;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 5% 3%;
}

.ripple {
    position: relative;
    overflow: hidden;
}
.btn-secondary {
    background-color: #106887;
}
.btn-outline-secondary:hover, .btn-secondary {
    color: #fff;
    border-color: #106887;
}

.btn, .btn>span {
    vertical-align: middle;
}

.btn, .btn>span {
    vertical-align: middle;
}

.float-left {
    float: left !important;
}

.service-card-bottom svg {
    fill: white;
}
.btn, .btn>span {
    vertical-align: middle;
}

.service-card .service-card-bottom .btn i {
    font-size: 16px;
}

.see-more {
    margin-top: -30px !important;
    display: flex;
    /* flex-direction: row; */
    justify-content: flex-end;
    align-items: center;
    padding-top: 13px;
}


.see-more a {
  text-decoration: none;
  color: #106887;
}

.show-more-btn>* {
    display: inline-block;
    vertical-align: middle;
}

.see-more svg{
  fill: #106887;
}

</style>