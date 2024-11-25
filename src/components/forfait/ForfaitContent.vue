<template>
    <div >
  <div  class="v-step-0">
    <div class="row">
      <div class="col-md-12">
        <div class="section-header">
          <h3>Forfaits</h3>
          <p class="text-muted font-weight-light">
            Sélectionner le forfait que tu souhaites activer
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div  class="col-md-3 service-card">
        <div>
          <div class="mobile-align">
            <h3  class="text-truncate">Wabaa</h3>
          <svg class="float-right svg-mobile" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
          
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple" @click="openModal">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div  class="col-md-3 service-card">
        <div>
          <div class="mobile-align">
            <h3  class="text-truncate">Internet</h3>
          <svg class="float-right svg-mobile" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
          
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple" @click="openModal">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div  class="col-md-3 service-card">
        <div>
          <div class="mobile-align">
            <h3  class="text-truncate">Yellow game</h3>
          <svg class="float-right svg-mobile" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
          
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple" @click="openModal">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div  class="col-md-3 service-card">
        <div>
          <div class="mobile-align">
            <h3  class="text-truncate">Maxi</h3>
          <svg class="float-right svg-mobile" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
          
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple" @click="openModal">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div  class="col-md-3 service-card">
        <div >
          <div class="mobile-align">
            <h3  class="text-truncate">Go Pack</h3>
          <svg class="float-right svg-mobile" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
          
          </div>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple" @click="openModal">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div v-if="isModalOpen" id="bundle_sidebar_yellow_game" class="modal-backdrop b-sidebar shadow b-sidebar-right bg-light text-dark" tabindex="-1" role="dialog" aria-modal="true"  aria-labelledby="bundle_sidebar_yellow_game___title__" @click.self="closePukModal">

<header class="b-sidebar-header">
  <button type="button" aria-label="Close" class="close text-dark">
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
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        ></path>
      </g>
    </svg>
  </button>
  <strong id="bundle_sidebar_yellow_game___title__">Yellow Game</strong>
</header>


