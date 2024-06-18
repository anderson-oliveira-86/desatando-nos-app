import React from "react";
import psicologaOnline from '../assets/images/psicologia-online-home.jpg';
import '../assets/styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="overlay">
                <img src={psicologaOnline} alt="psicologa-online" className="home-img" />
                <div className="text-overlay">
                    <div>Atendimento Online</div>
                    <div className="text-overlay-subtitle">Cuide da sua saúde mental, no conforto e segurança do seu lar.</div>
                </div>
            </div>
            <div>
                <div>Tipos de Atendimento</div>
            </div>
        </div>
    );
}

export default Home;