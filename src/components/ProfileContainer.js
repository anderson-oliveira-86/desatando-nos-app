import React from "react";
import profilePamela from '../assets/images/pamela-profile.jpeg';
import profileMayara from '../assets/images/mayara-profile.jpeg';
import '../assets/styles/ProfileContainer.css';

const ProfileContainer = () => {
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-info">
                    <h2>Pamela Cristina Rosa</h2>
                    <p>Pamela é psicóloga clínica com mais de 10 anos de experiência. Especialista em terapia cognitivo-comportamental, ela ajuda pacientes a superar desafios emocionais e desenvolver estratégias eficazes para lidar com o estresse e a ansiedade.</p>
                    <div className="profile-buttons">
                        <button>Contato</button>
                        <button>Mais Detalhes</button>
                    </div>
                </div>
                <img src={profilePamela} alt="Pamela Cristina Rosa" className="profile-image" />
            </div>
            <div className="profile-card">
                <div className="profile-info">
                    <h2>Mayara Ramiro</h2>
                    <p>Mayara é psicóloga formada pela Universidade de São Paulo, com pós-graduação em psicologia infantil. Ela trabalha com crianças e adolescentes, oferecendo apoio em questões de desenvolvimento emocional e social.</p>
                    <div className="profile-buttons">
                        <button>Contato</button>
                        <button>Mais Detalhes</button>
                    </div>
                </div>
                <img src={profileMayara} alt="Mayara Ramiro" className="profile-image" />
            </div>
        </div>
    );
}

export default ProfileContainer;
