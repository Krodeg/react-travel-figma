import styled from "styled-components";

// Navbar //
export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 80px;
    width: 100vw;
    height: 100px;
    color: black;
`

export const NavbarSignUpButton = styled.button`
    background-color: #FFF1DA;
    border-radius: 7px;
    color: black;
    width: 102px;
    height: 40px;
    border: 1px solid #000;
    font-size: 16px;
    font-weight: 500;
`

// Home //
export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    align-items: center;
    p.header-first-text{
        color: #DF6951;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }
    h1 {
        color: var(--1st, #181E4B);
        font-family: Volkhov;
        font-size: 84px;
        font-style: normal;
        font-weight: 700;
        line-height: 89px;
        letter-spacing: -3.36px;
    }
    p.header-text {
        color: #5E6282;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
    }
`

export const HeaderButton = styled.button`
    width: 170px;
    height: 60px;
    border-radius: 10px;
    background: var(--yellow, #F1A501);
    box-shadow: 0px 20px 35px 0px rgba(241, 165, 1, 0.15);
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
`

// home //
export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 1000px;
    width: 90vw;
    height: 500px;
    p.category-title{
        color: var(--TEXT-CLR, #5E6282);
        text-align: center;
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    h1 {
        color: var(--3rd, #14183E);
        text-align: center;
        font-family: Volkhov;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }
`

export const BestServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 70px;
    div.box{
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
            margin: 10px 0;
            color: var(--text-heading-color, #1E1D4C);
            text-align: center;
            font-family: "Open Sans";
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }
        p {
            color: var(--TEXT-CLR, #5E6282);
            text-align: center;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
        }
    }
    div.special {
        border-radius: 36px;
        background: var(--white, #FFF);
        box-shadow: 0px 100px 80px 0px rgba(0, 0, 0, 0.02), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.00);
        width: 267px;
        height: 314px;
        position: relative;
    }
`

// top selling //
export const TopSellingContainer = styled.div`

`