<div class="b-sidebar-body">
  <div>
    <div class="bundle-sidebar-header">
      <div id="bundle_filter_list">
        <div class="row">
          <div class="col bundle-filter-item active">
            <div class="text-truncate">Jours</div>
          </div>
        </div>
      </div>
    </div>

    <div role="tablist" class="accordion">
      <!-- First Card -->

  <div class="card collapsed">
    <header role="tab" class="card-header p-1" @click="toggleCollapse">
      <div
        class="bundle-activation-card-header"
        role="button"
        tabindex="0"
        :aria-expanded="isCollapsed"
        :aria-controls="accordion0"
        style="overflow-anchor: none;"
      >
        <div class="font-weight-bold">50 FCFA</div>
        <p class="text-muted">Yellow_Game_3Days</p>
        <span class="icon" v-if="isCollapsed">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
        </span>
        <span class="icon" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
        </span>
      </div>
    </header>

    <div :id="accordion0" v-show="isCollapsed" role="tabpanel">
      <div class="card-body">
        <div>
          <form>
            <div class="bundle-activation-card-options">
              <label class="mr-1">
                <input
                  name="YELLOW_GAME_50"
                  value="activate"
                  type="radio"
                  checked="checked"
                />
                <div>Activer</div>
                <p class="text-muted">
                  Activer sur votre numéro
                </p>
              </label>
              <label>
                <input
                  name="YELLOW_GAME_50"
                  value="offer"
                  type="radio"
                />
                <div>Offrir</div>
                <p class="text-muted">
                  Activer sur un autre numéro
                </p>
              </label>
            </div>

            <div class="bundle-activation-card-payment-mode mt-2">
              <div class="form-group">
                <label class="font-weight-bold">
                  Sélectionnez un mode de paiement
                </label>
                <label class="mr-3">
                  <input
                    value="main"
                    name="mode_YELLOW_GAME_50"
                    type="radio"
                    checked="checked"
                    class="hidden-radio"
                  />
                  <span class="bundle-mode-icon mr-2">
                    <i class="mtn-icon mtn-icon-phone"></i>
                  </span>
                  <span class="bundle-mode-title">
                    Compte principal
                  </span>
                </label>
                <label>
                  <input
                    value="MO"
                    name="mode_YELLOW_GAME_50"
                    type="radio"
                    class="hidden-radio"
                  />
                  <span class="bundle-mode-icon mr-2">
                    <i class="mtn-icon mtn-icon-mtn-momo"></i>
                  </span>
                  <span class="bundle-mode-title">
                    Mobile Money
                  </span>
                </label>
              </div>
            </div>

            <button class="btn btn-primary float-right">
              <span>Activer</span>
            </button>
            <div class="clearfix"></div>
          </form>
        </div>
      </div>
    </div>
  </div>


      
      <div class="card collapsed">
        <header role="tab" class="card-header p-1" @click="toggleCollapse">
          <div
           
            class="bundle-activation-card-header not-collapsed"
            role="button"
            tabindex="1"
            aria-expanded="true"
            aria-controls="accordion1"
            style="overflow-anchor: none;"
          >
        <div class="font-weight-bold">100 FCFA</div>
            <p class="text-muted">Yellow_Game_3Days(100F/200MB/3D)</p>
            <span class="icon-not-collapsed">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
            </span>
            <span class="icon-collapsed">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </span>
          </div>
        </header>

          <div :id="accordion1" v-show="isCollapsed" role="tabpane2">
          <div class="card-body">
            <div >
              <form >
                <div  class="bundle-activation-card-options">
                  <label  class="mr-1">
                    <input
                      
                      name="YELLOW_GAME_50"
                      value="activate"
                      type="radio"
                      checked="checked"
                    />
                    <div >Activer</div>
                    <p  class="text-muted">
                      Activer sur votre numéro
                    </p>
                  </label>
                  <label >
                    <input
                      
                      name="YELLOW_GAME_50"
                      value="offer"
                      type="radio"
                    />
                    <div >Offrir</div>
                    <p  class="text-muted">
                      Activer sur un autre numéro
                    </p>
                  </label>
                </div>

                <div  class="bundle-activation-card-payment-mode mt-2">
                  <div  class="form-group">
                    <label  class="font-weight-bold">
                      Sélectionnez un mode de paiement
                    </label>
                    <label  class="mr-3">
                      <input
                        
                        value="main"
                        name="mode_YELLOW_GAME_50"
                        type="radio"
                        checked="checked"
                        class="hidden-radio"
                      />
                      <span  class="bundle-mode-icon mr-2">
                        <i  class="mtn-icon mtn-icon-phone"></i>
                      </span>
                      <span  class="bundle-mode-title">
                        Compte principal
                      </span>
                    </label>
                    <label >
                      <input
                        
                        value="MO"
                        name="mode_YELLOW_GAME_50"
                        type="radio"
                        class="hidden-radio"
                      />
                      <span  class="bundle-mode-icon mr-2">
                        <i  class="mtn-icon mtn-icon-mtn-momo"></i>
                      </span>
                      <span  class="bundle-mode-title">
                        Mobile Money
                      </span>
                    </label>
                  </div>
                </div>

                <button  class="btn btn-primary float-right">
                  <span >Activer</span>
                </button>
                <div  class="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>



      <div class="card collapsed">
        <header role="tab" class="card-header p-1" @click="toggleCollapse">
          <div
           
            class="bundle-activation-card-header not-collapsed"
            role="button"
            tabindex="2"
            aria-expanded="true"
            aria-controls="accordion2"
            style="overflow-anchor: none;"
          >
        <div class="font-weight-bold">150 FCFA</div>
            <p class="text-muted">Yellow_Game_Weekly(150F/400MB/7D)</p>
            <span class="kgk-mtn-keyboard_arrow_down icon-not-collapsed">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
            </span>
            <span class="kgk-mtn-keyboard_arrow_right icon-collapsed">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </span>
          </div>
        </header>

        <div :id="accordion2" v-show="isCollapsed" role="tabpane2">
          <div class="card-body">
            <div >
              <form >
                <div  class="bundle-activation-card-options">
                  <label  class="mr-1">
                    <input
                      
                      name="YELLOW_GAME_50"
                      value="activate"
                      type="radio"
                      checked="checked"
                    />
                    <div >Activer</div>
                    <p  class="text-muted">
                      Activer sur votre numéro
                    </p>
                  </label>
                  <label >
                    <input
                      
                      name="YELLOW_GAME_50"
                      value="offer"
                      type="radio"
                    />
                    <div >Offrir</div>
                    <p  class="text-muted">
                      Activer sur un autre numéro
                    </p>
                  </label>
                </div>

                <div  class="bundle-activation-card-payment-mode mt-2">
                  <div  class="form-group">
                    <label  class="font-weight-bold">
                      Sélectionnez un mode de paiement
                    </label>
                    <label  class="mr-3">
                      <input
                        
                        value="main"
                        name="mode_YELLOW_GAME_50"
                        type="radio"
                        checked="checked"
                        class="hidden-radio"
                      />
                      <span  class="bundle-mode-icon mr-2">
                        <i  class="mtn-icon mtn-icon-phone"></i>
                      </span>
                      <span  class="bundle-mode-title">
                        Compte principal
                      </span>
                    </label>
                    <label >
                      <input
                        
                        value="MO"
                        name="mode_YELLOW_GAME_50"
                        type="radio"
                        class="hidden-radio"
                      />
                      <span  class="bundle-mode-icon mr-2">
                        <i  class="mtn-icon mtn-icon-mtn-momo"></i>
                      </span>
                      <span  class="bundle-mode-title">
                        Mobile Money
                      </span>
                    </label>
                  </div>
                </div>

                <button  class="btn btn-primary float-right">
                  <span >Activer</span>
                </button>
                <div  class="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</template>
