import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ISectionProps } from '../../../types/style';
import bgImg1 from '../../../assets/background-landing-1.png';
import bgImg2 from '../../../assets/background-landing-2.jpg';
import bgImg3 from '../../../assets/background-landing-3.jpg';

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px;
`;

export const Section = styled.section<ISectionProps>`
    width: 100%;
    min-height: ${props => props.heightSize ? props.heightSize : '100vh'};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.background ? props.background : 'none'};

    .section-link{
        color: var(--primary-bg-color);
        text-align: center;
        text-decoration: none;
        font-weight: 700;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover,
        &:focus {
            opacity: 0.8;
            transform: scale(1.05);
        }
    }
`;

export const HeaderTop = styled.div`
    z-index: 4;
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--primary-bg-color);
    padding: 3px 0.5rem;
`;

export const SectionHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .section-home-content{
        max-width: 400px;
        font-weight: 700;
        letter-spacing: -0.03em;
        font-size: 2rem;
        line-height: 1.5;
        color: var(--primary-bg-color);
    }

    .section-home-content-account{
        font-weight: 900;
    }

    span{
        padding: 5px;
        background-color: #ffffffbb;
    }

    .section-home-form-register{
        width: 100%;
        max-width: 400px;

        h1{
            font-size: 1.125rem;
            text-align:center;
            font-weight: 700;
            margin: 1rem 0;
        }
    }

    .section-home-button-main{
        color: #fff;
        background-color: var(--primary-bg-color);
        border-radius: 25px;
        border: 0;
        padding: 15px;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1;
        text-transform: uppercase;
        outline: 0;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        &:hover,
        &:focus {
            opacity: 0.8;
            transform: scale(1.05);
        }

        @media (max-width: 400px){
            width: 100%;
        }
    }

    .section-home-button-form{
        width: 100%;
        color: #fff;
        background-color: var(--primary-purple);
        border-radius: 25px;
        border: 0;
        padding: 15px;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1;
        text-transform: uppercase;
        outline: 0;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        &:hover,
        &:focus {
            opacity: 0.8;
            transform: scale(1.05);
        }
    }

    @media (max-width: 820px){
        justify-content: center;

        .section-home-content{
            margin: 1rem 0;
            text-align: center;
        }

        .section-home-form-register{
            margin: 1rem 0;
            background-color: #ffffffdd;
        }
    }

    @media (max-width: 400px){
        .section-home-content{
            letter-spacing: 0;
            font-size: 1.5rem;
        }
    }
`;

export const BackgroundLanding1 = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    background-image: url(${bgImg1});
    background-position: 40% bottom;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 50%;
    display: flex;
    align-items: center;
    justify-self: center;
`;

export const SectionAccountStyle = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #fff;

    .section-account-img{
        max-width: 450px;
    }

    .section-account-div-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .section-account-title{
        color: var(--primary-bg-color);
        font-size: 3rem;
        font-weight: 800;
        margin: 1rem 0;
    }

    .section-account-content{
        padding: 1rem;
        font-size: 1.5rem;
        max-width: 400px;
    }

    @media (max-width: 820px){
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const SectionCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .section-card-div-content{
        max-width: 550px;
    }

    .section-card-title{
        font-size: 3rem;
        color: var(--primary-purple);
        font-weight: 800;  
        margin-bottom: 1rem;      
    }

    .section-card-content{
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 2rem;        
        margin: 1rem 0;
    }

    .section-card-content span{
        background-color: #ffffff99;
    }
`;

export const SectionBenefitsStyle = styled.div`
    justify-content: center;
    text-align: center;

    .section-benefits-span-title,
    .section-benefits-p-content{
        margin: 2rem 0;
        color: #ddd;
    }

    .section-benefits-span-title{
        font-size: 3.5rem;
        font-weight: 600;
    }

    .section-benefits-p-content{
        font-size: 2rem;
        line-height: 30px;
    }

    @media (max-width: 450px){
        .section-benefits-span-title{
            font-size: 2rem;
        }

        .section-benefits-p-content{
            font-size: 1.5rem;
        }
    }
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

        .section-cost-span-value{
            font-size: 6rem;
            font-weight: 800;
        }
    }
`;

export const BackgroundLanding3 = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #222;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${bgImg3});
    background-attachment: fixed;
`;

export const SectionInviteStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .section-invite-div-content{
        max-width: 500px;
        font-weight: 700;
        font-size: 1.5rem;
    }

    .section-invite-title{
        color: var(--primary-bg-color);
        font-size: 3rem;
    }

    .section-invite-div-content p{
        margin: 1.5rem 0;
    }

    .section-invite-img-landing1{
        max-width: 400px;
    }

    @media (max-width: 880px){
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

export const BackgroundLanding2 = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #fff;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${bgImg2});
    background-attachment: fixed;
`;

export const FooterStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    color: #fff;

    .footer-copyright{
        margin: 1rem 0;
    }

    .footer-social-media-nav ul{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }

    .footer-social-media-nav li{
        padding: 5px;
        margin: 5px;
    }

    .footer-social-media-nav-link{
        cursor: pointer;
    }

    .footer-img-icon{
        max-height: 25px;
        max-width: 25px;
        vertical-align: bottom;
        &:hover,
        &:focus {
            opacity: 0.8;
            transform: scale(1.05);
            fill: var(--primary-bg-color);
        }
    }

    @media (max-width: 500px){
        justify-content: center;

        .footer-div-copyright{
            text-align: center;
        }
    }
`;