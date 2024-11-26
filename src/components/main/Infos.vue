<template>
    <div id="home_side_bar" class="col-md-3" style="padding: 0;">
      <div class="sidebar-card v-step-1">
        <h3>Infos carte SIM</h3>
        <div>
          <div>
            <div class="sidebar-sim-line" style="">
              <div style="    display: flex; flex-wrap: wrap; align-content: center; align-items: center;">
                <i class="kgk-mtn-sim-card"></i>
                <span>61255118</span>
                <i class="kgk-mtn-verified ml-1" style="color: rgb(20, 182, 237);"></i>
              </div>
            </div>
            <div>
              <button 
                @click="openSimModal"
                type="button"
                class="btn btn-outline-secondary w-100 rounded-pill"
              >
              <span style="color: #106887; " >
                Afficher les détails
              </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div id="other_sim_widget" class="sidebar-card v-step-2">
        <h3>Mes autres numéros</h3>
        <div>
          <div></div>
        </div>
      </div>
      
      <div class="v-tour">
      </div>
    </div>


        
    <div v-if="isModalOpen" class="modal-backdrop" @click.stop="closeSimModal">
    <div class="modal fade show" style="display: block;" aria-hidden="false">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content modal-content1">
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
  }
  };
  </script>
  

<style scoped>
    @media (min-width: 768px) {
    .col-md-3 {
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

.btn:hover {
  color: #ffcc01;
}




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