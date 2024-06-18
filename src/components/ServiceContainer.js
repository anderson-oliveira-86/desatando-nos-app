import React from "react";
import '../assets/styles/ServiceContainer.css';

const ServiceContainer = () => {
    return (
        <div className="service-container">
            <div className="service-card">
                <h3>Atendimento Online</h3>
                <p>Oferecemos sessões de terapia online para maior comodidade e flexibilidade, permitindo que você receba suporte no conforto da sua casa.</p>
            </div>
            <div className="service-card">
                <h3>Abordagem Utilizada</h3>
                <p>Nossa equipe utiliza diversas abordagens terapêuticas, incluindo terapia cognitivo-comportamental, para atender às necessidades individuais de cada paciente.</p>
            </div>
            <div className="service-card">
                <h3>Bem Estar</h3>
                <p>Promovemos o bem-estar emocional e mental através de técnicas de relaxamento, mindfulness e práticas de autocuidado.</p>
            </div>
        </div>
    );
}

export default ServiceContainer;
