import React from "react";
import TextBox from "./text-box";
import H4 from "./h4";
import IconFacebook from "./icon-facebook";
import IconTwitter from "./icon-twitter";
import IconInstagram from "./icon-instagram";
import SROnly from "./sr-only-text";

const SomeBox = ({ person }) => {
  return (
    <TextBox>
      <TextBox.Title>Seuraa somessa</TextBox.Title>
      <TextBox.Body>
        <TextBox.Padder>
          <H4>Facebook</H4>
          <div className="mb-3">
            <a href={person.facebook} target="_blank" rel="noreferrer">
              <IconFacebook />
              <SROnly>Avaa Saarnien Facebook sivu</SROnly>
            </a>
          </div>
          <p className="text-center md:text-xs lg:text-base mb-5">
            Voit seurata Laurin ja Leenan työtä Facebookissa.
          </p>

          <H4>Lauri Twitterissä</H4>
          <div className="mb-3">
            <a href={person.twitter} target="_blank" rel="noreferrer">
              <IconTwitter />
              <SROnly>Avaa Laurin Twitter</SROnly>
            </a>
          </div>
          <p className="text-center mb-5">
            Laurin voit löytää myös Twitteristä.
          </p>
          <H4>Lauri Instagramissa</H4>
          <div className="mb-3">
            <a href={person.instagram} target="_blank" rel="noreferrer">
              <IconInstagram />
              <SROnly>Avaa Laurin Instagram</SROnly>
            </a>
          </div>
          <p className="text-center md:text-xs lg:text-base mb-5">
            Kuvia ja ajatuksia
          </p>
        </TextBox.Padder>
      </TextBox.Body>
    </TextBox>
  );
};

export default SomeBox;
