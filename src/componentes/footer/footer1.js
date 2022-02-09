import React from 'react';
import imagem from '../../img/img.js';

function footer1 (){
    return(
        <footer>
            <figure>
                <img src={imagem("logo")} id="logo"></img>
                <figcaption> Revenda, refinancie ou compre seu carro novo  </figcaption>
            </figure>
            <nav>
                <ul className="services">
                    <li> Compra 
                        <ul>
                            <li>
                                Novos
                            </li>
                            <li>
                                Usados
                            </li>
                        </ul>
                    </li>
                    <li> Venda
                        <ul>
                            <li>
                                Novos
                            </li>
                            <li>
                                Usados
                            </li>
                        </ul>
                    </li>
                    <li> Avaliação </li>
                </ul>
            </nav>
        </footer>
    );
}

export default footer1;