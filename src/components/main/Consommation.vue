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
                <div class="iconNF">
                    <svg style="fill: black; height: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                </div>
                <span class="text-muted">Appels</span>
            <div>00:00:00</div>
                <span class="text-muted font-12">0 FCFA</span>
            </div>
        </div>
        <div class="col-md-3 col-6 infos-card text-center">
            <div>
                <div class="iconNF">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.4003 18C19.7837 17.2499 20 16.4002 20 15.5C20 12.4624 17.5376 10 14.5 10C11.4624 10 9 12.4624 9 15.5C9 18.5376 11.4624 21 14.5 21L21 21C21 21 20 20 19.4143 18.0292M18.85 12C18.9484 11.5153 19 11.0137 19 10.5C19 6.35786 15.6421 3 11.5 3C7.35786 3 4 6.35786 4 10.5C4 11.3766 4.15039 12.2181 4.42676 13C5.50098 16.0117 3 18 3 18H9.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
                <span class="text-muted">SMS</span>
                <div>
                    0
                </div>
                <span class="text-muted font-12">0 FCFA</span>
            </div>
        </div><div class="col-md-3 col-6 infos-card text-center">
            <div>
                            <div class="iconNF">
                <svg style="width: 20px; height: 20px; rotate: 90deg;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z"/></svg>
            </div>
                <span class="text-muted">Autres</span>

                <div>150 FCFA</div>
                
                <span class="text-muted font-12"></span>
                
            </div>
    </div>
    
    <div class="col-md-3 col-6 infos-card text-center">
        <div>
            <div class="iconNF">
                <svg style="width: 20px; height: 20px; rotate: 90deg;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z"/></svg>
            </div>
            <span class="text-muted">
                Internet
            </span>
            
            <div>4.03 GB</div>
            
            <span class="text-muted font-12"></span>
            
        </div>
        
    </div>
    
    <div class="col-md-12" style="">
        
        <a  
            href="/me/#/consommation/" 
            class="show-more-btn float-right" 
            target="_self">
            <span >Voir plus</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m556-258-38-39 158-158H180v-54h496L518-667l38-39 224 224-224 224Z"/></svg>
            
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


.iconNF {
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

.text-center {
    text-align: center !important;
}

.infos-card>div>div {
    font-weight: 700;
    margin-top: 5px;
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