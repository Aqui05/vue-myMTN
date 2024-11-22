

<template>
    <div class="row mt-3 v-step-4">
<!-- Ouvrir le modal de InfosSim fixé à gauche -->
<div class="col-md-3 service-card">
  <div>
    <h3 class="text-truncate">Infos carte SIM</h3>
    <p class="text-muted">Informations perso liées à la SIM</p>
    <div class="service-card-bottom">
      <button class="btn btn-secondary ripple" @click="openSimModal">
        <span class="float-left">Afficher</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path d="m561-208-88-88 121-121H126v-126h468L473-664l88-88 273 272-273 272Z" />
        </svg>
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



    
        <div v-if="isModalOpen" @click.self="closeSimModal">
    <div class="modal fade show" style="display: block;" aria-hidden="false">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <header class="b-sidebar-header d-flex justify-content-between align-items-center p-3" style="background: #ffcc01;
  padding: 15px 20px !important;">
        <strong>Infos 61255118</strong>
        <button type="button" class="close text-dark" aria-label="Close" @click="closeSimModal">
          <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
        </button>
      </header>
      <div class="modal-body">
        <table class="table table-striped">
              <tbody>
                <tr>
                  <td class="font-weight-bold">Numéro</td>
                  <td>61255118</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Date d'enregistrement</td>
                  <td>01-10-2024 à 16:19</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Nom</td>
                  <td>AQUILAS OLUWATOBI ELISEE</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Prénom</td>
                  <td>KIKISSAGBE</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Occupation</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Commune</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Ville</td>
                  <td>cotonou</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Quartier</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Naissance</td>
                  <td>20-02-2005</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Lieu Naissance</td>
                  <td>kouti-karo</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Pièce</td>
                  <td>Autre</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">N° Pièce</td>
                  <td>20276401733524</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Lieu de délivrance</td>
                  <td>ANIP</td>
                </tr>
                <tr>
                  <td class="font-weight-bold">Maison</td>
                  <td>KIKISSAGBE</td>
                </tr>
              </tbody>
            </table>
      </div>
    </div>
  </div>
</div>
</div>


  </template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isModalOpen = ref(false);

    const openSimModal = () => {
      isModalOpen.value = true;
    };

    const closeSimModal = () => {
      isModalOpen.value = false;
    };

    return { isModalOpen, openSimModal, closeSimModal };
  }
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
        max-width: 25%;
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

.modal-content {
  position: fixed;
  left: 0px;
  width: 40%; 
  height: auto; 
  overflow-y: scroll; 
  height: 100%;
}

@media(max-width:600px) {
  .modal-content {
    position: fixed;
    left: 0px;
    top: 42%;
    width: 100%;
    height: auto;
    overflow-y: scroll;
    /* height: 50%; */
    bottom: 0px;
}

}

</style>