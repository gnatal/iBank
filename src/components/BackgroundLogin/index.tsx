import React from 'react';
import VideoBg from '../../assets/video/ibank.mp4';
import BackgroudVideo, { BackgroudMobile } from '../../styles/componentes/BackgroudVideo';
import BgImage from '../../assets/background-login.jpg';


const BackgroundLogin: React.FC = () => {
    return (
        <>
            <BackgroudMobile>
                <div className="wrapper__login">
                    <img src={BgImage} className="wrapper__video" id="wrapper__video" />
                    <div className="wrapper__h1">
                        <h1 className="h1__login">Peo<span className="h1-color1">p</span>le fi<span className="h1-color2">r</span>st.</h1>
                    </div>
                </div>
            </BackgroudMobile>
            <BackgroudVideo>
                <div className="wrapper__login">
                    <video autoPlay muted loop className="wrapper__video" id="wrapper__video">
                        <source src={VideoBg} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <div className="wrapper__h1">
                        <h1 className="h1__login">Peo<span className="h1-color1">p</span>le fi<span className="h1-color2">r</span>st.</h1>
                    </div>
                </div>
            </BackgroudVideo>
        </>
    );
}

export default BackgroundLogin;