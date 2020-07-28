import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

// todo componente tem que ter o nome maiúsculo
function Menu() {
    return (
        <nav className="Menu">
            <a href="/"> 
                <img className="Logo" src={Logo} alt="AluraFlix Logo" />
            </a>
            {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
