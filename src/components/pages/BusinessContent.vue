<template>
    <div class="business-content">
        <div class="section-header page-title mb-4">
            <h1>Aperçu de votre compte</h1>
            <div class="account-number mt-2">
                <div class="skeleton-loader" v-if="loading"> 
                    <div class="skeleton-text"></div> 
                </div>
                <div v-else>
                    <span>Numéro de compte: </span>
                    <span><b></b></span>
                </div>
            </div>
        </div>
        <div class="container-section row">
          <div class="left-container col-lg-4">
                  <BusinessLeft />
          </div>
          <div class="right-container col-lg-8">
                  <BusinessRight />
          </div>
      </div>
    </div>
  </template>
  
  <script>
import BusinessRight from '../business/BusinessRight.vue';
import BusinessLeft from '../business/BusinessLeft.vue';



  export default {
    name: 'business',
    components: {
        BusinessRight,
        BusinessLeft
    },
    data() {
    return {
      loading: true
    }
  },
    mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  
  }
  }

  </script>
  
  <style scoped>

.skeleton-loader { 
  display: flex; 
  flex-direction: column; 
  gap: 10px; 
  padding: 10px; 
} 

.skeleton-text { 
  height: 30px; 
  width: 50%; 
  background: 
  linear-gradient(-90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%); 
  background-size: 200% 200%; 
  animation: loading 1.5s infinite; 
} 


    .mb-4, .my-4 {
    margin-bottom: 1.5rem !important;
}

.page-title h1, .page-title h2 {
    font-size: 24px;
    margin: 0;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.account-number{
    font-size: 18px !important;
    line-height: 20px;
}

.mt-2, .my-2 {
    margin-top: .5rem !important;
}

.row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}


@media (min-width: 992px) {
    .col-lg-8 {
        -ms-flex: 0 0 66.666667%;
        -webkit-box-flex: 0;
        flex: 0 0 66.666667%;
        padding-left: 15px;
        padding-right: 15px;
    }
}


@media (min-width: 992px) {
    .col-lg-4 {
        -ms-flex: 0 0 33.333333%;
        -webkit-box-flex: 0;
        flex: 0 0 33.333333%;
        padding-left: 15px;
        padding-right: 15px;
    }
}

@media (max-width: 768px) {
    .business-content {
        padding: 15px;
    }
}

@media screen and (max-width: 600px) {
    .site-page, .page-title h1, .site-page, .page-title h2 {
        font-size: 18px;
    }
}


@media screen and (max-width: 600px) {
    .site-page, .page-title p {
        font-size: 14px;
    }
}

@media screen and (min-width: 600px) {
    .page-title {
        padding: 0 15px;
    }
}


@media screen and (max-width: 600px) {
    .section-header p {
        font-size: 14px;
        line-height: 18px;
    }
}

</style>