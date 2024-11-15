<template>
    <div id="main_header">
      <div id="mobile_menu" class="position-relative">
        <button>
          <i class="kgk-mtn-menu"></i>
        </button>
        <button class="ml-1 search">
          <i class="kgk-mtn-search"></i>
        </button>
      </div>
      <div id="main_header_welcome">
        <div class="text-truncate">Y'ello 
          <span class="ml-1">AQUILAS OLUWATOBI ELISEE</span>
        </div>
        <p>Bienvenue sur votre espace personnel.</p>
      </div>
      <div class="w-100 d-flex justify-content-between flex-wrap">
        <div id="main_header_left">
          <div data-v-3da57f56="" class="header-balance">
            <div data-v-3da57f56="" class="header-balance-container">
              <i data-v-3da57f56="" class="kgk-mtn-BW_Icons_MTNBusiness_Mobility_4" style="background-color: rgb(253, 224, 199);"></i>
              <div data-v-3da57f56="" class="header-balance-details">
                <span data-v-3da57f56="" style="color: rgb(211, 103, 9);">0 FCFA</span>
                <span data-v-3da57f56="">Solde principal</span>
              </div>
            </div>
          </div>
        </div>
        <div id="main_header_right">
          <div class="d-flex align-items-center">
            <a href="#" class="mr-3 d-lg-none d-md-flex">
              <i class="mtn-icon mtn-icon-search"></i>
            </a>
            <div class="d-sm-none d-lg-flex position-relative mr-3">
              <input type="text" placeholder="Recherche">
              <i class="kgk-mtn-search icon-search"></i>
            </div>
            <div data-v-e1ad11a6="" class="user-profil-avatar">
              <div data-v-e1ad11a6="" class="user-profil-avatar-pic"></div>
              <div data-v-e1ad11a6="" class="user-profil-avatar-details">
                <span data-v-e1ad11a6="">KIKISSAGBE</span>
                <span data-v-e1ad11a6="">61255118</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="main_header_left_backdrop" class="modal-backdrop d-none" style="display: none;"></div>
      <div class="mtn-separator">
        <div class="mtn-curve">
          <div>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              height="25px"
              viewBox="0 0 500 25"
              xml:space="preserve"
              preserveAspectRatio="none"
              class="mtn-curve__convex mtn-curve__curve-mobile"
            >
              <path d="M0,0c166.7,33.3,333.3,33.3,500,0H0z" class="mtn-svg-fill--yellow"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    export default {
        name:'TopNavMobile'
    }
</script>
  
<style>

@media screen and (max-width: 600px) {
    #main_header {
        position: relative;
        left: 0;
        width: 100%;
        height: auto;
        background: #ffcc01;
        padding: 0 15px;
    }
}

#mobile_menu {
    height: 60px;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 2px 2px -2px rgba(0, 0, 0, .12), 0 1px 4px rgba(0, 0, 0, .09);
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 2px 2px -2px rgba(0, 0, 0, .12), 0 1px 4px rgba(0, 0, 0, .09);
    margin: 0 -15px;
    padding: 15px;
    background: url("@/assets/mtn-logo.svg") no-repeat 50%;
    background-size: 50px;
}
.position-relative {
    position: relative !important;
}

#mobile_menu>button {
    background: transparent;
    border: none;
    font-size: 32px;
    padding: 0;
    line-height: 0;
    cursor: pointer;
}

#mobile_menu>button {
    background: transparent;
    border: none;
    font-size: 32px;
    padding: 0;
    line-height: 0;
}
.search {
    position: absolute;
    right: 15px !important;
}


#main_header_welcome {
    padding: 30px 0 15px 0;
    font-size: 18px;
    font-weight: 700;
}

.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.ml-1, .mx-1 {
    margin-left: .25rem !important;
}

#main_header_welcome p {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
}



.w-100 {
    width: 100% !important;
}

.justify-content-between {
    -ms-flex-pack: justify !important;
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
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

@media screen and (max-width: 600px) {
    #main_header_left {
        background: transparent;
        padding: 0;
        border-radius: 0;
        margin-bottom: -80px;
        position: relative;
        z-index: 10;
        width: 100%;
    }
}

#main_header_left {
    padding-top: 13px;
    float: left;
}

#main_header_left>div:first-child {
    margin-right: 60px;
}

@media screen and (max-width: 600px) {
    #main_header_left>div {
        min-width: auto;
        margin: 0;
        padding-right: 0;
    }
}
#main_header_left>div {
    display: inline-block;
    vertical-align: middle;
    min-width: 120px;
    position: relative;
    padding-left: 60px;
}
@media screen and (max-width: 600px) {
    .header-balance {
        background: #fff;
        display: block !important;
        width: 100%;
        padding: 10px 10px 10px 60px;
        border-radius: 6px;
        margin-bottom: 5px !important;
        -webkit-box-shadow: 0 4px 6px rgba(54, 64, 73, .2);
        box-shadow: 0 4px 6px rgba(54, 64, 73, .2);
        border-radius: 8px;
    }
}

@media screen and (max-width: 600px) {
    .header-balance-container svg {
        width: 40px;
        height: 40px;
        font-size: 24px;
        left: 10px;
        line-height: 40px;
        top: 10px;
    }
}

.header-balance-container svg {
    display: block;
    width: 50px;
    background: #ffeea9;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 35px;
    position: absolute;
    top: -4px;
    left: 0;
    line-height: 50px;
}


.header-balance-details {
    position: relative;
    top: 0;
}

@media screen and (max-width: 600px) {
    .header-balance-details span:first-child {
        font-size: 16px;
    }
}

.header-balance-details span:first-child {
    font-weight: 700;
    font-size: 20px;
}
.header-balance-details span {
    display: block;
}

@media screen and (max-width: 600px) {
    .header-balance-details span:last-child {
        font-size: 12px;
    }
}

.header-balance-details span:last-child {
    font-weight: lighter;
    font-size: 14px;
    position: relative;
    top: -4px;
}
.header-balance-details span {
    display: block;
}


</style>