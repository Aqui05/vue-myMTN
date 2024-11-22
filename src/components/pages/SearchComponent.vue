<template>
    <div class="col-md-12 page-title mb-4 d-flex align-items-center" style="margin-top: 2rem;">
    <div class="input-group w-100 mb-3 position-relative">
        <input type="text" placeholder="Rechercher un service" class="form-control">
        <button type="button" class="btn search-button d-flex align-items-center text-center">
            <svg style="fill: black;
  height: 20px;
  width: 20px;" class="search-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </button>
    </div>
</div>

</template>

<script>
    export default {
        name: 'search',
    }
</script>

<style scoped>

    .col-md-12 {
        position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
    } 

    .mb-3, .my-3 {
  margin-bottom: 1rem !important;
}
.w-100 {
  width: 100% !important;
}
.position-relative {
  position: relative !important;
}
.input-group {
  position: relative;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: stretch;
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
}

    .page-title {

    }

    .mb-4, .my-4 {
  margin-bottom: 1.5rem !important;
}
.align-items-center {
  -ms-flex-align: center !important;
  -webkit-box-align: center !important;
  align-items: center !important;
}
.d-flex {
  display: -ms-flexbox !important;
  display: -webkit-box !important;
  display: flex !important;
}

.input-group > .custom-file, .input-group > .custom-select, .input-group > .form-control, .input-group > .form-control-plaintext {
  position: relative;
  -ms-flex: 1 1 auto;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;
}
input {
  height: 36px;
  border: 1px solid #6c757d !important;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: rgb(108, 117, 125);
  border-radius: 20px !important;
  padding-right: 0;
  padding-right: 38px !important;
  width: 100% !important;
  border-right: none !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
    padding-right: 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
}
button, input {
  overflow: visible;
}


.search-button, .search-button:active, .search-button:hover {
  height: 36px ;
  width: 36px ;
  padding: 0 !important;
  border: 1px solid #6c757d !important;
  border-left: 1px solid transparent;
  margin-left: -18px !important;
  position: absolute;
  right: 0;
  top: 1px;
  background-color: #fc0 !important;
  z-index: 1000 !important;
  align-content: center;
  justify-content: center;
}


.btn {
  border-radius: 30px !important;
  font-size: 14px;
  font-family: MTNBrighterSans-Medium,Century Gothic,Arial,sans-serif;
  font-weight: 500;
}

.btn {
  border-radius: 30px !important;
  font-size: 14px;
  font-family: MTNBrighterSans-Medium,Century Gothic,Arial,sans-serif;
  font-weight: 500;
  padding-left: 15px;
  padding-right: 15px;
}


</style>