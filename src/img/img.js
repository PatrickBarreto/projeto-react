import React from 'react';

    function imagem(nome){
        switch (nome){
        case "logo":
            return ("https://pitstopbrasil.files.wordpress.com/2009/08/infiniti-m.jpg");
            break;
        case "Lamborghini":
            return ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-6apRy7783terjItEegQaY6r3QHv9R6s3K709wl7nH4eErgovZIS9Ccv9Y3yrCQjeEU&usqp=CAU");
            break;
        case "Ferrari":
            return ("https://carroscomcamanzi.com.br/wp-content/uploads/2020/06/Ferrari-F8_Tributo-2020-1600-01.jpg");
            break;
        case "Porshe":
            return ("https://www.planetcarsz.com/assets/uploads/2017/10/PORSCHE%20911%20CARRERA%20T%202018%200006.jpg");
            break;            
        case "Fusca":
            return ("https://www.maxicar.com.br/wp-content/uploads/2019/10/AG-202-Foto-00.jpg");
            break;            
        case "Tesla":
            return ("https://s2.glbimg.com/bWTVV8p63gBSPcqgQiSMFtrDyl0=/0x0:1158x817/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/0/L/sQh3YxRL6dI0Tuht7tKw/tesla-model-s-2017-dianteira-movimento.jpg");
            break;            
        case "Volvo":
            return ("https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/24073356/XC40-lado-1160x585.jpg");
            break;            
        case "Audi":
            return ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ySZ1NBUYacnPlSi6wavcpb6LruHhjMLXbGsGXSnUnMUxkPNhXRtMZF_PpU7Bx7YNl58&usqp=CAU");
            break;            
        }
    }

export default imagem