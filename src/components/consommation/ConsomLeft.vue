<template>
    <div class="col-md-9 order-md-first order-last">
      <!-- Tab Navigation -->
      <ul role="tablist" class="nav nav-tabs v-step-0">
        <li role="presentation" class="nav-item">
            <button
                class="tab-button nav-link"
                :class="{ active: activeTab === 'products' }"
                @click="activeTab = 'products'"
            >
                Produits & services
            </button>
        
        </li>
        <li role="presentation" class="nav-item">
            <button
                class="tab-button nav-link"
                :class="{ active: activeTab === 'internet' }"
                @click="activeTab = 'internet'"
            >
                Internet
            </button>
        </li>
    </ul>


    <div class="tab-content">
      <div class="tab-pane" v-if="activeTab === 'products'">
        <div id="myTabContent" class="tab-content">
            <div id="products" role="tabpanel" aria-labelledby="products-tab" class="tab-pane fade show">
                <div class="card-box d-flex align-items-center justify-content-center px-0 mt-4">
                    <div class="h-100 w-100">
                        <div class="pt-3 pb-4 px-4 d-flex justify-content-end">
                            <button class="btn btn-primary download d-flex align-items-center py-2">
                                <span>Télécharger en PDF</span>
                            </button></div>
                            
                            <div class="bill-details-wrapper">
                                <div id="last-update" class="py-4 fw-bold"> Dernière mise à jour le <span class="text-capitalize"> mardi 12 novembre 2024 23:55 </span>
                                </div>
                                <div id="produits-services">
                                    <div class="header-arr line w-100 d-flex justify-content-center"> 12 nov. 2024 

                                    </div>
                                    <table id="table" class="table table-striped bill-details-table">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th scope="col" class="w-20">Service</th>
                                                <th scope="col" class="w-20">Heure</th>
                                                <th scope="col" class="w-20">Coût</th>
                                                <th scope="col" class="w-40">Détails</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Forfait Internet</td>
                                                <td> 08:27:26 </td>
                                                <td>150FCFA</td>
                                                <td>
                                                    <div>-</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div class="tab-pane" v-if="activeTab === 'internet'">
        <div id="myTabContent" class="tab-content">
            <div id="products" role="tabpanel" aria-labelledby="products-tab" class="tab-pane fade show">
                <div class="card-box d-flex align-items-center justify-content-center px-0 mt-4 internet">
                    <div class="h-100 w-100">
                        <div class="pt-3 pb-4 px-4 d-flex justify-content-end">
                            <button class="btn btn-primary download d-flex align-items-center py-2 mb-3" style="margin-bottom: 1rem">
                                <span >Télécharger en PDF</span>
                            </button>
                        </div>
                        <div class="bill-details-wrapper">
                            <div class="header-arr line w-100 d-flex justify-content-center"> Total des consommations: 4083.25 MB </div>
                            <table class="table table-striped bill-details-table internet">
                                <thead class="thead-dark">
                                    <tr>
                                        <th >Services</th>
                                        <th >Consommation</th>
                                    </tr>
                                </thead>    
                            <tbody>
                                <tr>
                                    <td class="service d-flex align-items-center text-truncate">
                                        <img src="https://my.mtn.bj/aws/icons_s/HTTPS.png" alt="" class="icon">
                                        <span>HTTPS</span>
                                    </td>
                                    <td>581.56 MB</td>
                                </tr>
                                <tr>
                                    <td class="service d-flex align-items-center text-truncate">
                                        <img src="https://my.mtn.bj/aws/icons_s/whatsapp.png" alt="" class="icon">
                                        <span>WhatsApp</span>
                                    </td>
                                    <td>465.55 MB</td>
                                </tr>
                                <tr>
                                    <td class="service d-flex align-items-center text-truncate">
                                        <img src="https://my.mtn.bj/aws/icons_s/linewebtoon.png" alt="" class="icon">
                                        <span>LineWebtoon</span>
                                    </td>
                                    <td>184.29 MB</td>
                                </tr>
                            </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
        </div>    
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
 .nav-tabs .nav-link.active {
    color: #000 !important;
    font-weight: 500 !important;
}

