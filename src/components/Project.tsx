import React from "react";
import mock01 from '../assets/images/mock01.png'; // Placeholder, substitua pela imagem do seu projeto
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projetos Pessoais</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/NatanMoroni08" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="Painel de Vôlei" width="100%"/></a>
                <a href="https://github.com/NatanMoroni08" target="_blank" rel="noreferrer"><h2>Painel de Análise de Scouts de Vôlei</h2></a>
                <p>Dashboard interativo no Power BI para análise de desempenho técnico e tático, com KPIs por jogador, set e partida. Utiliza conceitos de Data Storytelling e UX para BI.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;