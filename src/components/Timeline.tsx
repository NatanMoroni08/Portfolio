import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="career">
      <div className="items-container">
        <h1>Experiência Profissional</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="dez 2025 - presente"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistente de Dados</h3>
            <h4 className="vertical-timeline-element-subtitle">Diefra Engenharia e Consultoria Ltda, Belo Horizonte, MG</h4>
            <p>
              Contabilidade gerencial e Arquitetura de dados.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="jul 2025 - dez 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Estagiário em Análise de Dados</h3>
            <h4 className="vertical-timeline-element-subtitle">Diefra Engenharia e Consultoria Ltda, Belo Horizonte, MG</h4>
            <p>
              Inteligência de negócios (BI), Planejamento estratégico e análise de dados para apoiar a tomada de decisão.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="fev 2023 - jul 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistente Administrativo</h3>
            <h4 className="vertical-timeline-element-subtitle">Imovi Consultoria Imobiliária, Espírito Santo, Brasil</h4>
            <p>
              Suporte em rotinas administrativas, organização de documentos e atendimento ao cliente.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;