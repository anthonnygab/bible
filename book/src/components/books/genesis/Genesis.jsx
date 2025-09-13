import React from 'react';
import '../../../css/Genesis.css'
import Navbar from '../../../../src/components/pages/Navbar'
import Picture from '../../../../public/assets/picture/genesis.png'
import Footer from '../../../components/pages/Footer'
import { Link } from 'react-router-dom';

function Genesis() {
    return (
        <>
          <Navbar />
          <table className="verseTable">
             <tbody className="verse">
                <tr>
                    <td>
                        <Link to="/chapter1">1</Link>
                    </td>
                    <td>
                        <Link to="">2</Link>
                    </td>
                    <td>
                        <Link to="">3</Link>
                    </td>
                    <td>
                        <Link to="">4</Link>
                    </td>
                    <td>
                        <Link to="">5</Link>
                    </td>
                    <td>
                        <Link to="">6</Link>
                    </td>
                    <td>
                        <Link to="">7</Link>
                    </td>
                    <td>
                        <Link to="">8</Link>
                    </td>
                    <td>
                        <Link to="">9</Link>
                    </td>
                    <td>
                        <Link to="">10</Link>
                    </td>
                </tr>
             </tbody>

             <tbody className="verse">
                <tr>
                    <td>
                        <Link to="">11</Link>
                    </td>
                    <td>
                        <Link to="">12</Link>
                    </td>
                    <td>
                        <Link to="">13</Link>
                    </td>
                    <td>
                         <Link to="">14</Link>
                    </td>
                    <td>
                         <Link to="">15</Link>
                    </td>
                    <td>
                         <Link to="">16</Link>
                    </td>
                    <td>
                         <Link to="">17</Link>
                    </td>
                    <td>
                         <Link to="">18</Link>
                    </td>
                    <td>
                         <Link to="">19</Link>
                    </td>
                    <td>
                         <Link to="">20</Link>
                    </td>
                </tr>
             </tbody>

             <tbody className="verse">
                <tr>
                    <td>
                         <Link to="">21</Link>
                    </td>
                    <td>
                         <Link to="">22</Link>
                    </td>
                    <td>
                         <Link to="">23</Link>
                    </td>
                    <td>
                         <Link to="">24</Link>
                    </td>
                    <td>
                         <Link to="">25</Link>
                    </td>
                    <td>
                         <Link to="">26</Link>
                    </td>
                    <td>
                         <Link to="">27</Link>
                    </td>
                    <td>
                         <Link to="">28</Link>
                    </td>
                    <td>
                         <Link to="">29</Link>
                    </td>
                    <td>
                         <Link to="">30</Link>
                    </td>
                </tr>
             </tbody>

             <tbody className="verse">
                <tr>
                    <td>
                         <Link to="">31</Link>
                    </td>
                    <td>
                         <Link to="">32</Link>
                    </td>
                    <td>
                         <Link to="">33</Link>
                    </td>
                    <td>
                         <Link to="">34</Link>
                    </td>
                    <td>
                         <Link to="">35</Link>
                    </td>
                    <td>
                         <Link to="">36</Link>
                    </td>
                    <td>
                         <Link to="">37</Link>
                    </td>
                    <td>
                         <Link to="">38</Link>
                    </td>
                    <td>
                         <Link to="">39</Link>
                    </td>
                    <td>
                         <Link to="">40</Link>
                    </td>
                </tr>
             </tbody>

             <tbody className="verse">
                <tr>
                    <td>
                         <Link to="">41</Link>
                    </td>
                    <td>
                         <Link to="">42</Link>
                    </td>
                    <td>
                         <Link to="">43</Link>
                    </td>
                    <td>
                         <Link to="">44</Link>
                    </td>
                    <td>
                         <Link to="">45</Link>
                    </td>
                    <td>
                         <Link to="">46</Link>
                    </td>
                    <td>
                         <Link to="">47</Link>
                    </td>
                    <td>
                         <Link to="">48</Link>
                    </td>
                    <td>
                         <Link to="">49</Link>
                    </td>
                    <td>
                         <Link to="">50</Link>
                    </td>
                </tr>
             </tbody>
          </table>

          <div className="aboutGe">
             <img
               src={Picture}
               id='genesisPicture'
            />

            <div className="aboutGeText">
                <h2>Sobre o Livro de Gênesis</h2>

                <p>O <strong>livro de Gênesis</strong> é o primeiro da Bíblia e do Pentateuco, abordando a origem do mundo, da humanidade e do povo de Israel. Ele apresenta duas partes principais: a história primeva (criação, queda do homem, dilúvio e torre de Babel) e a história patriarcal (vida de Abraão, Isaque, Jacó e José).</p>

                <p>Tradicionalmente, a autoria é atribuída a <strong>Moisés</strong>, escrita por volta de 1.400 a.C., compilando registros e tradições orais antigas.</p>

                <p><strong>Linha do tempo aproximada dos eventos:</strong></p>

                <ul>
                  <li>Criação e Adão e Eva: cerca de 4.000 a.C.</li>
                  <li>Dilúvio de Noé: cerca de 2.500 a.C.</li>
                  <li>Abraão: cerca de 2.000 a.C.</li>
                  <li>Isaque: cerca de 1.900 a.C.</li>
                  <li>Jacó e os 12 filhos: cerca de 1.800 a.C.</li>
                  <li>José no Egito: cerca de 1.700 a.C.</li>
                </ul>
            </div>
          </div>
          <Footer />
        </>
    )
}


export default Genesis