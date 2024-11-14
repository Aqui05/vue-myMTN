<template>
    <div class="business-content">
        <div class="section-header page-title mb-4">
            <h1>Aperçu de votre compte</h1>
            <div class="account-number mt-2">
                <div>
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
  }

  </script>
  
  <style scoped>
    .mb-4, .my-4 {
    margin-bottom: 1.5rem !important;
}

.site-page .page-title h1, .site-page .page-title h2 {
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
    margin-right: -15px;
    margin-left: -15px;
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

</style>