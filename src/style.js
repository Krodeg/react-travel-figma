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
    width: 100vw;
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
        margin-right: -150px;
    }
`

// top selling //
export const TopSellingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    p.top-selling-title {
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

export const TopDestinationContainer = styled.div`
    display: flex;
    justify-content: center;
    div.box {
        width: 400px;
        height: 600px;
        position: relative;
    }

    div.box .italy-container {
        width: 100%;
        height: 470px;
        /* position: relative; */
    }

    .description-container {
        border: 1px solid #000;
        width: 332px;
        left: 84px;
        position: absolute;
        bottom: 95px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        padding: 30px 20px;
        border-radius: 0 0 24px 24px;
        background-color: #fff;
        box-shadow: 0px 100px 80px 0px rgba(0, 0, 0, 0.02), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.00);
        border: none;

        p {
            color: var(--TEXT-CLR, #5E6282);
            font-family: Poppins;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 124.5%; /* 22.41px */
        }

    }
`

export const TopSellingImg = styled.img`
    width: 500px;
    height: 700px;
    z-index: -1;
`

// Trip container // 
export const TripContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 200px;
    margin-left: 300px;
    .trip-container-title {
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
        font-family: Volkhov;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }
    .trip-first-title {
        color: var(--TEXT-CLR, #5E6282);
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 124.5%; /* 19.92px */
    }
    .trip-second-title {
        color: var(--TEXT-CLR, #5E6282);
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 124.5%; /* 19.92px */
    }
`

// about us //
export const AboutUsContianer = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-left: 200px;
    .left p {
        color: var(--TEXT-CLR, #5E6282);
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
    }
    .left h1 {
        color: var(--3rd, #14183E);
        font-family: Volkhov;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }
    .left img {
        width: 87px;
        height: 12px;
        flex-shrink: 0;
    }
`

// logos //

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-bottom: 130px;
    div {
        box-shadow: 0px 100px 80px 0px rgba(0, 0, 0, 0.02), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.00);
        width: 241px;
        height: 86px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const FooterTop = styled.div`
    width: 1170px;
    height: 407px;
    /* border-radius: 20px 129px 20px 20px; */
    border-radius: 129px 20px 20px 20px;
    opacity: 0.2;
    background: var(--light-color, #DFD7F9);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    color: #5E6282;
    h1 {
        color: var(--TEXT-CLR, #5E6282);
        text-align: center;
        font-family: Poppins;
        font-size: 33px;
        font-style: normal;
        font-weight: 600;
        line-height: 54px; /* 163.636% */
    }
`

export const FooterTopButton = styled.button`
    width: 140px;
    height: 48px;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: var(--gradient, linear-gradient(180deg, #FF946D 0%, #FF7D68 100%));
    z-index: -2;
`

// Footer //
export const Footer = styled.div`
    
`