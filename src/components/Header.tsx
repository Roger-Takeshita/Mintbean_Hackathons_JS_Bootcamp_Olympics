import React from "react";
import board from '../assets/icons/svg/000-board.svg';
import { HeaderLandingProps } from "../utils/types";

const Header: React.FC<HeaderLandingProps> = ({showBoard, setShowBoard}) => {
    return (
        <div className="header">
            <div className="header__logo-box">
                <img src={board} alt='board' className='header__board' />
                <div className='header__logo'></div>
                <h1 className='header__title' onClick={() => setShowBoard(!showBoard)}>The Ninja Board</h1>
                <div className='header__logo'></div>
                <img src={board} alt='board' className='header__board'/>
            </div>
        </div>
    );
};

export default Header;
