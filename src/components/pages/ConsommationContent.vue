<template>
    <div class="consommation-content">
        <div class="row">
            <div class="col-md-12 page-title">
                <h1 style="margin: 0;">Ma consommation</h1>
                <p class="text-muted"> Détails de la consommation des produits &amp; services MTN et internet </p>
            </div>
        </div>
        <div class="row">
            <section class="consom-left col-md-9">
            <ConsomLeft/>
        </section>
        <section class="consom-left col-md-3">
            <ConsomRight/>
        </section>
        </div>
    </div>
  </template>
  
  <script>
import ConsomLeft from '../consommation/ConsomLeft.vue';
import ConsomRight from '../consommation/ConsomRight.vue';

  export default {
    name: 'consommation',
    components: {
     ConsomLeft,
     ConsomRight
    },
  }

  </script>
  

  <style scoped>
    .row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

@media (min-width: 768px) {
    .col-md-12 {
        -ms-flex: 0 0 100%;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
        padding: 0 15px;
    }
}


.site-page, .page-title h1, .site-page, .page-title h2 {
    font-size: 24px;
    margin: 0;
}
h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.text-muted {
    color: #6c757d !important;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}


a, body, div, h1, h2, h3, h4, h5, p, span, strong {
    font-family: MTNBrighterSans, Century Gothic, Arial, sans-serif;
}

@media (min-width: 768px) {
    .col-md-9 {
        -ms-flex: 0 0 75%;
        -webkit-box-flex: 0;
        flex: 0 0 75%;
        padding-left: 15px;
        padding-right: 15px;
    }
}

@media (min-width: 768px) {
    .col-md-3 {
        -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
        flex: 0 0 25%;
        padding-left: 15px;
        padding-right: 15px;
    }
}

.sidebar-card {
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
}

@media (max-width: 768px) {
    .consommation-content {
        padding: 0 15px;
    }
}

@media screen and (max-width: 600px) {
    .site-page .page-title h1, .site-page .page-title h2 {
        font-size: 18px;
    }
}

@media screen and (max-width: 600px) {
    .site-page .page-title p {
        font-size: 14px;
    }
}

@media screen and (max-width: 600px) {
    .section-header p {
        font-size: 14px;
        line-height: 18px;
    }
}


</style>