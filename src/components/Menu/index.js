import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

// todo componente tem que ter o nome maiúsculo
function Menu() {
    return (
        <nav className="Menu">
            <Link to="/"> 
                <img className="Logo" src={Logo} alt="AluraFlix Logo" />
            </Link>
            {/* <ButtonLink className="ButtonLink" to="/">
                Novo vídeo
            </ButtonLink> */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
