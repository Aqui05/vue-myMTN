<template>
    <div class="main-content">
      <div class="card">
        <div class="card-header">
          <h2>Solde principal</h2>
          <div class="price">59.99 FCFA</div>
        </div>
        <div class="card-body">
          <div class="info-block">
            <div class="label">Appels</div>
            <div class="value">00:00:00</div>
            <div class="unit">0 FCFA</div>
          </div>
          <div class="info-block">
            <div class="label">SMS</div>
            <div class="value">0</div>
            <div class="unit">0 FCFA</div>
          </div>
          <div class="info-block">
            <div class="label">Autres</div>
            <div class="value">0</div>
            <div class="unit">0 FCFA</div>
          </div>
          <div class="info-block">
            <div class="label">Internet</div>
            <div class="value">4.04 GB</div>
            <div class="unit">0 FCFA</div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn">Afficher les détails</button>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>Mes souscriptions</h2>
        </div>
        <div class="card-body">
          <div class="subscription-item">
            <div class="label">INTERNET</div>
            <div class="value">2500 FCFA</div>
            <div class="info">2500F/2300Mo/20J</div>
          </div>
          <div class="subscription-item">
            <div class="label">INTERNET</div>
            <div class="value">4000 FCFA</div>
            <div class="info">4000F/3700Mo/20J</div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>Gérer ma SIM</h2>
        </div>
        <div class="card-body">
          <div class="sim-action">
            <i class="icon-info"></i>
            <span>Infos carte SIM</span>
          </div>
          <div class="sim-action">
            <i class="icon-puk"></i>
            <span>PUK</span>
          </div>
          <div class="sim-action">
            <i class="icon-internet"></i>
            <span>Activer internet</span>
          </div>
          <div class="sim-action">
            <i class="icon-internet-off"></i>
            <span>Désactiver internet</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainContent'
  }
  </script>
  
  <style scoped>
  .main-content {
    flex-grow: 1;
  }
  
  .card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .card-header {
    background-color: #f5f5f5;
    padding: 10px 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .card-header h2 {
    font-size: 16px;
    font-weight: bold;
  }
  
  .card-header .price {
    font-size: 20px;
    font-weight: bold;
    color: #4CAF50;
  }
  
  .card-body {
    padding: 20px;
  }
  
  .info-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .info-block .label {
    font-weight: bold;
  }
  
  .info-block .value {
    font-size: 18px;
  }
  
  .info-block .unit {
    color: #666;
  }
  
  .subscription-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .subscription-item .label {
    font-weight: bold;
  }
  
  .subscription-item .value {
    font-size: 18px;
    color: #4CAF50;
  }
  
  .subscription-item .info {
    color: #666;
  }
  
  .sim-action {
    display: flex;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
  }
  
  .sim-action i {
    margin-right: 10px;
  }
  </style>