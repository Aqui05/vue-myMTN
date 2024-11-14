<script>
    export default{
        name:'ConsomRight'
    }
</script>

<template>
<div class="col-md-3 order-md-last order-first position-relative" style="    padding: 0;">
  <div class="sidebar-card v-step-1">
    <h3>Sélectionnez une période</h3>
    <div class="d-flex flex-wrap">
      <a type="button" class="btn btn-outline-secondary mb-2 mr-2 filter">Aujourd'hui</a>
      <a type="button" class="btn btn-outline-secondary mb-2 mr-2">Hier</a>
      <a type="button" class="btn btn-outline-secondary mb-2 mr-2 filter active-filter"> <span style="color: white;">7 derniers jours</span></a>
      <a class="btn btn-outline-secondary mb-2 mr-2 filter">Ce mois</a>
    </div>
    <h3 class="mt-3">Définir une période</h3>
    <div>
      <div>
        <div role="group" class="b-form-btn-label-control dropdown b-form-datepicker mb-2 form-control" id="__BVID__332__outer_" lang="fr" aria-labelledby="__BVID__332__value_">
          <button type="button" aria-haspopup="dialog" aria-expanded="false" class="btn h-auto" id="__BVID__332">
            <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="calendar" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-calendar b-icon bi">
              <g>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
              </g>
            </svg>
          </button>
          <div role="dialog" tabindex="-1" aria-modal="false" class="dropdown-menu" id="__BVID__332__dialog_" aria-labelledby="__BVID__332__value_">
          </div>
          <label class="form-control text-muted" id="__BVID__332__value_" for="__BVID__332">Date de début</label>
        </div>
        <div role="group" class="b-form-btn-label-control dropdown b-form-datepicker mb-2 form-control" id="__BVID__335__outer_" lang="fr" aria-labelledby="__BVID__335__value_">
          <button type="button" aria-haspopup="dialog" aria-expanded="false" class="btn h-auto" id="__BVID__335">
            <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="calendar" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-calendar b-icon bi">
              <g>
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
              </g>
            </svg>
          </button>
          <div role="dialog" tabindex="-1" aria-modal="false" class="dropdown-menu" id="__BVID__335__dialog_" aria-labelledby="__BVID__335__value_">
          </div>
          <label class="form-control text-muted" id="__BVID__335__value_" for="__BVID__335">Date de fin</label>
        </div>
        <button type="button" disabled="disabled" class="btn w-100 filter btn-primary disabled">Rechercher</button>
      </div>
    </div>
  </div>
  <div class="sidebar-card v-step-2">
    <h3>Alerte email</h3>
    <div class="w-100 d-flex justify-content-between mb-3">
      <span class="text-muted notif-text mr-2">Recevoir les alertes des produits &amp; services:</span>
      <div class="custom-control custom-switch b-custom-control-lg">
        <input type="checkbox" class="custom-control-input" value="true" id="__BVID__338">
        <label class="custom-control-label" for="__BVID__338"></label>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-between">
      <span class="text-muted notif-text mr-2">Recevoir les alertes internet:</span>
      <div class="custom-control custom-switch b-custom-control-lg">
        <input type="checkbox" class="custom-control-input" value="true" id="__BVID__339">
        <label class="custom-control-label" for="__BVID__339"></label>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.position-relative {
    position: relative !important;
}

@media (min-width: 768px) {
    .order-md-last {
        -ms-flex-order: 13;
        -webkit-box-ordinal-group: 14;
        order: 13;
    }
}
@media (min-width: 768px) {
    .col-md-3 {
        -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
        flex: 0 0 25%;
    }
}
.order-first {
    -ms-flex-order: -1;
    -webkit-box-ordinal-group: 0;
    order: -1;
}


.position-relative {
    position: relative !important;
}

@media (min-width: 768px) {
    .order-md-last {
        -ms-flex-order: 13;
        -webkit-box-ordinal-group: 14;
        order: 13;
    }
}

.sidebar-card h3 {
    font-size: 16px;
    position: relative;
    margin-bottom: 15px;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.flex-wrap {
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
}

.d-flex {
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: flex !important;
}

.sidebar-card h3:after {
    content: "";
    height: 100%;
    width: 8px;
    background: #ffcc01;
    position: absolute;
    left: -20px;
}

.btn-outline-secondary {
    color: #106887;
    border-color: #106887;
}
.active-filter {
    color: #fff;
    border-color: #95aac9;
    background-color: #95aac9;
}

.mt-3, .my-3 {
    margin-top: 1rem !important;
}

.sidebar-card h3:after {
    content: "";
    height: 100%;
    width: 8px;
    background: #ffcc01;
    position: absolute;
    left: -20px;
}


.b-form-btn-label-control.form-control {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    height: auto;
    padding: 0;
    background-image: none;
    border: 1px solid #6c757d;
    border-radius: 5px;
}
.mb-2, .my-2 {
    margin-bottom: .5rem !important;
}
.dropdown, .dropleft, .dropright, .dropup {
    position: relative;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.b-form-btn-label-control.form-control>.btn {
    line-height: 1;
    font-size: inherit;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 0;
    background: none;
}

@font-face {
  font-family: "MTNBrighterSans-Medium";
  src:
    url('@/fonts/MTNBrighterSans-Medium.otf') format("opentype");
  font-weight: normal;
  font-style: normal;
}

.b-form-btn-label-control.form-control>.dropdown-menu {
    padding: .5rem;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem;
}

.b-form-btn-label-control.form-control>.form-control {
    height: auto;
    min-height: calc(1.5em + .75rem);
    padding-left: .25rem;
    margin: 0;
    border: 0;
    outline: 0;
    background: transparent;
    word-break: break-word;
    font-size: inherit;
    white-space: normal;
    cursor: pointer;
}

.text-muted {
    color: #6c757d !important;
}

.btn-primary.disabled, .btn-primary:disabled {
    color: #fff;
    border: none;
    background-color: #ffe05c;
}

.btn.disabled, .btn:disabled {
    opacity: .65;
}

.btn-primary {
    color: #000;
    border: none;
    background-color: #fc0;
}

.sidebar-card {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
}

.notif-text {
    font-size: 14px !important;
}

.mr-2, .mx-2 {
    margin-right: .5rem !important;
}

.btn {
    border-radius: 30px !important;
    font-size: 14px;
    font-family: MTNBrighterSans-Medium, Century Gothic, Arial, sans-serif;
    font-weight: 500;
    padding-left: 15px;
    padding-right: 15px;
}

.mb-3, .my-3 {
    margin-bottom: 1rem !important;
}

.w-100 {
    width: 100% !important;
}
.justify-content-between {
    -ms-flex-pack: justify !important;
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
}

.custom-switch.b-custom-control-lg, .input-group-lg .custom-switch {
    padding-left: 2.8125rem;
}

.custom-switch {
    padding-left: 2.25rem;
}
.custom-control {
    position: relative;
    z-index: 1;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}




.btn-outline-secondary {
    color: #95aac9;
    border-color: #95aac9;
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
    border: 1px solid;
}
.mb-2, .my-2 {
    margin-bottom: .5rem !important;
}
.mr-2, .mx-2 {
    margin-right: .5rem !important;
}
</style>