<script>
import { ref } from 'vue';

export default {
  name: 'ForfaitContent',

  setup() {
    const isModalOpen = ref(false);
    const isCollapsed = ref(true);

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const toggleCollapse = () => {
      isCollapsed.value = !isCollapsed.value;
    };

    // Retournez toutes les propriétés et méthodes nécessaires au template
    return { 
      isModalOpen, 
      isCollapsed, // Ajoutez cette ligne
      openModal, 
      closeModal, 
      toggleCollapse 
    };
  }
};
</script>



<style scoped>

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

.text-muted {
    color: #6c757d !important;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    /* flex-direction: row; */
    padding: 10px;
}

.btn, .btn>span {
    vertical-align: middle;
}

.float-left {
    float: left !important;
}

.service-card .service-card-bottom .btn i {
    font-size: 16px;
}

.float-right {
    float: right !important;
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
.btn {
    border-radius: 30px !important;
    font-size: 14px;
    font-family: MTNBrighterSans-Medium, Century Gothic, Arial, sans-serif;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px;
}


@media (min-width: 600px) {
  .svg-mobile {
    display: none;
  }
}

@media (max-width: 600px) {
  .svg-mobile {
    display: block;
    fill: #106887;
  }

  .service-card-bottom {
    display: none;
  }

  .mobile-align {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media screen and (max-width: 600px) {
  .service-card > * {
    height: 77px;
  }
}



.b-sidebar.b-sidebar-right {
    left: auto;
    right: 0;
}
.b-sidebar {
    width: 40%;
}
.b-sidebar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
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

.close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
}


.shadow {
    -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.bg-light {
    background-color: #f8f9fa !important;
}


.b-sidebar>.b-sidebar-header {
    font-size: 1.5rem;
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
.b-sidebar-header {
    background: #ffcc01;
    padding: 15px 20px !important;
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}


.b-sidebar.b-sidebar-right>.b-sidebar-header .close {
    margin-right: auto;
}
.b-sidebar>.b-sidebar-header .close {
    float: none;
    font-size: 1.5rem;
}
.b-sidebar-right .close {
    right: auto;
    left: -50px !important;
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
    justify-content: center;
    display: flex;
    border: none;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}

.b-icon.bi {
    display: inline-block;
    overflow: visible;
    vertical-align: -.15em;
}
svg {
    overflow: hidden;
}
img, svg {
    vertical-align: middle;
}

.b-sidebar-header strong {
    font-size: 18px;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.bundle-sidebar .b-sidebar-body {
    background: #fff !important;
}

.b-sidebar>.b-sidebar-body {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
}

.bundle-sidebar-header {
    padding: 15px;
}

#bundle_filter_list {
    background: #f4f4f4;
    padding: 7px;
    border-radius: 50px;
    font-size: 14px;
    color: #6c757d;
}

#bundle_filter_list>div[data-v-58f8d25d] {
    padding: 0 !important;
}
#bundle_filter_list>div {
    padding: 0 10px;
}
.row[data-v-58f8d25d] {
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    width: 100% !important;
    overflow-x: auto;
    margin: 0 !important;
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

.bundle-filter-item {
    text-align: center;
    padding-left: 5px !important;
    padding-right: 5px !important;
}

.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
}

.accordion {
    overflow-anchor: none;
}

.bundle-sidebar .accordion>.card {
    overflow: hidden;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
}
.accordion>.card:not(:last-of-type) {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
.accordion>.card {
    overflow: hidden;
}
.card {
    position: relative;
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .25rem;
}

.accordion>.card>.card-header {
    background: #fff;
}
.accordion>.card>.card-header {
    border-radius: 0;
    margin-bottom: -1px;
}
.card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}
.p-1 {
    padding: .25rem !important;
}
.card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, .03);
    border-bottom: 1px solid rgba(0, 0, 0, .125);
}
article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

