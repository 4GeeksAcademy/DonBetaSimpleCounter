//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';




// include your styles into the webpack bundle
import "../styles/index.css";

function SecondCounter(props){
    return(<div className="Bloque">
        <div className="Reloj"> 
            <i class="far fa-clock"></i>
        </div>
        <div className="FourIzquierda">{props.NumeroFour %10}</div>
        <div className="Three">{props.NumeroThree %10}</div>
        <div className="Two">{props.NumeroTwo %10}</div>
        <div className="OneDerecha">{props.NumeroOne %10}</div>
        
    </div>);
}

SecondCounter.PropTypes ={
    NumeroFour: PropTypes.number,
    NumeroThree: PropTypes.number,
    NumeroTwo: PropTypes.number,
    NumeroOne: PropTypes.number
} ;
let counter = 0;
setInterval(function(){
    const FourIzquierda = Math.floor(counter / 1000);
    const Three = Math.floor(counter / 100);
    const Two = Math.floor(counter / 10);
    const OneDerecha = Math.floor(counter / 1);
    console.log(FourIzquierda, Three, Two, OneDerecha);
//render your react application
    counter++;
ReactDOM.render(<SecondCounter NumeroOne={OneDerecha} NumeroTwo={Two} NumeroThree={Three} NumeroFour={FourIzquierda} />,
 document.querySelector("#app"));


},1000);
