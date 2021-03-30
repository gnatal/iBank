import styled from 'styled-components';
import { ISectionProps } from '../../../types/style';
import bgImg1 from '../../../assets/background-landing-1.png';
import bgImg2 from '../../../assets/background-landing-3.png';

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px;
`;

export const Section = styled.section<ISectionProps>`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.background?props.background:'#fff'};
`;

export const SectionHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .section-home-form-register{
        width: 100%;
        max-width: 350px;
    }
`;

export const SectionBenefitsStyle = styled.div`
    .section-benefits-span-title,
    .section-benefits-p-content{
        margin: 2rem 0;
        color: #fff;
    }

    .section-benefits-span-title{
        font-size: 3.5rem;
        font-weight: 600;
    }

    .section-benefits-p-content{
        font-size: 2rem;
        line-height: 30px;
    }

    @media (max-width: 670px){
        justify-content: center;
        text-align: center;
    }

    @media (max-width: 450px){
        .section-benefits-span-title{
            font-size: 2rem;
        }

        .section-benefits-p-content{
            font-size: 1rem;
        }
    }
`;

export const SectionCardStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

`;

export const SectionCostsStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .section-cost-span-title,
    .section-cost-p-content,
    .section-cost-span-value{
        margin: 2rem 0;
    }

    .section-cost-span-title,
    .section-cost-span-value{
        color: var(--primary-bg-color);
    }

    .section-cost-span-title{
        font-size: 3.5rem;
        font-weight: 600;
    }

    .section-cost-p-content{
        color: #ddd;
        font-size: 1.5rem;
        line-height: 30px;
        width: 100%;
        max-width: 420px;
    }

    .section-cost-span-value{
        font-size: 10rem;
        font-weight: 900;
    }

    @media (max-width: 755px){
        justify-content: center;

        .section-cost-div,
        .section-cost-span-value{
            text-align: center;
        }
    }

    @media (max-width: 600px){
        .section-cost-span-title{
            font-size: 2.5rem;
        }

        .section-cost-p-content{
            font-size: 1rem;
        }

        .section-cost-span-value{
            font-size: 6rem;
            font-weight: 800;
        }
    }
`;

export const SectionInviteStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const BackgroundLanding1 = styled.div`
    width: 100%;
    height: 100vh;
    background: #222;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${bgImg2});
    background-attachment: fixed;
`;

