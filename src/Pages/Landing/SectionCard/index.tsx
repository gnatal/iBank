import React from 'react';

import { Container, Section, SectionCardStyle, BackgroundLanding2 } from '../../../styles/pages/Lading';
import { ISectionProps } from '../../../types/style';

const SectionCard: React.FC<ISectionProps> = ({ background }) => {
    return (
        <>
            <BackgroundLanding2 >
                <Section background={background}>
                    <Container>
                        <SectionCardStyle>
                            <div className="section-card-div-content">
                                <h1 className="section-card-title">Cartão de Crédito</h1>
                                <p className="section-card-content">
                                    <span >Gratuito e pratico. Aceito em todo o mundo. Moderninho e reinventando
                                        a relação das pessoas com o uso de cartão.</span>
                                </p>
                            </div>
                            <div>
                                <a className="section-link" href="#"> Saiba Mais </a>
                            </div>
                        </SectionCardStyle>
                    </Container>
                </Section>
            </BackgroundLanding2>
        </>
    )
}

export default SectionCard;