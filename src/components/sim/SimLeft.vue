

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
        <i class="mdi mdi-arrow-right float-right"></i>
      </button>
    </div>
  </div>
</div>
  
      <div class="col-md-3 service-card">
        <div>
          <h3 class="text-truncate">PUK</h3>
          <p class="text-muted">Récupérer mon code PUK</p>
          <div class="service-card-bottom">
            <button class="btn btn-secondary ripple" @click="openPukModal">
              <span class="float-left">Afficher</span>
              <i class="mdi mdi-arrow-right float-right"></i>
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
            <button class="btn btn-secondary ripple" @click="openAInternet">
              <span class="float-left">Afficher</span>
              <i class="mdi mdi-arrow-right float-right"></i>
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
            <button class="btn btn-secondary ripple" @click="openDInternet">
              <span class="float-left">Afficher</span>
              <i class="mdi mdi-arrow-right float-right"></i>
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
              <i class="mdi mdi-arrow-right float-right"></i>
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
              <i class="mdi mdi-arrow-right float-right"></i>
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
              <i class="mdi mdi-arrow-right float-right"></i>
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



    
    <div  v-if="isModalOpen">
      <div  tabindex="-1" class="b-sidebar-outer my-sidebar-popup">
        <div tabindex="0"></div>
        <div 
          id="sim_details_sidebar" 
          tabindex="-1" 
          role="dialog" 
          aria-modal="true" 
          class="b-sidebar shadow bg-light text-dark" 
          style="" 
          aria-labelledby="sim_details_sidebar___title__"
        >
          <header class="b-sidebar-header">
            <strong id="sim_details_sidebar___title__">Infos 61255118</strong>
            <button type="button" aria-label="Close" class="close text-dark" @click="closeSimModal">
              <svg 
                viewBox="0 0 16 16" 
                width="1em" 
                height="1em" 
                focusable="false" 
                role="img" 
                aria-label="x" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                class="bi-x b-icon bi"
              >
                <g>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                </g>
              </svg>
            </button>
          </header>
          
          <div class="b-sidebar-body">
            <div >
              <table  class="table table-striped">
                <tbody >
                  <tr >
                    <td  class="font-weight-bold">Numéro</td>
                    <td >61255118</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Date d'enregistrement</td>
                    <td >01-10-2024 à 16:19</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Nom</td>
                    <td >AQUILAS OLUWATOBI ELISEE</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Prénom</td>
                    <td >KIKISSAGBE</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Occupation</td>
                    <td >4</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Commune</td>
                    <td >-</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Ville</td>
                    <td >cotonou</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Quartier</td>
                    <td >-</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Naissance</td>
                    <td >20-02-2005</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Lieu Naissance</td>
                    <td >kouti-karo</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Pièce</td>
                    <td >Autre</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">N° Pièce</td>
                    <td >20276401733524</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Lieu de délivrance</td>
                    <td >ANIP</td>
                  </tr>
                  <tr >
                    <td  class="font-weight-bold">Maison</td>
                    <td >KIKISSAGBE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!----></div>
        <div tabindex="0"></div>
        <div class="b-sidebar-backdrop bg-dark" style="" @click.self="closeSimModal"></div>
      </div>
    </div>





 <!-- Modal PUK   -->
 <div
    
    id="sim_card_pin_puk_modal___BV_modal_outer_"
    style="position: absolute; z-index: 1040;"
    v-if="isModalPUKOpen"
  >
    <div
      id="sim_card_pin_puk_modal"
      role="dialog"
      aria-labelledby="sim_card_pin_puk_modal___BV_modal_title_"
      aria-describedby="sim_card_pin_puk_modal___BV_modal_body_"
      class="modal fade show"
      aria-modal="true"
      style="display: block;"
    >
      <div class="modal-dialog modal-md modal-dialog-centered">
        <span tabindex="0"></span>
        <div
          id="sim_card_pin_puk_modal___BV_modal_content_"
          tabindex="-1"
          class="modal-content"
        >
          <header
            id="sim_card_pin_puk_modal___BV_modal_header_"
            class="modal-header"
          >
            <h5
              id="sim_card_pin_puk_modal___BV_modal_title_"
              class="modal-title"
            >
              Récupérer mon code PUK
            </h5>
            <button type="button" aria-label="Close" class="close" @click="closePukModal">×</button>
          </header>
          <div
            id="sim_card_pin_puk_modal___BV_modal_body_"
            class="modal-body"
          >
            <div  class="text-center">
              <div  class="modal-header-wrap">
                <i
                  
                  class="kgk-mtn-phonelink_lock modal-header-icon yellow-muted"
                ></i>
                <h3 >Code PUK</h3>
                <p  class="text-muted">
                  Veuillez cliquer sur le bouton ci dessous pour afficher votre
                  code PUK.
                </p>
              </div>
              <!---->
              <!---->
              <div  class="mt-2 mb-2">
                <button
                  
                  type="button"
                  class="btn btn-primary"
                >
                  Afficher
                </button>
              </div>
            </div>
            <div ></div>
          </div>
          <!---->
        </div>
        <span tabindex="0"></span>
      </div>
    </div>
    <div
      id="sim_card_pin_puk_modal___BV_modal_backdrop_"
      class="modal-backdrop"
      @click="closePukModal"
    ></div>
  </div>








  <!-- Modal Activer INTERNET -->


  <div 
  v-if="isModalAInternet"
  footer="{null}" 
  id="sim_card_gprs_activate___BV_modal_outer_" 
  style="position: absolute; z-index: 1040;"
