<template>
    <div class="row site-page v-step-0">
            <div class="col-md-12" style="">
            <div class="section-header page-title title1">
                <h1 data-v-aaf95958="">Ma consommation</h1>
                <p class="text-muted font-weight-light">
                    Consommation sur les sept derniers jours
                </p>
            </div>
        </div>
        <div class="col-md-3 col-6 infos-card text-center NumCard1">
            <div>
                <i class="kgk-mtn-BW_Icons_MyMTN_Voice_4"></i>
                <span class="text-muted">Appels</span>
                <div >00:00:00</div>
                <span class="text-muted font-12">0 FCFA</span>
            </div>
        </div>
        <div class="col-md-3 col-6 infos-card text-center">
            <div>
                <i class="kgk-mtn-BW_Icons_MyMTN_SMS_4"></i>
                <span class="text-muted">SMS</span>
                <div>0</div>
                <span class="text-muted font-12">0 FCFA</span>
            </div>
        </div><div class="col-md-3 col-6 infos-card text-center">
            <div>
                <i class="kgk-mtn-BW_Icons_MTNPlay_Social_4"></i>
                <span class="text-muted">Autres</span>
                <div>0 FCFA</div>
                <span class="text-muted font-12"></span>
            </div>
    </div>
    
    <div class="col-md-3 col-6 infos-card text-center">
        <div>
            <i class="kgk-mtn-BW_Icons_MyMTN_Data_4"></i>
            <span class="text-muted">Internet</span>
            <div>1.17 GB</div>
            <span class="text-muted font-12"></span>
        </div>
    </div>
    
    <div class="col-md-12" style="">
        
        <a  
            href="/me/#/consommation/" 
            class="show-more-btn float-right" 
            target="_self">
            <span >Voir plus</span>
            <i class="mdi mdi-arrow-right"></i> 
        </a>
        
    </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Consommation'
    }
</script>


<style scoped>
@media screen and (min-width: 600px) {
 .title1 {
    margin-left: 5px;
 }
}


.row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    width: 100%;
}



    .site-page .page-title h1, .site-page .page-title h2 {
    font-size: 24px;
    margin: 0;
}

h1, h2, h3, h4, h5, strong {
    font-weight: 700;
}

.section-header p {
    font-size: 16px;
}

.font-weight-light {
    font-weight: 300 !important;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

.text-muted {
    color: #6c757d !important;
}

.section-header p {
    font-size: 16px;
}


.infos-card {
    margin-bottom: 15px;
}


.col-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    padding-right: 15px;
    padding-left: 15px;
}


.text-center {
    text-align: center !important;
}


.infos-card>div {
    height: 160px;
    background: #fff;
    border-radius: 8px;
    padding: 30px;
}

.infos-card>div span {
    font-size: 14px;
    display: block;
}

.text-center {
    text-align: center !important;
}

.infos-card>div>div {
    font-weight: 700;
    margin-top: 5px;
}

.infos-card i {
    background: #fff2bf;
    color: #000;
    width: 32px;
    display: block;
    height: 32px;
    margin: 0 auto;
    border-radius: 50%;
    line-height: 32px;
    font-size: 22px;
}

.infos-card>div span {
    font-size: 14px;
    display: block;
}

.font-12 {
    font-size: 12px !important;
}


@media (min-width: 768px) {
    .col-md-12 {
        -ms-flex: 0 0 100%;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
    }
}

    .show-more-btn {
    display: inline-block;
    margin: 10px 0 0 0;
    font-size: 14px;
}

.float-right {
    float: right !important;
}
a {
    color: #106887;
}
a, a:hover {
    text-decoration: none;
}

.show-more-btn>* {
    display: inline-block;
    vertical-align: middle;
}

.show-more-btn>svg {
    font-size: 18px;
    margin-left: 5px;
    fill: #106887;
}

@media (min-width: 768px) {
    .col-md-3 {
        -ms-flex: 0 0 25%;
        -webkit-box-flex: 0;
        flex: 0 0 25%;
        max-width: 25%;
        padding-right: 15px;
        padding-left: 15px;
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