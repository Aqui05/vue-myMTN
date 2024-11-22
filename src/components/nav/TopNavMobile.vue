<template>
    <div id="main_header">
      <div id="mobile_menu" class="position-relative">
        <!--ouvrir leftbar component quand on clique sur ce bouton en étant sur l'affichage mobile-->
        <button @click.stop="toggleLeftNav">
          <svg style="fill: black; width: 32px;" xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
        <button @click="goToSearch"  class="ml-1 search"> 
          <svg style="fill: black; width: 32px; height: 32px;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"> <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/> </svg> 
        </button>
        <router-link to="/search" class="router-link">  </router-link> 
      </div>
      <div id="main_header_welcome">
        <div class="text-truncate">Y'ello 
          <span class="ml-1">AQUILAS OLUWATOBI ELISEE</span>
        </div>
        <p>Bienvenue sur votre espace personnel.</p>
      </div>
      <div class="w-100 d-flex justify-content-between flex-wrap">
        <div id="main_header_left">
          <div class="header-balance">
            <div class="header-balance-container" style="display: flex; flex-wrap: wrap; align-content: center; align-items: center; justify-content: flex-start;  gap: 15px;">
              <div class="svg-container">
                <svg style="position: relative; top: 3px; left: 0px; fill: black; width: 30px; height: 30px;" xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#e8eaed"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/></svg>
              </div>
              <div class="header-balance-details">
                <span style="color: rgb(211, 103, 9);">0 FCFA</span>
                <span data-v-3da57f56="">Solde principal</span>
              </div>
            </div>
          </div>
        </div>
        <!-- <div id="main_header_right">
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
        -->
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
     <!-- LeftNav component -->
     <LeftNav v-if="isLeftNavVisible" @click.stop />
  </template>

<script> 
  import LeftNav from './LeftNav.vue'; 
  export default { 
    name: 'TopNavMobile', 
    components: { LeftNav }, 
    data() { 
      return { 
        isLeftNavVisible: false 
      };
    }, 
    emits: ['search-clicked'],
    methods: {
      goToSearch() { this.$emit('search-clicked'); },

      toggleLeftNav() { 
        this.isLeftNavVisible = !this.isLeftNavVisible; 
        if (this.isLeftNavVisible) { 
          document.addEventListener('click', this.handleClickOutside); 
        } 
        else { 
          document.removeEventListener('click', this.handleClickOutside); 
        } 
      }, 
      
      handleClickOutside(event) { 
        if (!this.$el.contains(event.target)) { 
          this.isLeftNavVisible = false; 
          document.removeEventListener('click', this.handleClickOutside); 
        } 
      } 
    }, 
    
    beforeDestroy() { 
      document.removeEventListener('click', this.handleClickOutside); 
    } 
  } 
</script>
<style scoped>

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
}
    .header-balance {
        background: #fff;
        display: block !important;
        width: 100%;
        padding: 10px 10px 10px 10px;
        border-radius: 6px;
        margin-bottom: 5px !important;
        -webkit-box-shadow: 0 4px 6px rgba(54, 64, 73, .2);
        box-shadow: 0 4px 6px rgba(54, 64, 73, .2);
        border-radius: 8px;
    }

.header-balance-container .svg-container {
    display: block;
    background: #ffeea9;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 35px;
    line-height: 50px;
    width: 50px;
    height: 50px;
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

.mtn-separator {
    display: none;
}

@media screen and (max-width: 600px) {
    .mtn-separator {
        position: relative;
        top: 30px;
        display: block;
    }
}

.mtn-separator svg {
    fill: #ffcc01;
    width: 100%;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
}

svg {
    overflow: hidden;
}


</style>