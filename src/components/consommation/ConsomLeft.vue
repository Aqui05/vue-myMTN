<template>
    <div class="col-md-9 order-md-first order-last">
      <!-- Tab Navigation -->
      <div class="tabs">
      <button
        class="tab-button"
        :class="{ active: activeTab === 'products' }"
        @click="activeTab = 'products'"
      >
        Produits & services
      </button>
      <button
        class="tab-button"
        :class="{ active: activeTab === 'internet' }"
        @click="activeTab = 'internet'"
      >
        Internet
      </button>
    </div>

    <div class="tab-content">
      <div class="tab-pane" v-if="activeTab === 'products'">
        <h1>HYOS</h1>
      </div>
      <div class="tab-pane" v-if="activeTab === 'internet'">
        <h1>FF.K</h1>
        <h2>KIK?KJIJFDIJIJI </h2>
      </div>
    </div>
    </div>
  </template>
  
  <script>
        export default {
            name:'ConsomLeft',
            data() {
            return {
                activeTab: 'products'
            };
            }
        };

  </script>
  
  <style>

    .tabs {
        display: flex;
        border-bottom: 1px solid #ddd;
    }
  
  .tab-button {
    background-color: #f1f1f1;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
  }
  
  .tab-button.active {
    background-color: #ccc;
  }
  
  .tab-content {
    padding: 20px;
  }
  
  .tab-pane {
    display: none;
  }
  
  .tab-pane.active {
    display: block;
  }
  </style>