>
  <div 
    id="sim_card_gprs_activate" 
    role="dialog" 
    aria-labelledby="sim_card_gprs_activate___BV_modal_title_" 
    aria-describedby="sim_card_gprs_activate___BV_modal_body_" 
    class="modal fade show" 
    aria-modal="true" 
    style="display: block;"
  >
    <div class="modal-dialog modal-md modal-dialog-centered">
      <span tabindex="0"></span>
      
      <div 
        id="sim_card_gprs_activate___BV_modal_content_" 
        tabindex="-1" 
        class="modal-content"
      >
        <header 
          id="sim_card_gprs_activate___BV_modal_header_" 
          class="modal-header"
        >
          <h5 
            id="sim_card_gprs_activate___BV_modal_title_" 
            class="modal-title"
          >
            Activer Internet
          </h5>
          <button 
            @click="closeAInternet"
            type="button" 
            aria-label="Close" 
            class="close"
          >
            ×
          </button>
        </header>
        
        <div 
          id="sim_card_gprs_activate___BV_modal_body_" 
          class="modal-body"
        >
          <div >
            <div >
              <div class="modal-header-wrap text-center">
                <i class="kgk-mtn-BW_Icons_MTNMoMo_GlobalConnect_4 modal-header-icon yellow-muted"></i>
                <h3 >Activation Internet</h3>
                <p class="text-muted">
                  <span >Vous n'arrivez pas à avoir accès à internet ?</span>
                  <br >
                  Cliquez sur le bouton recevoir les paramètres de configuration internet de MTN directement sur votre SIM.
                </p>
              </div>
              
              <div class="mt-3 mb-3 text-center">
                <button class="btn btn-primary">
                  <!----><span >Envoyer</span>
                </button>
              </div>
            </div>
            <!----></div>
          <div ></div>
        </div>
        <!----></div>
      <span tabindex="0"></span>
    </div>
  </div>
  
  <div 
    id="sim_card_gprs_activate___BV_modal_backdrop_" 
    class="modal-backdrop"
     @click="closeAInternet"
  ></div>
</div>



 <!-- Modal désactiver INTERNET -->
