import React from "react";
import TextBox, { TextBoxBody, TextBoxPadder, TextBoxTitle } from "./text-box";
import H4 from "./h4";
import IconFacebook from "./icon-facebook";
import IconTwitter from "./icon-twitter";
import IconInstagram from "./icon-instagram";

const SomeBox = ({ person }) => {
  return (
    <TextBox>
      <TextBoxTitle>Seuraa somessa</TextBoxTitle>
      <TextBoxBody>
        <TextBoxPadder>
          <H4>Facebook</H4>
          <div className="mb-3">
            <a href={person.facebook} target="_blank" rel="noreferrer">
              <IconFacebook />
              <span className="sr-only">Avaa Saarnien Facebook sivu</span>
            </a>
          </div>
          <p className="text-center md:text-xs lg:text-base mb-5">
            Voit seurata Laurin ja Leenan työtä Facebookissa.
          </p>

          <H4>Lauri Twitterissä</H4>
          <div className="mb-3">
            <a href={person.twitter} target="_blank" rel="noreferrer">
              <IconTwitter />
              <span className="sr-only">Avaa Laurin Twitter</span>
            </a>
          </div>
          <p className="text-center mb-5">
            Laurin voit löytää myös Twitteristä.
          </p>
          <H4>Lauri Instagramissa</H4>
          <div className="mb-3">
            <a href={person.instagram} target="_blank" rel="noreferrer">
              <IconInstagram />
              <span className="sr-only">Avaa Laurin Instagram</span>
            </a>
          </div>
          <p className="text-center md:text-xs lg:text-base mb-5">
            Kuvia ja ajatuksia
          </p>
        </TextBoxPadder>
      </TextBoxBody>
    </TextBox>
  );
};

export default SomeBox;