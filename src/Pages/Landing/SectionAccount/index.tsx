import React from 'react';

import { Container, Section, SectionAccountStyle } from '../../../styles/pages/Lading';
import { ISectionProps } from '../../../types/style';

import ContaDigitalImg from '../../../assets/svgs/space.svg';

const SectionAccount: React.FC<ISectionProps> = ({background}) => {
    return (
        <Section background={background}>
            <Container>
                <SectionAccountStyle>                    
                    <div>
                        <img className="section-account-img" src={ContaDigitalImg} alt="iBank Account"/>
                    </div>
                    <div className="section-account-div-content">
                        <span className="section-account-title">Conta digital de outro mundo!</span>
                        <p className="section-account-content">Sem taxas escondidas. Rende mais o seu dinheiro. Simples de se fazer parte da família.</p>
                        <a className="section-link" href="#"> Saiba Mais </a>
                    </div>
                </SectionAccountStyle>
            </Container>
        </Section>
    )
}

export default SectionAccount;