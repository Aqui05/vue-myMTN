<template>
    <div class="w-100 d-flex justify-content-between flex-wrap">
      <!-- Left Section - Balance -->
      <div id="main_header_left">
        <div class="header-balance">
          <div class="header-balance-container">
            <!-- Utilisez une classe Font Awesome ou une autre bibliothèque d'icônes compatible -->
            <i class="fas fa-mobile-alt balance-icon" style="background-color: rgb(253, 224, 199);"></i>
            <div class="header-balance-details">
              <span class="balance-amount" style="    color: rgb(211, 103, 9);">590.99 FCFA</span>
              <span class="balance-label">Solde principal</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Right Section - Search and Profile -->
      <div id="main_header_right">
        <div class="d-flex align-items-center">
          <!-- Mobile Search 
            <a href="#" class="mr-3 d-lg-none d-md-flex">
                <i class="fas fa-search"></i>
            </a>
          -->
          <!-- Desktop Search -->
          <div class="d-sm-none d-lg-flex position-relative mr-3">
            <input type="text" placeholder="Recherche">
            <i class="fas fa-search icon-search"></i>
          </div>
  
          <!-- User Profile -->
          <div class="user-profil-avatar">
            <div class="user-profil-avatar-pic">
              
            </div>
            <div class="user-profil-avatar-details">
              <span>KIKISSAGBE</span>
              <span>61255118</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopBar',
    data() {
      return {
        // Ajoutez ici les données nécessaires
      }
    }
  }
  </script>
  <style scoped>

.w-100 {
    width: 100% ;
}

.justify-content-between {
    -ms-flex-pack: justify ;
    -webkit-box-pack: justify ;
    justify-content: space-between ;
}


.flex-wrap {
    -ms-flex-wrap: wrap ;
    flex-wrap: wrap ;
}

.d-flex {
    display: -ms-flexbox ;
    display: -webkit-box ;
    display: flex ;
}
    #main_header_left {
    margin: auto 0;
    float: left;
}

#main_header_left>div:first-child {
    margin-right: 60px;
}

#main_header_left>div {
    display: inline-block;
    vertical-align: middle;
    min-width: 120px;
    position: relative;
    padding-left: 60px;
}


.header-balance-container i {
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
    top: -3px;
}

.header-balance-details span:first-child {
    font-weight: 700;
    font-size: 20px;
}

.header-balance-details span {
    display: block;
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



#main_header_right {
    float: right;
    margin: auto 0;
}

.align-items-center {
    -ms-flex-align: center ;
    -webkit-box-align: center ;
    align-items: center ;
}

.mr-3, .mx-3 {
    margin-right: 1rem ;
}

.position-relative {
    position: relative ;
}

#main_header_right input {
    border-radius: 20px ;
    border: 1px solid #6c757d ;
    max-width: 300px ;
    height: 36px;
    padding: 4px 12px;
    padding-right: 28px;
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

.icon-search {
    position: absolute;
    right: 10px;
    top: 9px;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
}

.user-profil-avatar {
    position: relative;
    padding-left: 50px;
    font-size: 14px;
}

.user-profil-avatar .user-profil-avatar-pic {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #faa61a url("@/assets/avatar.svg") no-repeat 50%;
    background-size: 130% !important;
    border: 2px solid #93693b;
    position: absolute;
    left: 0;
}

.user-profil-avatar-details>span:first-child {
    font-weight: 700;
}

.user-profil-avatar-details>span {
    display: block;
}

.user-profil-avatar-details>span:last-child {
    font-size: 12px;
    position: relative;
    top: -3px;
}





@media (min-width: 768px) {
    .d-md-flex {
        display: -ms-flexbox ;
        display: -webkit-box ;
        display: flex ;
    }
}    

@media (min-width: 992px) {
    .d-lg-flex {
        display: -ms-flexbox ;
        display: -webkit-box ;
        display: flex ;
    }
}

a {
    color: #106887;
}

a, a:hover {
    text-decoration: none;
}
  </style>