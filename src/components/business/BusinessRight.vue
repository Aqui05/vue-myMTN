<template>
    <div class="col-12 col-lg-8" style="padding: 0px;">
  <div  class="b2b-details-box">
    <!-- Header for Liste des factures -->
    <div  class="b2b-details-box-header">
      <div  class="d-flex justify-content-between">
        <div >
          <h2  class="font-bold mb-0">Liste des factures</h2>
          <p  class="m-0 font-12" v-show="!collapses['ListeFacture']">
            Veuillez cocher les factures que vous souhaitez payer
          </p>
        </div>
        <div class="chevron-parent d-flexx align-items-center justify-content-center" @click="toggleCollapse('ListeFacture')">
          <i :class="{'mdi mdi-chevron-down': !collapses['ListeFacture'], 'mdi mdi-chevron-right': collapses['ListeFacture']}" class="chevron-icon" style="font-size: 24px !important;"></i>
        </div>
        </div>
    </div>
    <!-- Content for Liste des factures -->
    <div >
      <div >

        <div class="py-4 text-center" v-show="!collapses['ListeFacture']" :class="{ 'd-none': isMobile && collapses['ListeFacture'], 'd-block': !isMobile || !collapses['ListeFacture'] }">

          <div class="skeleton-loader" v-if="loading"> 
              <div class="skeleton-text" v-for="n in 5" :key="n"></div> 
        </div>
        <div v-else>
          <i class="mdi icon mdi-briefcase-variant"></i>
          <div class="px-2 message"> 
            Aucune facture disponible
          </div>
        </div>
            
        </div>
      </div>
    </div>
  </div>

  <div class="b2b-details-box">
    <!-- Header for Mini relevé de compte -->
    <div class="b2b-details-box-header">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-between flex-wrap">
          <h2 class="font-bold mb-0">Mini relevé de compte</h2>
        </div>
        <div class="chevron-parent d-flexx align-items-center justify-content-center" @click="toggleCollapse('MiniReleve')">
          <i :class="{'mdi mdi-chevron-down': !collapses['MiniReleve'], 'mdi mdi-chevron-right': collapses['MiniReleve']}" class="chevron-icon" style="font-size: 24px !important;"></i>
        </div>
      </div>
    </div>
    <!-- Content for Mini relevé de compte -->
    <div>
      <div>
        <div v-show="!collapses['MiniReleve']"  class="py-4 text-center" :class="{ 'd-none': isMobile && collapses['MiniReleve'], 'd-block': !isMobile || !collapses['MiniReleve'] }">

          <div class="skeleton-loader" v-if="loading"> 
              <div class="skeleton-text" v-for="n in 5" :key="n"></div> 
        </div>
          <div v-else>
            <i class="mdi icon mdi-briefcase-variant"></i>
          <div  class="px-2 message">
            Aucune relevé disponible
          </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
          export default {
    name: 'BusinessRight',
    data() {
    return {
      collapses: {
        MiniReleve: true,
        ListeFacture: true
      },
      loading: true,
      isMobile: window.innerWidth <= 600
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 600;
    }
  },
  methods: {
    toggleCollapse(section) {
      this.collapses[section] = !this.collapses[section];
    },
  handleResize() {
      this.isMobile = window.innerWidth <= 600;
      if (!this.isMobile) {
        this.collapses.ListeFacture = false; // Affiche le contenu par défaut sur les grands écrans
        this.collapses.MiniReleve = false; // Affiche le contenu par défaut sur les grands écrans
      } else {
        this.collapses.ListeFacture = true; // Masque le contenu par défaut sur les mobiles
        this.collapses.MiniReleve = true; // Masque le contenu par défaut sur les mobiles
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize(); // Vérifie la taille de l'écran au montage
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
  }
</script>


<style scoped>

.chevron-icon {
  transition: transform 0.3s ease-in-out;
}

.chevron-icon.mdi-chevron-down {
  transform: rotate(0deg);
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

.font-12 {
    font-size: 12px !important;
}

.m-0 {
    margin: 0 !important;
}

.rotate {
  transform: rotate(90deg);
  transition: transform 0.3s ease-in-out;
}



.chevron-parent {
    border: 2px solid #ccc !important;
    height: 30px !important;
    width: 30px !important;
    border-radius: 50% !important;
    -webkit-transition: .3s;
    transition: .3s;
    justify-content: center;
    display: flex;
}
.align-items-center {
    -ms-flex-align: center !important;
    -webkit-box-align: center !important;
    align-items: center !important;
}
.justify-content-center {
    -ms-flex-pack: center !important;
    -webkit-box-pack: center !important;
    justify-content: center !important;
}



 .sidebar-card {
    overflow: hidden !important;
}

.sidebar-card {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
}
.position-relative {
    position: relative !important;
}


    .sidebar-card h3 {
    font-size: 16px;
    position: relative;
    margin-bottom: 15px;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.text-center {
    text-align: center !important;
}

.pb-4, .py-4 {
    padding-bottom: 1.5rem !important;
}
.pt-4, .py-4 {
    padding-top: 1.5rem !important;
}

.icon {
    font-size: 50px;
    color: #000 !important;
    fill: #000;
    height: 50px;
    width: 50px;
    padding-bottom: 10px;
}

.message {
    font-size: 15px !important;
    line-height: 120% !important;
    font-weight: 500 !important;
}

.pl-2, .px-2 {
    padding-left: .5rem !important;
}
.pr-2, .px-2 {
    padding-right: .5rem !important;
}

.sidebar-card h3:after {
    content: "";
    height: 100%;
    width: 8px;
    background: #ffcc01;
    position: absolute;
    left: -20px;
}

.b2b-details-box {
    background: #fff;
    padding: 30px 20px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
}

.b2b-details-box-header {
    border-left: 16px solid #fc0;
    padding-left: 20px;
    margin-left: -27px;
    vertical-align: middle;
}

.justify-content-between {
    -ms-flex-pack: justify !important;
    -webkit-box-pack: justify !important;
    justify-content: space-between !important;
}

.d-flex {
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: flex !important;
}

.mt-3, .my-3 {
    margin-top: 1rem !important;
}

.b2b-overlay-content-mini {
    height: 200px;
    overflow: hidden;
}

.text-center {
    text-align: center !important;
}
.pb-4, .py-4 {
    padding-bottom: 1.5rem !important;
}
.pt-4, .py-4 {
    padding-top: 1.5rem !important;
}

.b2b-details-box-header h2 {
    font-size: 18px;
    position: relative;
    padding: 5px 0;
    margin: 0;
}

.d-flexx {
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: flex !important;
  }

@media (min-width : 600px) {
  .d-flexx {
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: none !important;
  }
}

</style>