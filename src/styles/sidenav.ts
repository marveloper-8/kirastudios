import { NavigationModel } from "resources/interface";
import styled from "styled-components";

export const Wrapper = styled.section`
    height: calc(100% - 60px);
    display: none;
    @media screen and (max-width: 1000px){
        display: flex;
    };
`;

export const MobileMenu = styled.section`
    height: 25px;
    width: 25px;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-white);
    color: var(--color-dark);
    margin-top: 10px;
`;

export const Background = styled.section<NavigationModel>`
    display: none;
    transition: .5s ease all;
    @media screen and (max-width: 1000px){
        display: block;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        background: rgba(0, 0, 0, .5);
        ${props => props.active ? `
            left: 0;
        ` : `
            left: -100vw;
        `};
    };
`;

export const Container = styled.section<NavigationModel>`
    padding: 30px;
    height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .5s ease all;
    @media screen and (max-width: 1000px){
        position: fixed;
        top: 0;
        background: var(--color-dark);
        z-index: 10000;
        border-radius: 0 20px 20px 0;
        ${props => props.active ? `
            left: 0;
        ` : `
            left: -100vw;
        `};
    };
`;

export const Logo = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 10px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-white);
    color: var(--color-dark);
    margin-left: 15px;
`;

export const Navigation = styled.div`
    margin-top: 30px;
`;

export const NavigationItem = styled.div<NavigationModel>`
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 12px;
    display: grid;
    align-items: center;
    grid-template-columns: 20% 60% 20%;
    cursor: pointer;
    color: var(--color-grey-2);
    transition: .5s ease all;
    &:hover{
        background: var(--color-black);
    }
    ${props => props.active && `
        background: var(--color-grey);
        color: var(--color-white);
    `};
`;

export const NavigationItemIcon = styled.div<NavigationModel>`
    margin-right: 10px;
    font-size: 15px;
    color: var(--color-white);
    ${props => props.active && `
        color: var(--color-green);
    `};
`;

export const NavigationItemRight = styled.div`
    text-align: right;
`;

export const NavigationItemCount = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background: var(--color-green);
    color: var(--color-white);
    font-size: 12px;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const NavigationAccount = styled.div`
    padding-top: 15px;
    border-top: 1px solid var(--color-grey);
    color: var(--color-white);
    display: grid;
    align-items: center;
    grid-template-columns: 20% 80%;
    grid-gap: 20px;
`;

export const NavigationAccountImage = styled.div<NavigationModel>`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.img});
`;

export const NavigationAccountActive = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: var(--color-green);
    border: 3px solid var(--color-dark);
    position: absolute;
    bottom: 0px;
    right: 0px;
`;

export const NavigationAccountEmail = styled.div`
    font-size: 10px;
    margin-top: 5px;
`;