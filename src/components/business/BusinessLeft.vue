<template>
    <div class="col-12 col-lg-4" style="padding: 0px;">
      <div class="sidebar-card position-relative">
        <div class="content">
          <div>
            <h3>Total des impayés</h3>
            <div class="skeleton-loader" v-if="loading"> 
              <div class="skeleton-text" v-for="n in 3" :key="n"></div> 
            </div>
            <div v-else class="py-4 text-center">
              <i class="mdi icon mdi-briefcase-variant"></i>
              <div class="px-2 message"> 
                Total indisponible
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="b2b-details-box position-relative">
  <div class="b2b-details-box-header">
    <div class="d-flex justify-content-between">
      <div>
        <h2 class="font-bold mb-0">Consommation du compte</h2>
      </div>
      <div class="chevron-parent d-flexx align-items-center justify-content-center d-md-none chevron-parent " @click="toggleCollapse('consommationCompte')">
        <i :class="{'mdi mdi-chevron-right': !collapses['consommationCompte'], 'mdi mdi-chevron-down': collapses['consommationCompte']}" class="chevron-icon" style="font-size: 24px !important;"></i>
      </div>
    </div>
  </div>

  <div class="mt-3" :class="{ 'd-none': isMobile && collapses['consommationCompte'], 'd-block': !isMobile || !collapses['consommationCompte'] }">
    <div class="skeleton-loader" v-if="loading"> 
      <div class="skeleton-text" v-for="n in 3" :key="n"></div> 
    </div>
    <div v-else class="b2b-overlay-content-mini">
      <div class="py-4 text-center">
        <i class="mdi icon mdi-briefcase-variant"></i>
        <div class="px-2 message">
          Aucune consommation disponible pour ce compte
        </div>
      </div>
    </div>
  </div>
</div>

      <div class="b2b-details-box position-relative">
        <div class="b2b-details-box-header">
          <div class="d-flex justify-content-between">
            <div>
              <h2 class="font-bold mb-0">Consommation des services</h2>
            </div>
            <div class="chevron-parent d-flexx align-items-center justify-content-center" @click="toggleCollapse('consommationServices')">
              <i :class="{'mdi mdi-chevron-right': !collapses['consommationServices'], 'mdi mdi-chevron-down': collapses['consommationServices']}" class="chevron-icon" style="font-size: 24px !important;"></i>
            </div>
          </div>
        </div>
          <div class="mt-3" :class="{ 'd-none': isMobile && collapses['consommationServices'], 'd-block': !isMobile || !collapses['consommationServices'] }">  
          <div class="skeleton-loader" v-if="loading"> 
              <div class="skeleton-text" v-for="n in 3" :key="n"></div> 
            </div>
          <div v-else class="b2b-overlay-content-mini">
            <div class="py-4 text-center">
              <i class="mdi icon mdi-briefcase-variant"></i>
              <div class="px-2 message">
                Aucune consommation disponible pour ce service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'BusinessLeft',
  data() {
    return {
      collapses: {
        consommationCompte: true,
        consommationServices: true
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
        this.collapses.consommationCompte = false; // Affiche le contenu par défaut sur les grands écrans
        this.collapses.consommationServices = false; // Affiche le contenu par défaut sur les grands écrans
      } else {
        this.collapses.consommationCompte = true; // Masque le contenu par défaut sur les mobiles
        this.collapses.consommationServices = true; // Masque le contenu par défaut sur les mobiles
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

@media (min-width: 601px) {
  .chevron-parent {
    display: none !important;
  }
  .b2b-details-box .mt-3 {
    display: block !important;
  }
}


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

.rotate {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}


  .sidebar-card{
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

.chevron-parent {
    border: 2px solid #ccc !important;
    height: 30px !important;
    width: 30px !important;
    border-radius: 50% !important;
    -webkit-transition: .3s;
    transition: .3s;
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
  .d-flex {
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: none !important;
  }
}
</style>
  