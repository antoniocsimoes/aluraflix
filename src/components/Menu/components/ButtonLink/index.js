import React from 'react';

// todo componente tem que ter o nome maiúsculo
function ButtonLink(props) {
    //props => { className: "o que alguém passar", href: "/" }
    console.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;
