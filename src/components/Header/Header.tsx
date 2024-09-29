import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useState} from "react";
import { useTranslation } from 'react-i18next';
import './Header.css'


export const Header = () => {
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState('EN');

    const toggleLanguage = () => {
        const newLanguage = language === 'EN' ? 'ES' : 'EN';
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage.toLowerCase());
    }

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src="/amarre/public/images/logo.png" alt="logo" className="logo"/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/reservations" className="nav-link">
                                    {t('header.reservations')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/glovo" className="nav-link">
                                    {t('header.glovo')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="/amarre/public/menu/menuamarre_nuevo.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link"
                                >
                                    {t('header.menu')}
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    {t('header.contact')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={toggleLanguage}>
                                    {language}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};