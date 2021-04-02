import React from 'react';
import { Container, Section, SectionCostsStyle } from '../../../styles/pages/Lading';
import { ISectionProps } from '../../../types/style';
import CreditCard from '../../../components/CreditCard';

const SectionCosts: React.FC<ISectionProps> = ({background}) => {
    return (
        <Section background={background}>
            <Container>
                <SectionCostsStyle>
                    <div className="section-cost-div">
                        <CreditCard />
                        <span className="section-cost-span-title">Zero anuidade</span>
                        <p className="section-cost-p-content">Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</p>
                    </div>
                    <div className="section-cost-span-value">
                        <span>0,00</span>
                    </div>
                </SectionCostsStyle>
            </Container>
        </Section>
    )
}

export default SectionCosts;