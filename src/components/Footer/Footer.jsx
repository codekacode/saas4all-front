import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerContent">
                <div className="column">
                    <div className="logo">Logo</div>
                    <h4>¿Quieres ser el primero en enterarte de nuestras promos? ¡Claro que las quieres!</h4>
                    <form className="emailForm">
                        <input type="email" placeholder="Email" />
                        <button type="submit">Regístrate</button>
                    </form>
                    <p>Al registrarme, acepto que me manden comunicaciones publicitarias de Black Cherry por correo electrónico o mensaje de texto SMS</p>
                </div>
                <div className="column">
                    <h4>Contactanos</h4>
                    <a href="#">Chatea con nosotros</a>
                    <p>Llámanos al (01-606-0000)</p>
                    <a href="#">Libro de reclamaciones</a>
                </div>
                <div className="column">
                    <h4>Sobre Nosotros</h4>
                    <a href="#">Nosotros</a>
                    <a href="#">Nuestro local</a>
                </div>
                <div className="column">
                    <h4>Promociones validas</h4>
                </div>
            </div>
            <div className="socialLinks">
                {/* Add social media icons/links here */}
            </div>
        </footer>
    );
};

export default Footer;