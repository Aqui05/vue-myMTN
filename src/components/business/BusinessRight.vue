<template>
    <div class="col-12 col-lg-8" style="padding: 0px;">
  <div  class="b2b-details-box">
    <!-- Header for Liste des factures -->
    <div  class="b2b-details-box-header">
      <div  class="d-flex justify-content-between">
        <div >
          <h2  class="font-bold mb-0">Liste des factures</h2>
          <p  class="m-0 font-12">
            Veuillez cocher les factures que vous souhaitez payer
          </p>
        </div>
      </div>
    </div>
    <!-- Content for Liste des factures -->
    <div >
      <div >
        <div   class="py-4 text-center">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M170-74q-57.12 0-96.56-39.44Q34-152.88 34-210v-152h316v85h260v-85h316v152q0 57.12-39.44 96.56Q847.13-74 790-74H170Zm270-293v-80h80v80h-80ZM34-452v-157q0-57.13 39.44-96.56Q112.88-745 170-745h108v-80q0-57.13 39.44-96.56Q356.88-961 414-961h132q57.13 0 96.56 39.44Q682-882.13 682-825v80h108q57.13 0 96.56 39.44Q926-666.13 926-609v157H610v-85H350v85H34Zm380-293h132v-80H414v80Z"/></svg>
            <div class="px-2 message"> 
            Aucune facture disponible
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
      </div>
    </div>
    <!-- Content for Mini relevé de compte -->
    <div>
      <div>
        <div  class="py-4 text-center">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M170-74q-57.12 0-96.56-39.44Q34-152.88 34-210v-152h316v85h260v-85h316v152q0 57.12-39.44 96.56Q847.13-74 790-74H170Zm270-293v-80h80v80h-80ZM34-452v-157q0-57.13 39.44-96.56Q112.88-745 170-745h108v-80q0-57.13 39.44-96.56Q356.88-961 414-961h132q57.13 0 96.56 39.44Q682-882.13 682-825v80h108q57.13 0 96.56 39.44Q926-666.13 926-609v157H610v-85H350v85H34Zm380-293h132v-80H414v80Z"/></svg>
          <div  class="px-2 message">
            Aucune relevé disponible
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
  }
</script>


<style scoped>
 .sidebar-card[data-v-f893c5d8] {
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

.b2b-overlay-content-mini[data-v-0b32a0a4] {
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

</style>