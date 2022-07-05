import { DashboardModel } from "resources/interface";
import styled from "styled-components";

export const Container = styled.section`
    background: var(--color-white);
    border-radius: 10px;
    color: var(--color-grey-2);
    font-size: 12px;
    overflow: hidden;
    max-height: calc(100vh - 20px);
    @media screen and (max-width: 550px){
        overflow-y: scroll;
    };
`;

export const ContainerPrimary = styled.section`
    padding: 20px 20px 10px 20px;
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 550px){
        display block;
    };
`;

export const NavigationTitle1 = styled.span`
    color: var(--color-dark);
    font-weight: bold;
`;

export const NavigationTitle2 = styled.span`
    color: var(--color-purple);
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
`;

export const Subscription = styled.div`
    display: flex;
    align-items: center;
    color: var(--color-grey-2);
    @media screen and (max-width: 550px){
        margin-top: 15px;
    };
`;

export const Button = styled.button<DashboardModel>`
    margin-right: 20px;
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    ${props => props.alt ? `
        padding: 10px;
        border-radius: 10px;
        color: var(--color-white);
        background: var(--color-purple);
        width: 100%;
        font-size: 10px;
    ` : `
        font-size: 12px;
        padding: 7px 12px;
        border-radius: 30px;
        border: 1px solid var(--color-grey-2);
        color: var(--color-grey-2);
        background: none;
    `};
`;

export const Analytics = styled.div`
    margin-top: 30px;
`;

export const AnalyticsTitle = styled.div`
    font-size: 30px;
    color: var(--color-dark);
`;

export const AnalyticsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 20px;
    @media screen and (max-width: 810px){
        grid-template-columns: repeat(2, 1fr);
    };
    @media screen and (max-width: 550px){
        grid-template-columns: 1fr;
    };
`;

export const AnalyticsItem = styled.div`
    border: 1px solid var(--color-grey-3);
    padding: 15px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 25% 75%;
    align-items: center
    font-size: 10px;
    @media screen and (max-width: 1300px){
        grid-template-columns: 1fr;
        grid-gap: 10px;
    };
    @media screen and (max-width: 810px){
        grid-template-columns: 25% 75%;
    };
`;

export const AnalyticsItemIcon = styled.div<DashboardModel>`
    ${props => props.alt ? `
        background: var(--color-white);
        color: var(--color-dark);
    ` : props.right ? `
        background: var(--color-purple);
        color: var(--color-white);
    ` : `
        background: var(--color-dark);
        color: var(--color-white);
    `};
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${props => props.small ? `
        width: 20px;
        height: 20px;
        border-radius: 20px;
        font-size: 10px;
    ` : props.right ? `
        font-size: 15px;
        width: 30px;
        height: 30px;
        border-radius: 30px;
    ` : `
        font-size: 20px;
        width: 45px;
        height: 45px;
        border-radius: 45px;
    `};
`;

export const AnalyticsItemTitle = styled.div`
    font-size: 20px;
    color: var(--color-dark);
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

export const AnalyticsItemPercentage = styled.div<DashboardModel>`
    font-size: 10px;
    color: ${props => props.increase ? 'var(--color-green)' : 'var(--color-red)'};
    font-weight: bold;
    position: relative;
    top: 10px;
`;

export const AnalyticsItemCurrency = styled.span<DashboardModel>`
    font-size: 10px;
    color: var(--color-grey-2);
    font-weight: bold;
`;

export const SectionsNavigation = styled.div<DashboardModel>`
    font-size: 10px;
    color: ${props => props.increase ? 'var(--color-green)' : 'var(--color-red)'};
    font-weight: bold;
    position: relative;
    top: 10px;
    display: flex;
    overflow-x: scroll;
`;

export const SectionsNavigationItem = styled.div<DashboardModel>`
    font-size: 10px;
    font-weight: bold;
    padding: 20px 0;
    margin-right: 20px;
    cursor: pointer;
    white-space: nowrap;
    ${props => props.active ? `
        color: var(--color-dark);
        border-bottom: 2px solid var(--color-dark);
    ` : `
        color: var(--color-grey-2);
        border-bottom: 2px solid transparent;
    `};
`;

export const Section = styled.div<DashboardModel>`
    background: var(--color-grey-3);
    padding: 20px;
    max-height: 48vh;
    overflow-y: scroll;
    box-shadow: inset 0 2px 8px 0 var(--color-grey-2);
    @media screen and (max-width: 550px){
        height: auto;
        overflow: hidden;
        max-height: none;
    };
`;

export const OrdersHistoryWrapper = styled.div<DashboardModel>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 20px;
    @media screen and (max-width: 810px){
        grid-template-columns: 1fr;
    };
`;

export const OrdersHistory = styled.div<DashboardModel>`
    border-radius: 10px;
    overflow: hidden;
    ${props => props.alt ? `
        border: 1px solid var(--color-grey);
    ` : `
        background: var(--color-white);
        box-shadow: 10px 10px 8px 10px var(--color-grey-3);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
    `};
`;

export const OrdersHistoryTitle = styled.div<DashboardModel>`
    font-size: 20px;
    color: var(--color-dark);
    ${props => !props.alt && `
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    `};
    ${props => props.right && `
        float: right;
    `};
`;

export const OrdersHistoryTitleIcon = styled.div`
    font-weight: bolder;
    color: var(--color-grey-2);
`;

export const OrdersHistoryData = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    align-items: end;
    @media screen and (max-width: 1300px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px 10px;
    };
    @media screen and (max-width: 810px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
    };
    @media screen and (max-width: 550px){
        grid-template-columns: 1fr;
    };
`;

export const Active = styled.div<DashboardModel>`
    color: var(--color-dark);
    ${props => props.head && `
        font-size: 25px;
    `};
`;

export const History = styled.div<DashboardModel>`
    display: grid;
    align-items: center
    font-size: 10px;
    ${props => props.alt ? `
        grid-template-columns: 20% 70% 10%;
        padding: 0;
    ` : `
        grid-template-columns: 10% 70% 20%;
        border-bottom: 1px solid var(--color-white);
        padding: 15px 0;
    `};
    @media screen and (max-width: 1300px){
        ${props => props.alt ? `
            grid-template-columns: 20% 70% 10%;
        ` : `
            grid-template-columns: 20% 50% 30%;
        `};
    };
`;

export const OtherThingsTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const OtherThingsTitleIcon = styled.div`
    font-size: 18px;
`;

export const TotalTimePrimary = styled.div`
    padding: 10px;
    border-bottom: 1px solid var(--color-grey);
    &:last-child{
        border: none;
    };
`;

export const TotalTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`;