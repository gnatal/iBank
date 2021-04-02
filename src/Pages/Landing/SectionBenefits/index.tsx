import React from 'react';
import { Container, Section, SectionBenefitsStyle, BackgroundLanding3 } from '../../../styles/pages/Lading';
import { ISectionProps } from '../../../types/style';

const SectionBenefits: React.FC<ISectionProps> = ({ background }) => {
    return (
        <>
            <BackgroundLanding3 >
                <Section background={background}>
                    <Container>
                        <SectionBenefitsStyle>
                            <span className="section-benefits-span-title">O fim da complexibilidade</span>
                            <p className="section-benefits-p-content">Para quem sabe que tecnologia e design são melhores do que agências e papelada.</p>  
                        </SectionBenefitsStyle>
                    </Container>
                </Section>
            </BackgroundLanding3>
        </>

    )
}

export default SectionBenefits;