<div 
v-if="isModalDInternet"
  footer="{null}" 
  id="sim_card_gprs_deactivate___BV_modal_outer_" 
  style="position: absolute; z-index: 1040;"
>
  <div 
    id="sim_card_gprs_deactivate" 
    role="dialog" 
    aria-labelledby="sim_card_gprs_deactivate___BV_modal_title_" 
    aria-describedby="sim_card_gprs_deactivate___BV_modal_body_" 
    class="modal fade show" 
    aria-modal="true" 
    style="display: block;"
  >
    <div class="modal-dialog modal-md modal-dialog-centered">
      <span tabindex="0"></span>
      
      <div 
        id="sim_card_gprs_deactivate___BV_modal_content_" 
        tabindex="-1" 
        class="modal-content"
      >
        <header 
          id="sim_card_gprs_deactivate___BV_modal_header_" 
          class="modal-header"
        >
          <h5 
            id="sim_card_gprs_deactivate___BV_modal_title_" 
            class="modal-title"
          >
            Désactiver Internet
          </h5>
          <button 
            @click="closeDInternet"
            type="button" 
            aria-label="Close" 
            class="close"
          >
            ×
          </button>
        </header>
        
        <div 
          id="sim_card_gprs_deactivate___BV_modal_body_" 
          class="modal-body"
        >
          <div>
            <div>
              <div class="modal-header-wrap text-center">
                <i class="kgk-mtn-BW_Icons_MTNMoMo_GlobalConnect_4 modal-header-icon yellow-muted"></i>
                <h3>Désactiver Internet</h3>
                <p class="text-muted">
                  Si vous souhaitez désactiver internter sur votre SIM, veuillez cliquez sur le bouton ci dessous.
                </p>
              </div>
              
              <div class="mt-3 mb-3 text-center">
                <button class="btn btn-primary">
                  <!----><span>Envoyer</span>
                </button>
              </div>
            </div>
            <!----></div>
          <div></div>
        </div>
        <!----></div>
      <span tabindex="0"></span>
    </div>
  </div>
  
  <div 
    id="sim_card_gprs_deactivate___BV_modal_backdrop_" 
    class="modal-backdrop"
    @click="closeDInternet"
  ></div>
</div>
  </template>

<script>
import { ref } from 'vue';

export default {

  setup() {
    const isModalOpen = ref(false);
    const isModalPUKOpen = ref(false);
    const isModalAInternet = ref(false);
    const isModalDInternet = ref(false);

    const openSimModal = () => {
      isModalOpen.value = true;
    };

    const closeSimModal = () => {
      isModalOpen.value = false;
    };

    const openPukModal = () => {
      isModalPUKOpen.value = true;
    };
    
    const closePukModal = () => {
      isModalPUKOpen.value = false;
    };

    const openAInternet = () => {
      isModalAInternet.value = true;
    };

    const closeAInternet = () => {
      isModalAInternet.value = false;
    };

    const openDInternet = () => {
      isModalDInternet.value = true;
    };

    const closeDInternet = () => {
      isModalDInternet.value = false;
    };


    return { isModalOpen, openSimModal, closeSimModal, isModalPUKOpen, openPukModal, closePukModal, isModalAInternet, openAInternet, closeAInternet, isModalDInternet, openDInternet, closeDInternet  };
  }
};
</script>
  
  
  

  <style scoped>

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin: 0 0 .5rem 0;
    font-weight: 500;
    line-height: 1.2;
}


.service-card .service-card-bottom .btn i {
    font-size: 16px;
}


.ripple:after {
    content: "";
    background: hsla(0, 0%, 100%, .3);
    display: block;
    position: absolute;
    border-radius: 50%;
    padding-top: 240%;
    padding-left: 240%;
    margin-top: -120%;
    margin-left: -120%;
    opacity: 0;
    -webkit-transition: all 1s;
    transition: all 1s;
}
/*
    .mt-3, .my-3 {
    margin-top: 1rem !important;
}
*/

