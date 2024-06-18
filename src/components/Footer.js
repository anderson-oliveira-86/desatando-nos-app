import React from "react";
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Desatando Nós Psicologia. Atendimento psicológico online focado no seu bem-estar emocional e mental.</p>
                <p>Email: contato@desatandonos.com.br | Telefone: (11) 1234-5678</p>
                <p>Criado por <a href="https://www.aodev.com.br" target="_blank" rel="noopener noreferrer">Aodev</a></p>
            </div>
        </footer>
    );
}

export default Footer;
