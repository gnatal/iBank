import styled from 'styled-components';

const BackgroudVideo = styled.div`

    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    background: url('x.jpg') no-repeat center center/cover;


    .wrapper__login {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .wrapper__login .wrapper__video{
        object-fit: fill;
        width: 100%;
        height: 100%;
    }

    .wrapper__h1{
        position: absolute;
        top: 0;
        z-index: 2;
        max-width: 350px;
        width: 100%;
        margin: 2rem 0 0 2rem;
    }

    .h1__login{
        font-family: Geomanist, Arial;
        color: #000;
        font-size: 2.5rem;
        line-height: .93em;
        text-transform: uppercase;
        font-weight: 800;
    }

    .h1-color1{
        color: var(--primary-bg-color);
    }

    .h1-color2{
        color: var(--secondary-bg-color);
    }

    @media (max-width: 260px){
        .wrapper__h1{
            margin: 1rem;
        }
    }
`;

export default BackgroudVideo;
