import React from 'react';

import './styles.css';

function DevItem({ dev, handleDeleteDev }) {
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}></img>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`http://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            <p>
                <button onClick={() => handleDeleteDev(dev._id)}>Deletar</button>
            </p>
        </li>
    );
}

export default DevItem;