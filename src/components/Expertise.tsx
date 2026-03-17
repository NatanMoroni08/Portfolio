import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "Java",
    "Spring Boot",
    "HTML",
    "CSS",
    "Bootstrap",
];

const labelsSecond = [
    "Power BI",
    "DAX",
    "Power Query",
    "SQL",
    "MySQL",
    "SQL Server",
    "Excel",
    "ETL",
];

const labelsThird = [
    "Python",
    "Pandas",
    "Numpy",
    "Streamlit",
    "Docker",
    "Git",
    "GitHub",
    "Power Automate",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Habilidades</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Desenvolvimento de Software</h3>
                    <p>Desenvolvedor com experiência em frontend e backend, atuando na criação de interfaces modernas com React e TypeScript, além do desenvolvimento de APIs robustas utilizando Java e Spring Boot.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tecnologias:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3>Análise de Dados e Business Intelligence</h3>
                    <p>Focado na construção de soluções analíticas, atuo desde a modelagem e integração de dados (ETL) até a criação de dashboards gerenciais no Power BI, utilizando DAX para métricas complexas e apoiando a tomada de decisão.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tecnologias:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Ferramentas e Automação</h3>
                    <p>Utilizo ferramentas modernas para otimizar o fluxo de trabalho, incluindo Git para versionamento de código, Docker para containerização de aplicações e Python para automação de processos e análise de dados.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tecnologias:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;