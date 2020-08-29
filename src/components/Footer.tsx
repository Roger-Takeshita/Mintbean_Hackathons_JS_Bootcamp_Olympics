import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="footer">
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
                <span className="footer__dev footer__dev--name">
                    <a
                        href="https://github.com/suzynakayama"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__dev-link"
                    >
                        Suzy Nakayama
                    </a>
                </span>
                <span className="footer__dev footer__dev--developed">
                    &nbsp;and&nbsp;
                </span>
                <span className="footer__dev footer__dev--name">
                    <a
                        href="https://github.com/Roger-Takeshita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__dev-link"
                    >
                        Roger Takeshita
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
