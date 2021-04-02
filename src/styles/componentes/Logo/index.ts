import styled from 'styled-components';

const ImgLogo = styled.img`
    max-width: 150px;
    transition: all .2s ease-in-out;
    margin: 0rem 0;
    
    cursor: pointer;
    &:hover{
        opacity: 0.7;
        transform: scale(1.1);
    }
`;

export default ImgLogo;