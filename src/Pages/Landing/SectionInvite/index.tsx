import React from 'react';
import ImgCellPhone from '../../../assets/landing-3.png';

const SectionInvite: React.FC = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <span>Simplifique a sua vida. Peça seu convite.</span>
                        <p>GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00</p>

                        <p>Rua Fictícia, 999 - 00000-000 - São Paulo, SP</p>
                        <p>Este é um projeto de avaliação | GamaAcademy | Accenture | 2021</p>
                    </div>
                    <div>
                        <img src={ImgCellPhone} alt="Imagem de um celular" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionInvite;