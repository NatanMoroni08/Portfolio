import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/NatanMoroni08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/natan-moroni" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Desenvolvido por Nayarisson Natan com 💜</p>
    </footer>
  );
}

export default Footer;