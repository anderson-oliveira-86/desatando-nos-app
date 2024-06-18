import React from "react";
import psicologaOnline from '../assets/images/psicologia-online-home.jpg';
import '../assets/styles/ImageContainer.css';

const ImageContainer = () => {
    return(
        <div className="image-container">
        <div className="overlay">
            <img src={psicologaOnline} alt="psicologa-online" className="image-img" />
            <div className="text-overlay">
                <div>Atendimento Online</div>
                <div className="text-overlay-subtitle">Cuide da sua saúde mental, no conforto e segurança do seu lar.</div>
            </div>
        </div>
    </div>
    )
}

export default ImageContainer;