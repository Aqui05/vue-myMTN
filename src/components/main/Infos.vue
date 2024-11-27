<template>
    <div id="home_side_bar" class="col-md-3" style="padding: 0;">
      <div class="sidebar-card v-step-1">
        <h3>Infos carte SIM</h3>
        <div class="skeleton-loader" v-if="loading"> 
          <div class="skeleton-text" v-for="n in 3" :key="n"></div> 
        </div>

        <div v-else>
          <div>
            <div class="sidebar-sim-line" style="">
              <div style=" display: flex; flex-wrap: wrap; align-content: center; align-items: center;">
                <i class="side-icon kgk-mtn-sim-card"></i>
                <span>61255118</span>
                <i class="kgk-mtn-verified ml-1" style="color: rgb(20, 182, 237);"></i>
              </div>
            </div>
            <div>

              <button type="button" @click="openSimModal" class="btn btn-outline-secondary w-100 rounded-pill">
                Afficher les détails
              </button>
<!--               <button 
                @click="openSimModal"
                type="button"
                class="btn btn-outline-secondary w-100 rounded-pill"
              >
              <span style="color: #106887; " >
                Afficher les détails
              </span>
              </button> -->
            </div>
          </div>
        </div>
      </div>
      
      <div id="other_sim_widget" class="sidebar-card v-step-2">
        <h3>Mes autres numéros</h3>

        <div class="skeleton-loader" v-if="loading"> 
          <div class="skeleton-text" v-for="n in 3" :key="n"></div> 
        </div>
        <div v-else></div>

      </div>
      
      <div class="v-tour">
      </div>
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
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
    name: 'Infos',

    setup() {
    const isModalOpen = ref(false);

    const openSimModal = () => {
      isModalOpen.value = true;
    };

    const closeSimModal = () => {
      isModalOpen.value = false;
    };


    return { isModalOpen, openSimModal, closeSimModal };
  },

  data() {
    return {
      loading: true
    }
  },
  mounted() {
    // Simulez le chargement des données
    setTimeout(() => {
      this.loading = false
    }, 2000) // Chargement pendant 2 secondes
  }
  };
  </script>
  

<style scoped>

.side-icon {
    font-size: 22px;
    width: 18px;
}

.sidebar-sim-line>* {
    vertical-align: middle;
    display: inline-block;
}

.skeleton-loader { 
  display: flex; 
  flex-direction: column; 
  gap: 10px; 
  padding: 10px; 
} 

.skeleton-text { 
  height: 20px; 
  width: 100%; 
  background: 
  linear-gradient(-90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%); 
  background-size: 200% 200%; 
  animation: loading 1.5s infinite; 
} 

@keyframes loading { 
  0% { background-position: 200% 0; } 
  100% { background-position: -200% 0; } 
}

    @media (min-width: 768px) {
    .col-md-3 {
        flex: 0 0 25%;
        -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
    }
}

.ml-1, .mx-1 {
    margin-left: .25rem !important;
}

.sidebar-card {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
}

.sidebar-card h3 {
    font-size: 16px;
    position: relative;
    margin-bottom: 15px;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.sidebar-card h3:after {
    content: "";
    height: 100%;
    width: 8px;
    background: #ffcc01;
    position: absolute;
    left: -20px;
}

.sidebar-sim-line {
    padding: 15px 0;
    border: 1px solid #e1e0e0;
    border-left: none;
    border-right: none;
    margin-bottom: 15px;
}

.sidebar-sim-line>i {
    font-size: 22px;
    width: 18px;
}

.sidebar-sim-line>* {
    vertical-align: middle;
    display: inline-block;
}


.sidebar-sim-line>img {
    font-size: 22px;
    width: 18px;
}

.sidebar-sim-line>* {
    vertical-align: middle;
    display: inline-block;
}

.sidebar-sim-line span {
    margin-left: 10px;
}


.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}

.btn-outline-secondary {
    color: #106887;
    border-color: #106887;
}

.btn-outline-secondary {
    color: #106887;
    border-color: #106887;
}

.btn, .btn>span {
    vertical-align: middle;
}
.btn {
    border-radius: 30px !important;
    font-size: 14px;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px;
}
.w-100 {
    width: 100% !important;
}
.rounded-pill {
    border-radius: 50rem !important;
}

[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
    appearance: button;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
}
button {
    border-radius: 0;
}




/* 
.modal-backdrop {
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


</style>