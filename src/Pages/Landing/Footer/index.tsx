import React from 'react';
import { Container, Section, FooterStyle } from '../../../styles/pages/Lading';
import { ISectionProps } from '../../../types/style';
import LogoWhite from '../../../components/LogoWhite';

import FacebookIcon from '../../../assets/svgs/facebook.svg';
import InstagramIcon from '../../../assets/svgs/instagram.svg';
import LinkedinIcon from '../../../assets/svgs/linkedin.svg';
import YoutubeIcon from '../../../assets/svgs/youtube.svg';

const Footer: React.FC<ISectionProps> = ({ background, heightSize }) => {
    return (
        <>
            <footer>
                <Section background={background} heightSize={heightSize}>
                    <Container>
                        <FooterStyle>
                            <div className="footer-div-copyright">
                                <div>
                                    <LogoWhite />
                                </div>
                                <div className="footer-copyright">
                                    © {(new Date().getFullYear())} iBank Accenture Academy 2.0 S.A.
                                </div>
                            </div>
                            <div>
                                <nav className="footer-social-media-nav">
                                    <ul>
                                        <li>
                                            <a className="footer-social-media-nav-link" href="#">
                                                <img  className="footer-img-icon" src={FacebookIcon} alt="facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="footer-social-media-nav-link" href="#">
                                                <img className="footer-img-icon" src={InstagramIcon} alt="instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="footer-social-media-nav-link" href="#">
                                                <img className="footer-img-icon" src={LinkedinIcon} alt="linkedin" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="footer-social-media-nav-link" href="#">
                                                <img className="footer-img-icon" src={YoutubeIcon} alt="youtube" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </FooterStyle>
                    </Container>
                </Section>
            </footer>
        </>
    )
}

export default Footer;