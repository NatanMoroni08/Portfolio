import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/minha-foto.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Nayarisson Natan" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/NatanMoroni08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/natan-moroni" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Nayarisson Natan</h1>
          <p>Analista de Dados | Desenvolvedor de Software</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/NatanMoroni08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/natan-moroni" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;