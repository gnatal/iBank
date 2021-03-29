import React from 'react';
import ImgCellPhone from '../../../assets/landing-3.png';
import { Container, Section, SectionInviteStyle } from '../../../styles/pages/Lading';
import { ISectionProps } from '../../../types/style';

const SectionInvite: React.FC<ISectionProps> = ({background}) => {
    return (
        <Section background={background}>
            <Container>
                <SectionInviteStyle>
                    <div>
                        <span>Simplifique a sua vida. Peça seu convite.</span>
                        <p>GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00</p>

                        <p>Rua Fictícia, 999 - 00000-000 - São Paulo, SP</p>
                        <p>Este é um projeto de avaliação | GamaAcademy | Accenture | 2021</p>
                    </div>
                    <div>
                        <img src={ImgCellPhone} alt="Imagem de um celular" />
                    </div>
                </SectionInviteStyle>
            </Container>
        </Section>
    )
}

export default SectionInvite;