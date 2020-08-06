import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
   return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/51242985?s=460&u=3304d191e9a1bf4be79d65235aa70f469d1f94c8&v=4" alt="Carol Quitério"/>
        <div>
          <strong>Carolina Quiterio</strong>
          <span>Matémtica</span>
        </div>
      </header>
    
      <p>
       Entusiasta das melhores tecnologias de Matématica avançada.
      </p>

     <footer>
        <p>
           Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="wahtsapp" />
          Entrar em contato
        </button>
     </footer>
    </article>
   );
}

export default TeacherItem;