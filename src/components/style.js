import style from "styled-components";
import HomeBg from "../assets/imgs/Rectangle.png";

export const Container = style.div`
    width: max-width;
    height: 740px;
    background-image: url(${HomeBg});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    
    .sectionName{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 112px;
        color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 54px;
    line-height: 95px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    }
    .sectionNameTitle{
        
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        text-transform: uppercase;
    }
`;

export const Wrapper = style.div`
    display: flex;
    flex-direction: column;
    width: 1280px;
    max-width: 100%;
    background-color: black;
    margin: 0 auto;

`;
export const Navigation = style.div`
    height: 70px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    .navMenu{
        width: 40px;
        height: 40px;
        background: #F7654A;
    }
    .navMenu span{
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .navMenu hr{
        width: 20px;
        height: 2px;
        background-color: white;
        margin-bottom: 3px;
        border: none;
     
    }
`;

export const AgeSection = style.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 1280px;
    max-width:100%;
    margin: 0 auto;
    height: 300px;
    background-color: #f7f7f7;
    color: black;
    margin-top: 170px;
    flex-wrap:wrap;
    .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 190px;

    }
    .box h1{
        font-style: normal;
        font-weight: 500;
        font-size: 72px;
        text-align: center;
        text-transform: uppercase;
        color: #F7654A;
    }
    .box .letTitle {
        font-style: normal;
        font-weight: 500;
        font-size: 36px;

        text-align: center;
        text-transform: uppercase;
    }
    .box h5{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;

        text-align: center;
        color: #999;
    },
`;
