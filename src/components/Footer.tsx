import React from 'react';
import { ReactComponent as NinjaGirlSVG } from '../assets/icons/svg/017-ninja-2.svg';
import { ReactComponent as NinjaBoySVG } from '../assets/icons/svg/035-ninja-6.svg';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__attribution-box">
                Icons made by&nbsp;
                <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Freepik
                </a>
                &nbsp;from&nbsp;
                <a
                    href="https://www.flaticon.com/"
                    title="Flaticon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    www.flaticon.com
                </a>
            </div>
            <div className="footer__developer-box">
                <span className="footer__dev footer__dev--developed">
                    Developed By
                </span>
                &nbsp;
                <span className="footer__dev footer__dev--name tooltip">
                    <a
                        href="https://github.com/suzynakayama"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__dev-link"
                    >
                        Suzy Nakayama
                    </a>
                    <span className="tooltip__tooltip-text">
                        <NinjaGirlSVG />
                        Suzy's GitHub
                    </span>
                </span>
                <span className="footer__dev footer__dev--developed">
                    &nbsp;and&nbsp;
                </span>
                <span className="footer__dev footer__dev--name tooltip">
                    <a
                        href="https://github.com/Roger-Takeshita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__dev-link"
                    >
                        Roger Takeshita
                    </a>
                    <span className="tooltip__tooltip-text">
                        <NinjaBoySVG />
                        Roger's GitHub
                    </span>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
