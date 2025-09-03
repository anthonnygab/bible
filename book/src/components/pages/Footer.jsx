import React  from "react";
import '../../css/Footer.css'
import LogoFooter from '../../../public/assets/logo/BibleLogo.png'

function Footer() {
    return (
        <div className="footer">
        <img 
           src={LogoFooter} 
           id="footerLogo"
        />
        <p>
            &copy; 2025 Bible - Todos os Direitos Reservados
        </p>

        <div className="divide"></div>

        <div className="apiCreators">
            <p>
                Dados fornecidos por <a href="https://github.com/robertrouse/theographic-bible-metadata"  target="_blank" >Theographic Bible Metadata</a> — por Robert Rouse (Licença CC BY-SA 4.0)
            </p>

            <p>Dados Fornecidos por <a href="https://github.com/omarciovsena/abibliadigital" target="_blank">A Bíblia Digital</a></p>
        </div>
    </div>
    )
}


export default Footer