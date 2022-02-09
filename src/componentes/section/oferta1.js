import React ,{useState} from 'react';
import Imagem from '../../img/img.js';
import './style-section.css';



function modelos(){
    return(
        <div id="modelos">
            <div class="modelo">
                <img src={Imagem("Lamborghini")} alt="carro"></img>
                <div>
                    <p>0kx</p>
                    <p>2020</p>
                </div>
                <div><h4>Lamborghini</h4></div>
                <div>{5000000}</div>
            </div>

            <div class="modelo">
                <img src={Imagem("Ferrari")} alt="carro"></img>
                <div>
                    <p>0kx</p>
                    <p>2020</p>
                </div>
                <div><h4>Ferrari</h4></div>
                <div>{5000000}</div>
            </div>

            <div class="modelo">
                <img src={Imagem("Porshe")} alt="carro"></img>
                <div>
                    <p>0kx</p>
                    <p>2020</p>
                </div>
                <div><h4>Porshe</h4></div>
                <div>{5000000}</div>
            </div>

            <div class="modelo">
                <img src={Imagem("Fusca")} alt="carro"></img>
                <div>
                    <p>0kx</p>
                    <p>2020</p>
                </div>
                <div><h4>Fusca</h4></div>
                <div>{5000000}</div>
            </div>

            <div class="modelo">
                <img src={Imagem("Tesla")} alt="carro"></img>
                <div>
                    <p>0kx</p>
                    <p>2020</p>
                </div>
                <div><h4>Tesla</h4></div>
                <div>{5000000}</div>
            </div>

            <div class="modelo">
                <img src={Imagem("Volvo")} alt="carro"></img>
                <div>
                    <p>0kx</p>
                    <p>2020</p>
                </div>
                <div><h4>Volvo</h4></div>
                <div>{5000000}</div>
            </div>

            <div class="modelo">
                <img src={Imagem("Audi")} alt="carro"></img>
                <div>
                    <p>0kx</p>
                    <p>2020</p>
                </div>
                <div><h4>Audi</h4></div>
                <div>{5000000}</div>
            </div>

        </div>
    );
}

function Oferta(){
    return(
        <section>
            <div>
                <h3>Últimas Ofertas</h3>
            </div>
            {modelos()}
        </section>

    );
}

function Sorteio(){
    const [numeroSorte, alterarNumero] = useState(1);

    function Alertar(novoNumero) {
        if (novoNumero == 555){
            alert("Você conseguiu")
        }
    }
    function Sortear () { // Essa função poderia ser importada de outro componente.
        const novoNumero = Math.floor(Math.random()*1000);
        alterarNumero(novoNumero);
        Alertar(novoNumero);

    }

    return(
        <section className="areaSessao">
            <div id="sorteio">
                <div className="areaTexto">
                    <h2>Se você acertar o número 555 um dos carros é seu. </h2>
                    <small> é brincadeira </small>
                </div>
                <div className="areaNumero">
                    <h3>{numeroSorte}</h3>
                </div>
                <div className="areaBtn">
                    <button className="sortear" onClick={Sortear}> Sortear </button>
                </div>
            </div>
        </section>
    )
}

export {Oferta, Sorteio}