.bundle-activation-card-header {
    padding: 10px 15px;
    position: relative;
    cursor: pointer;
}
[role=button] {
    cursor: pointer;
}


.font-weight-bold {
    font-weight: 700 !important;
}

.bundle-activation-card-header>p {
    font-size: 14px;
    margin: 5px 0 0 0;
}

.text-muted {
    color: #6c757d !important;
}

.bundle-activation-card-header.collapsed .icon-collapsed, .bundle-activation-card-header.not-collapsed .icon-not-collapsed {
    display: block;
}
.bundle-activation-card-header>span {
    position: absolute;
    right: 15px;
    top: 24px;
    font-size: 24px;
    color: #00678f;
}

.bundle-activation-card-header>span {
    position: absolute;
    right: 15px;
    top: 24px;
    font-size: 24px;
    color: #00678f;
}
.icon-collapsed, .icon-not-collapsed {
    display: none;
}

.bundle-sidebar, .card, .card-body {
    background: #f4f4f4 !important;
}

.card-body {
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;

}

.bundle-activation-card-options label {
    display: inline-block;
    vertical-align: top;
    width: 48%;
    background: #fff;
    padding: 10px;
    border: 2px solid #ced4d9;
    border-radius: 7px;
    cursor: pointer;
    position: relative;
}
.mr-1, .mx-1 {
    margin-right: .25rem !important;
}
label {
    display: inline-block;
    margin-bottom: .5rem;
}


.bundle-activation-card-options input[type=radio] {
    position: absolute;
    right: 10px;
    top: 10px;
}
input[type=checkbox], input[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
}

.bundle-activation-card-options label div {
    font-size: 14px;
    font-family: MTNBrighterSans-Medium, Century Gothic, Arial, sans-serif;
}

.bundle-activation-card-options label p {
    font-size: 12px;
    margin: 5px 0 0 0;
}

.bundle-sidebar .card .card-body {
    background: #f4f4f4 !important;
}

.form-group {
    margin-bottom: 1rem;
}

.font-weight-bold {
    font-weight: 700 !important;
}

label {
    display: inline-block;
    margin-bottom: .5rem;
}

.mr-3, .mx-3 {
    margin-right: 1rem !important;
}

label {
    display: inline-block;
    margin-bottom: .5rem;
}

input[type=checkbox], input[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}

.hidden-radio {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}


label input:checked~.bundle-mode-icon {
    border-color: #ffc107;
    background: #fff2bf;
}
.bundle-activation-card-payment-mode label .bundle-mode-icon {
    width: 28px;
    height: 28px;
    background: #fff;
    border-radius: 50%;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    border: 3px solid #ced4d9;
}
.bundle-activation-card-payment-mode label span {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}

.bundle-activation-card-payment-mode label .bundle-mode-title {
    font-size: 14px;
}
.bundle-activation-card-payment-mode label span {
    display: inline-block;
    vertical-align: middle;
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
.float-right {
    float: right !important;
}


.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(224, 207, 207, 0.5);
  z-index: 1050;
  display: flex;
  justify-content: center;
  align-items: center;
}








</style>