span {
  font-family: MTNBrighterSans, Century Gothic, Arial, sans-serif;
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

@media (max-width: 600px) {
  .row {
    margin: 0px;
  }
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
    -webkit-line-clamp: 1;
    line-clamp: 1;
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


/* .modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(51 51 51 / 50%);
  z-index: 1050;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content1 {
  position: fixed;
  left: 0px;
  width: 40%; 
  height: auto; 
  overflow-y: scroll; 
  height: 100%;
} */

.b-sidebar-outer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    overflow: visible;
    z-index: 1035;
}

.b-sidebar:not(.b-sidebar-right) {
    left: 0;
    right: auto;
}
.b-sidebar {
    width: 40%;
}
.b-sidebar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 320px;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    outline: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.b-sidebar, .b-sidebar-backdrop {
    position: fixed;
    top: 0;
    height: 100vh;
}
.text-dark {
    color: #343a40 !important;
}
.shadow {
    -webkit-box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}
.bg-light {
    background-color: #f8f9fa !important;
}

.b-sidebar>.b-sidebar-header {
    font-size: 1rem;
    padding: .5rem 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.b-sidebar:not(.b-sidebar-right) {
    left: 0;
    right: auto;
    width: 40%;
}
.b-sidebar {
    width: 40%;
}
.b-sidebar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 320px;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    outline: 0;
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
.b-sidebar, .b-sidebar-backdrop {
    position: fixed;
    top: 0;
    height: 100vh;
}


.b-sidebar-header {
    background: #ffcc01;
    padding: 15px 20px !important;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

.b-sidebar, .b-sidebar-backdrop {
    position: fixed;
    top: 0;
    height: 100vh;
}

.b-sidebar-backdrop {
    left: 0;
    z-index: -1;
    width: 100vw;
    opacity: .6;
}
.bg-dark {
    background-color: #343a40 !important;
}

.b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close {
    right: -60px;
}
.b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close {
    margin-left: auto;
}
.b-sidebar>.b-sidebar-header .close {
    float: none;
    font-size: 1.5rem;
}
.b-sidebar-header .close {
    position: absolute;
    right: -50px;
    background: 40px;
    width: 30px;
    background: #fff;
    opacity: 1;
    margin: 0;
    display: block;
    border-radius: 50%;
    height: 30px;
    line-height: 34px;
    color: #bfbfbf !important;
}

.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}

.b-icon.bi {
    display: inline-block;
    overflow: visible;
    vertical-align: -.15em;
}

svg {
    overflow: hidden;
}

.b-sidebar>.b-sidebar-body {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
}

.table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
}

table {
    border-collapse: collapse;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .05);
}

#sim_details_sidebar .table td, #sim_details_sidebar .table th {
    padding: 10px 20px;
    border-top: none !important;
}

.table td, .table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}
.font-weight-bold {
    font-weight: 700 !important;
}

#sim_details_sidebar .table td, #sim_details_sidebar .table th {
    padding: 10px 20px;
    border-top: none !important;
}

.table td, .table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
}

.text-dark {
    color: #343a40 !important;
}



























/* MODAL PUK STYLES */


.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}
/* Base Modal Styles */
/* .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    overflow: hidden;
    z-index: 1050;
    opacity: 0;
    transition: opacity 0.3s ease;
}
 */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
}


.modal.show {
    display: block;
    opacity: 1;
}


 .modal-backdrop {
    opacity: .5;
}
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    transition: opacity 0.3s ease;
}

.modal.show .modal-backdrop {
    opacity: 0.5;
}

/* Modal Dialog Animations */
@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes modalSlideOut {
    from {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    to {
        opacity: 0;
        transform: translateY(-50px) scale(0.9);
    }
}

.modal.fade .modal-dialog {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
}

.modal.show .modal-dialog {
    animation: modalSlideIn 0.3s ease-out forwards;
}

.modal.fade.closing .modal-dialog {
    animation: modalSlideOut 0.3s ease-out forwards;
}

/* Optional: Add backdrop fade animation */
@keyframes backdropFadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 0.5;
    }
}

