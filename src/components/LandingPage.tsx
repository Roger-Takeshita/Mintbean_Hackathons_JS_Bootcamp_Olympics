import React from 'react';
import { HeaderLandingProps } from '../utils/types';
import ninjaTime from '../assets/images/ninja-1.png';
import { ReactComponent as Kunai } from '../assets/icons/svg/021-kunai-1.svg';

const LandingPage: React.FC<HeaderLandingProps> = ({
    showBoard,
    setShowBoard,
}) => {
    return (
        <>
            <div className="landing">
                <div className="landing__box">
                    <h1 className="landing__title">The ninja board</h1>
                    <h3 className="landing__subtitle">Be fast as a ninja</h3>
                    <p className="landing__text">
                        Is your team lagging at work? Do you feel you need more
                        time to finish your tasks? Do you think you are always
                        lost when choosing what to prioritize? You need{' '}
                        <span>The Ninja Board</span>! The best way to organize
                        your tasks and become a ninja at work and at life!
                    </p>
                    <button
                        className="btn landing__btn"
                        onClick={() => setShowBoard(!showBoard)}
                    >
                        <Kunai className="landing__btn-svg" />
                        Be a Ninja!
                        <Kunai className="landing__btn-svg" />
                    </button>
                </div>
                <div className='landing__image-container'>
                    <img
                        className="landing__image"
                        src={ninjaTime}
                        alt="ninja time management"
                    />
                </div>
            </div>
        </>
    );
};

export default LandingPage;
