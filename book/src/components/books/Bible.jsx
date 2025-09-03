import React from 'react';
import '../../css/Bible.css'
import Navbar from '../../components/pages/Navbar'
import Footer from '../pages/Footer'
import { Link } from 'react-router-dom';

function Bible() {
    return (
        <>
         <Navbar />

         <div className="bibleBooks">
            <div className="oldBooks">
                <h2 id='antigoTestamento'>Antigo Testamento</h2>
                <div className="booksName">
                    <tr className="pentateuco">
                        <td>
                            <Link to="" className='bibleOldBooks' id='gen'>Gênesis</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='ex'>Êxodo</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='lev'>Levítico</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='num'>Números</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='deut'>Deuteronômio</Link>
                        </td>
                    </tr>
                </div>

                <div className="booksName">
                    <tr className="historico">
                        <td>
                            <Link to="" className='bibleOldBooks' id='jos'>Josué</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='jui'>Juízes</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='rut'>Rute</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='ISamuel'>1 Samuel</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='IISamuel'>2 Samuel</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='IReis'>1 Reis</Link>
                        </td>
                    </tr>
                </div>

                <div className="booksName">
                    <tr className="historico">
                        <td>
                            <Link to="" className='bibleOldBooks' id='IIReis'>2 Reis</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='ICro'>1 Crônicas</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='IICro'>2 Crônicas</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='esd'>Esdras</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='neem'>Neemias</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='est'>Ester</Link>
                        </td>
                    </tr>
                </div>

                <div className="booksName">
                    <tr className="poeticos">
                        <td>
                            <Link to="" className='bibleOldBooks' id='jo'>Jó</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='sal'>Salmos</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='prov'>Provérbios</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='ecl'>Eclesiastes</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='cc'>Cântico dos Cânticos</Link>
                        </td>
                    </tr>
                </div>

                <div className="booksName">
                    <tr className="profeticos">
                        <td>
                            <Link to="" className='bibleOldBooks' id='isa'>Isaías</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='jer'>Jeremias</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='lam'>Lamentações</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='ezeq'>Ezequiel</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='dan'>Daniel</Link>
                        </td>
                    </tr>
                </div>

                <div className="booksName">
                    <tr className="profeticos">
                        <td>
                            <Link to="" className='bibleOldBooks' id='ose'>Oséias</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='joe'>Joel</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='amo'>Amós</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='oba'>Obadias</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='jon'>Jonas</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='miq'>Miquéias</Link>
                        </td>
                    </tr>
                </div>

                <div className="booksName">
                    <tr className="profeticos">
                        <td>
                            <Link to="" className='bibleOldBooks' id='nau'>Naum</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='hab'>Habacuque</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='sof'>Sofonias</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='age'>Ageu</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='zaq'>Zacarias</Link>
                        </td>
                        <td>
                            <Link to="" className='bibleOldBooks' id='mala'>Malaquias</Link>
                        </td>
                    </tr>
                </div>
            </div>
         </div>

         <div className="bibleNewBooks">
            <div className="newBooks">
                <h2>Novo Testamento</h2>
              <div className="booksName">
                 <tr className="evangelhos">
                    <td>
                        <Link to="">Mateus</Link>
                    </td>
                    <td>
                        <Link to="">Marcos</Link>
                    </td>
                    <td>
                        <Link to="">Lucas</Link>
                    </td>
                    <td>
                        <Link to="">João</Link>
                    </td>
                 </tr>
              </div>

              <div className="booksName">
                 <tr className="cartas">
                    <td>
                        <Link to="">Romanos</Link>
                    </td>
                    <td>
                        <Link to="">1 Coríntios</Link>
                    </td>
                    <td>
                        <Link to="">2 Críntios</Link>
                    </td>
                    <td>
                        <Link to="">Gálatas</Link>
                    </td>
                    <td>
                        <Link to="">Efésios</Link>
                    </td>
                    <td>
                        <Link to="">Filipenses</Link>
                    </td>
                 </tr>
              </div>

              <div className="booksName">
                 <tr className="cartas">
                    <td>
                        <Link to="">Colossenses</Link>
                    </td>
                    <td>
                        <Link to="">1 Tessalonicenses</Link>
                    </td>
                    <td>
                        <Link to="">2 Tessalonicenses</Link>
                    </td>
                    <td>
                        <Link to="">1 Timóteo</Link>
                    </td>
                    <td>
                        <Link to="">2 Timóteo</Link>
                    </td>
                    <td>
                        <Link to="">Tito</Link>
                    </td>
                 </tr>
              </div>

              <div className="booksName">
                <tr className="cartas">
                    <td>
                        <Link to="">Filemon</Link>
                    </td>
                    <td>
                        <Link to="">Hebreus</Link>
                    </td>
                    <td>
                        <Link to="">Tiago</Link>
                    </td>
                    <td>
                        <Link to="">1 Pedro</Link>
                    </td>
                    <td>
                        <Link to="">2 Pedro</Link>
                    </td>
                    <td>
                        <Link to="">1 João</Link>
                    </td>
                </tr>
              </div>

              <div className="booksName">
                <tr className="cartas">
                    <td>
                        <Link to="">2 João</Link>
                    </td>
                    <td>
                        <Link to="">3 João</Link>
                    </td>
                    <td>
                        <Link to="">Judas</Link>
                    </td>
                </tr>
              </div>

              <div className="booksName">
                <tr className="relevation">
                    <td>
                        <Link to="">Apocalipse</Link>
                    </td>
                </tr>
              </div>
            </div>    
        </div>         
        <Footer /> 
        </>
    )
}

export default Bible 