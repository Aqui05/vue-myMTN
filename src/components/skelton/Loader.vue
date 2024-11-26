<template>
    <div class="loader-container">
        <div>
            <div class="spinner"></div>
            <p class="loading-text">Veuillez patienter</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Loader',
  };
  </script>
  
  <style scoped>
  .loader-container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    left: 0;
    height: 100%;
    display: table;
    z-index: 999;
    background: #fff;
    text-align: center;
  }

  .loader-container>div {
    display: table-cell;
    vertical-align: middle;
}

  .spinner {
    margin: 0 auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 7px solid rgb(254 204 2);
    border-right: 7px solid rgb(254 204 2);
    border-bottom: 7px solid rgb(254 204 2);
    border-left: 7px solid transparent;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
}

.loader-container p {
    font-weight: bold;
    margin-top: 15px;
}

.spinner, .spinner:after {
    border-radius: 50%;
    width: 35px;
    height: 35px;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

  @keyframes load8 {
    0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
}
100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
  }
  
  .loading-text {
    margin-top: 20px;
    font-size: 1.2em;
    color: #333;
  }
  </style>
  