.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    border: none !important;
    background: transparent !important;
}
.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}
.nav-tabs .nav-link {
    border: none;
    color: #000;
    position: relative;
    padding-left: 0;
    padding-right: 0;
    margin-right: 40px;
    background: transparent !important;
}
.nav-tabs .nav-link {
    margin-bottom: -1px;
    background-color: transparent;
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.nav-link {
    display: block;
    padding: .5rem 1rem;
}
[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}
button, input, optgroup, select, textarea {
    font-family: inherit;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-size: inherit;
    line-height: inherit;
}
button {
    border-radius: 0;
}

 .nav-tabs {
    border-bottom: 1px solid #dee2e6 !important;
    padding-bottom: 10px;
    padding-top: 10px;
}

.nav-tabs {
    border-bottom: 1px solid #dee2e6;
}
.nav {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
dl, ol, ul {
    margin-top: 0;
}
address, dl, ol, ul {
    margin-bottom: 1rem;
}

.nav-tabs .nav-item {
    margin-right: 15px !important;
    margin-bottom: -1px !important;
}
  
.bill-details-table td, .bill-details-table th {
    border-top: none;
}

.table td, .table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}
.table:nth-last-of-type(odd) tr[data-v-60f42554] {
    border-bottom: 0 solid transparent !important;
}

.bill-details-table tbody tr:nth-of-type(odd) {
    background-color: #f2f2f2;
}
.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .05);
}
#last-update {
    font-size: 14px !important;
    line-height: 120%;
    padding-left: 24px;
    padding-right: 24px;
    font-weight: 500 !important;
}
  .tab-button {
    background-color: #f1f1f1;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
  }
  
  .tab-pane.active {
    display: block;
  }

  .tab-content>.active {
    display: block;
}

.fade {
    -webkit-transition: opacity .15s linear;
    transition: opacity .15s linear;
}


.card-box {
    min-height: 250px !important;
    margin-bottom: 60px !important;
    border: 1px solid #dee2e6 !important;
}

.card-box {
    background: #fff;
    border-radius: 16px;
    padding: 15px;
    overflow: hidden;
}
.pl-0, .px-0 {
    padding-left: 0 !important;
}
.pr-0, .px-0 {
    padding-right: 0 !important;
}
.mt-4, .my-4 {
    margin-top: 1.5rem !important;
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
.d-flex {
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: flex !important;
}

.h-100 {
    height: 100% !important;
}

.w-100 {
    width: 100% !important;
}

.pl-4, .px-4 {
    padding-left: 1.5rem !important;
}

.pb-4, .py-4 {
    padding-bottom: 1.5rem !important;
}
.pr-4, .px-4 {
    padding-right: 1.5rem !important;
}
.pt-3, .py-3 {
    padding-top: 1rem !important;
}
.justify-content-end {
    -ms-flex-pack: end !important;
    -webkit-box-pack: end !important;
    justify-content: flex-end !important;
}
.d-flex {
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: flex !important;
}

.btn-primary {
    color: #000;
    border: none;
    background-color: #fc0;
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
.pb-2, .py-2 {
    padding-bottom: .5rem !important;
}
.pt-2, .py-2 {
    padding-top: .5rem !important;
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

.bill-details-wrapper {
    margin: -15px;
}

#last-update {
    font-size: 14px !important;
    line-height: 120%;
    padding-left: 24px;
    padding-right: 24px;
    font-weight: 500 !important;
}

.pb-4, .py-4 {
    padding-bottom: 1.5rem !important;
}
.pt-4, .py-4 {
    padding-top: 1.5rem !important;
}

.text-capitalize {
    text-transform: capitalize !important;
}

.header-arr {
    background: #fc0 !important;
    padding: 10px 15px;
}

.line {
    padding: .75rem;
}

.table {
    background: #fff !important;
}

.table-striped {
    background-color: rgba(0, 0, 0, .05) !important;
}
.table-striped {
    background-color: rgba(0, 0, 0, .05) !important;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.table:nth-last-of-type(odd) tr {
    border-bottom: 0 solid transparent !important;
}

.bill-details-table tbody tr:nth-of-type(odd) {
    background-color: #f2f2f2;
}
.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .05);
}

.bill-details-table tr td:first-child, .bill-details-table tr th:first-child {
    padding-left: 30px;
}
.bill-details-table td, .bill-details-table th {
    border-top: none;
}
.table td, .table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}
td {
    vertical-align: middle !important;
}


.table {
    display: table;
    border-collapse: collapse;
    width: 100% !important;
    font-size: 15px !important;
}
.bill-details-table {
    margin: 0;
}
.table {
    width: 100%;
    color: #212529;
}
table {
    border-collapse: collapse;
}

.table:nth-last-of-type(odd) tr{
    border-bottom: 0 solid transparent !important;
}

.table .thead-dark th {
    background-color: #343a40;
    border-color: #454d55;
    color: #fff !important;
}

.bill-details-table tr td:first-child, .bill-details-table tr th:first-child {
    padding-left: 30px;
}
.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
}
.table .thead-dark th {
    color: #fff;
    background-color: #343a40;
    border-color: #454d55;
}
.w-20 {
    width: 20%;
}
.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
}
.bill-details-table td, .bill-details-table th {
    border-top: none;
}
.table td, .table th {
    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}
th {
    text-align: inherit;
    text-align: -webkit-match-parent;
}

.table thead th{
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
}

.bill-details-table tr td:last-child, .bill-details-table tr th:last-child {
    padding-right: 30px;
}

.icon {
    width: 28px !important;
    border-radius: 50% !important;
    margin-right: 4px !important;
}

img, svg {
    vertical-align: middle;
}
img {
    border-style: none;
}


  </style>