<template>
    <div data-v-d9af3d92="">
  <div data-v-d9af3d92="" class="v-step-0">
    <div class="row">
      <div class="col-md-12">
        <div class="section-header">
          <h3 data-v-888c8962="">Forfaits</h3>
          <p class="text-muted font-weight-light">
            Sélectionner le forfait que tu souhaites activer
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div  class="col-md-3 service-card">
        <div >
          <h3  class="text-truncate">Wabaa</h3>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div  class="col-md-3 service-card">
        <div >
          <h3  class="text-truncate">Internet</h3>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div  class="col-md-3 service-card">
        <div >
          <h3  class="text-truncate">Yellow Game</h3>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div  class="col-md-3 service-card">
        <div >
          <h3  class="text-truncate">MaXi</h3>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div  class="col-md-3 service-card">
        <div >
          <h3  class="text-truncate">GoPack</h3>
          <p  class="text-muted"></p>
          <div  class="service-card-bottom">
            <button  class="btn btn-secondary ripple">
              <span  class="float-left">Afficher</span>
              <svg class="float-right" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>



<script>
  export default {
    name: 'ForfaitContent',
  };
</script>


<style>
    .row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

@media (min-width: 768px) {
    .col-md-12 {
        -ms-flex: 0 0 100%;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }
}

.section-header h3 {
    font-size: 18px;
    margin: 0;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.section-header p {
    font-size: 16px;
}

.text-muted {
    color: #6c757d !important;
}
.font-weight-light {
    font-weight: 300 !important;
}

.service-card {
    margin-bottom: 30px;
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

.service-card>* {
    background: #fff;
    padding: 15px;
    border-radius: 15px;
    overflow: hidden;
    display: block;
    position: relative;
    color: #000;
}

.service-card h3 {
    font-size: 16px;
}

.service-card h3 {
    color: #000;
}
.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.service-card p {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 18px;
}

.text-muted {
    color: #6c757d !important;
}


.service-card .service-card-bottom {
    margin-left: -15px;
    margin-right: -15px;
    margin-bottom: -15px;
}

.service-card .service-card-bottom .btn {
    vertical-align: middle;
    width: 100%;
    border-radius: 0 !important;
    font-weight: 400;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    /* flex-direction: row; */
    padding: 10px;
}

.btn, .btn>span {
    vertical-align: middle;
}

.float-left {
    float: left !important;
}

.service-card .service-card-bottom .btn i {
    font-size: 16px;
}

.float-right {
    float: right !important;
}

.ripple {
    position: relative;
    overflow: hidden;
}

.btn-secondary {
    background-color: #106887;
}
.btn-outline-secondary:hover, .btn-secondary {
    color: #fff;
    border-color: #106887;
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
}




</style>