<template>
    <div id="home_side_bar" class="col-md-3" style="padding: 0;">
      <div class="sidebar-card v-step-1">
        <h3>Infos carte SIM</h3>
        <div>
          <div>
            <div class="sidebar-sim-line" style="">
              <i class="kgk-mtn-sim-card"></i>
              <div style="    display: flex; flex-wrap: wrap; align-content: center; align-items: stretch;">
                <img src="@/assets/carte-sim.png" alt="carte" style="width: 20px;"> 
                <span>61255118</span>
                <img src="@/assets/facebook-verified.png" alt="facebook-certified">
              </div>
            </div>
            <div>
              <button
               
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
  </template>
  
  <script>
  export default {
    name: 'Infos',
  };
  </script>
  

<style scoped>
    @media (min-width: 768px) {
    .col-md-3 {
        -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
    }
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




</style>