@keyframes backdropFadeOut {
    from {
        opacity: 0.5;
    }
    to {
        opacity: 0;
    }
}

.modal.show .modal-backdrop {
    animation: backdropFadeIn 0.3s ease-out forwards;
}

.modal.fade.closing .modal-backdrop {
    animation: backdropFadeOut 0.3s ease-out forwards;
}





@media (min-width: 576px) {
    .modal-dialog-centered {
        min-height: calc(100% - 3.5rem);
    }
}
@media (min-width: 576px) {
    .modal-dialog {
        max-width: 500px;
        margin: 1.75rem auto;
    }
}
.modal-dialog-centered {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex
;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    min-height: calc(100% - 1rem);
}
.modal-dialog {
    position: relative;
    width: auto;
    pointer-events: none;
}

@media (min-width: 576px) {
    .modal-dialog-centered:before {
        height: calc(100vh - 3.5rem);
        height: -webkit-min-content;
        height: -moz-min-content;
        height: min-content;
    }
}
.modal-dialog-centered:before {
    display: block;
    height: calc(100vh - 1rem);
    height: -webkit-min-content;
    height: -moz-min-content;
    height: min-content;
    content: "";
}

.modal-content {
    border: none;
}
.modal-content {
    position: relative;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex
;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3rem;
    outline: 0;
}


.modal-header {
    background: #ffcc01;
    border: none;
}

.modal-header {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex
;
    -ms-flex-align: start;
    -webkit-box-align: start;
    align-items: flex-start;
    -ms-flex-pack: justify;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(.3rem - 1px);
    border-top-right-radius: calc(.3rem - 1px);
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

.modal-body {
    position: relative;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    padding: 1rem;
}


.modal-title {
    margin-bottom: 0;
    line-height: 1.5;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.modal-header .close {
    position: absolute;
    right: -30px;
    background: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 0;
    opacity: 1;
    top: 28px;
    font-size: 16px;
}
.modal-header .close {
    margin: -1rem -1rem -1rem auto;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
}
.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}


.text-center {
    text-align: center !important;
}

.modal-header-wrap {
    padding: 30px 30px 0 30px;
}

.modal-header-wrap .modal-header-icon {
    font-size: 42px;
}

.yellow-muted {
    color: #d1a000;
}

.modal-header-wrap p {
    font-size: 14px;
}

.text-muted {
    color: #6c757d !important;
}

.mb-2, .my-2 {
    margin-bottom: .5rem !important;
}

.mt-2, .my-2 {
    margin-top: .5rem !important;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.btn-primary {
    color: #000;
    border: none;
    background-color: #fc0;
}
.btn, .btn>span {
    vertical-align: middle;
}
.btn {
    border-radius: 30px !important;
    font-size: 14px;
    font-family: MTNBrighterSans-Medium, Century Gothic, Arial, sans-serif;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px;
}




@media(max-width:600px) {
  .modal-content1 {
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


@media screen and (max-width: 600px) {
    #sim_details_sidebar {
        -webkit-animation: animatebottom .3s !important;
        animation: animatebottom .3s !important;
    }
}

@keyframes animatebottom {
  0% {
    bottom: -300px;
    opacity: 0;
}
100% {
    bottom: 0;
    opacity: 1;
}
}

@media screen and (max-width: 600px) {
    .my-sidebar-popup .b-sidebar {
        width: 100%;
        height: 80%;
        bottom: 0;
        top: auto;
    }
}

@media screen and (max-width: 600px) {
    .b-sidebar-right .close, .my-sidebar-popup .b-sidebar:not(.b-sidebar-right)>.b-sidebar-header .close {
        right: 15px !important;
        top: -45px !important;
    }
}

</style>