import React from "react";
import styled from "styled-components";
import {
  Container,
  Flex,
  Actions,
  HeroBannerPadding,
} from "../../layoutComponents";
import { ButtonPrimary, ButtonSecondaryDark } from "../../buttons";
import { FaCheckCircle } from "react-icons/fa";

const device = {
  md: "43em",
};

const HeroWrapper = styled.div`
  background: ${(props) => `url(${props.img})`}, rgba(0, 0, 0, 0.1);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 90vh;
  height: 100%;

  display: grid;
  place-items: center;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`;

const Text = styled.div`
  color: var(--txt-light);
  max-width: 90ch;
  width: 100%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export default function Hero({ title, description, image }) {
  return (
    <HeroWrapper img={image.sourceUrl}>
      <HeroBannerPadding />
      <Container>
        <Text className="spacing">
          <h1 className="title bold italics">{title}</h1>
          <p className="">{description}</p>
          <ButtonPrimary href="/contact">
            book a free 90-minute consultation &#8594;
          </ButtonPrimary>
        </Text>
      </Container>
    </HeroWrapper>
  );
}
