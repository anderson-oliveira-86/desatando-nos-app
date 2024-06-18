import React from "react";
import CardImageAnsiedade from '../assets/images/ansiedade.jpg'
import CardImageDepressao from "../assets/images/depressao.jpg";
import CardImageEstresse from "../assets/images/estresse.jpg";
import CardImageNovoTema from "../assets/images/angustia.jpg";
import '../assets/styles/ArticleContainer.css';

const ArticleContainer = () => {
    return (
        <div className="article-container">
            <h2 className="article-title">Artigos</h2>
            <p className="article-description">
                Atendimento de adultos, adolescentes e idosos. Pessoa que esteja passando por qualquer momento difícil ou de sofrimento psicológico. O acompanhamento psicanalítico ajuda a pessoa que sente desconforto psicológico, que repete comportamentos que acabam por causar sofrimento. Alguns dos principais temas:
            </p>
            <div className="article-cards">
                {/* Card 1: Depressão */}
                <div className="article-card">
                    <img src={CardImageDepressao} alt="Imagem Depressão" className="card-image" />
                    <div className="article-text">
                        <h3>Depressão</h3>
                        <p>A psicanálise ajuda a desvendar as angústias que causam a depressão, possibilitando a construção de uma vida com mais significado e felicidade.</p>
                        <a href="/artigo-depressao" className="btn-read-more">Ler mais</a>
                    </div>
                </div>

                {/* Card 2: Ansiedade */}
                <div className="article-card">
                    <img src={CardImageAnsiedade} alt="Imagem Ansiedade" className="card-image" />
                    <div className="article-text">
                        <h3>Ansiedade</h3>
                        <p>Na terapia, tratamos as raízes inconscientes dos conflitos internos que causam ansiedade, possibilitando um alívio no sofrimento e uma vida mais tranquila e equilibrada.</p>
                        <a href="/artigo-ansiedade" className="btn-read-more">Ler mais</a>
                    </div>
                </div>

                {/* Card 3: Estresse */}
                <div className="article-card">
                    <img src={CardImageEstresse} alt="Imagem Estresse" className="card-image" />
                    <div className="article-text">
                        <h3>Estresse</h3>
                        <p>Para quem se sente em um mar tempestuoso, onde a angústia toma o leme e a sensação de cansaço te afoga em um oceano de dúvidas e medos.</p>
                        <a href="/artigo-estresse" className="btn-read-more">Ler mais</a>
                    </div>

                </div>

                {/* Card 4: Angustia */}
                <div className="article-card">
                    <img src={CardImageNovoTema} alt="Imagem Angústia" className="card-image" />
                    <div className="article-text">
                        <h3>Angústia</h3>
                        <p>Um mal-estar difícil de colocar em palavras, uma dúvida que nos consome ou um pensamento que aparece trazendo sofrimento.</p>
                        <a href="/artigo-estresse" className="btn-read-more">Ler mais</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleContainer;
