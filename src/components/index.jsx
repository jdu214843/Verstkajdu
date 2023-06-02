import React from "react";
import { AgeSection, Container, Navigation, Wrapper } from "./style";
import LogoUp from ".././assets/imgs/up.png";
import LogoDown from ".././assets/imgs/down.png";

const Section = () => {
  return (
    <Container>
      <Wrapper>
        <Navigation>
          <div className="navLogo">
            <img className="upLogo" src={LogoUp} alt="logo" />
            <img src={LogoDown} alt="logo" />
          </div>
          <div className="navMenu">
            <span>
              <hr />
              <hr />
              <hr />
            </span>
          </div>
        </Navigation>
      </Wrapper>
      <div className="sectionName">
        <h3>
          РЕАЛИЗУЕМ КРУПНЕЙШИЕ <br /> ПРОЕКТЫ В РОССИИ
        </h3>
        <h4 className="sectionNameTitle">
          стадионы, газопроводы, мосты, дамбы
        </h4>
      </div>
      <AgeSection>
        <div className="box">
          <h1 Agesection_box_text1>26</h1>
          <span className="letTitle">лет</span>
          <h5>на рынке</h5>
        </div>
        <div className="box">
          <h1>26</h1>
          <span className="letTitle">лет</span>
          <h5>на рынке</h5>
        </div>
        <div className="box">
          <h1>26</h1>
          <span className="letTitle">лет</span>
          <h5>на рынке</h5>
        </div>
        <div className="box">
          <h1>26</h1>
          <span className="letTitle">лет</span>
          <h5>на рынке</h5>
        </div>
      </AgeSection>
    </Container>
  );
};

export default Section;
