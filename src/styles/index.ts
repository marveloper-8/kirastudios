import styled from "styled-components";

export const AppContainer = styled.div`
    height: calc(100vh - 20px);
    width: calc(100vw - 20px);
    display: grid;
    background: var(--color-dark);
    grid-template-columns: 20% 80%;
    padding: 10px;
    @media screen and (max-width: 1000px){
        grid-template-columns: 10% 90%;
    };
`;