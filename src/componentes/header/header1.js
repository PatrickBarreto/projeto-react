//Essa é a header
import React from 'react';
import imagem from '../../img/img.js';

function header(){
    return(
        <header>
           <figure>
                <img src={imagem("logo")} id="logo"></img>
            </figure>
            <nav>
                <ul className="services">
                    <li> Compra </li>
                    <li> Venda </li>
                    <li> Avaliação </li>
                </ul>
            </nav>
        </header>
    );
}

export default header;