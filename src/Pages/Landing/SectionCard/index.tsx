import React from 'react';

import { Container, Section, SectionCardStyle } from '../../../styles/pages/Lading';
import { ISectionProps } from '../../../types/style';

const SectionCard: React.FC<ISectionProps> = ({background}) => {
    return (
        <Section background={background}>
            <Container>
                <SectionCardStyle>
                    <div>
                        <span>Conta digital do Gama Academy</span>
                        <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
                    </div>
                    <div>
                        <span>Cartão de Crédito</span>
                        <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
                    </div>
                </SectionCardStyle>
            </Container>
        </Section>
    )
}

export default SectionCard;