import React from  'react';
import '../../css/Main.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Moses from '../../../public/assets/picture/walk_quadrada.png'

function Main() {
    return (
        <div className="welcome">
            <h2 id='welcomeTitle'>Sejam Bem-Vindos</h2>
            <div className="divisionUp"></div>
            <p id="welcome-text">
                Olá! Que a paz do Senhor Jesus esteja com você. Este site foi criado com o propósito de ser mais um canal para compartilhar a Palavra de Deus. Que, por meio dele, você possa aprender mais e conhecer melhor os ensinamentos que o Senhor nos deixou.
            </p>
            <div className="divisionDown"></div>

            <div className="verse">
                <p id='verseParagraph'>
                    Medita estas coisas, ocupa-te nelas, para que o teu aproveitamento seja manifesto a todos.
                </p>

                <h3 id='timothy'>
                    1 Timóteo 4:15
                </h3>
            </div>

            <div className="explore">
                <img  
                   src={Moses}
                   id='moses'
                />
                <div className="theBibleWay">
                   <h2 id='knowAboutTheBible'>Conheça um pouco mais sobre o povo de Deus</h2>
                    <p id='copyTheWord'>
                     Entenda a Palavra de Deus de uma forma diferente. Explore a fundo cada palavra escrita na Bíblia.
                    </p>
                <Link to=""
                  id='goOn'                  
                >
                 Explore<FontAwesomeIcon icon={faArrowRight}/>
                </Link>

                <div className="psalm">
                    <p>
                        Desvenda os meus olhos, para que eu contemple as maravilhas da tua lei.
                    </p>

                    <h3>
                        Salmos 119:18
                    </h3>
                </div>
            </div>  
            </div>
        </div>
    )
}


export default Main 