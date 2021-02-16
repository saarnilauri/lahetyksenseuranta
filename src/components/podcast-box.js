import React from "react";
import H4 from "./h4";
import TextBox from "./text-box";
import IconPodcast from "./icon-podcast";
import IconRss from "./icon-rss";
import IconSpotify from "./icon-spotify";
import SROnly from "./sr-only-text";

const PodcastBox = () => (
  <TextBox>
    <TextBox.Title>Kuuntele ja seuraa</TextBox.Title>
    <TextBox.Body>
      <TextBox.Padder>
        <H4>Spotify</H4>
        <div className="mb-3">
          <a
            href="https://open.spotify.com/show/09mX3sfrlPijhlbAuliBnr?si=ADnOTiCSTLmrtHmXwnWOiA"
            target="_blank"
            rel="noreferrer"
          >
            <IconSpotify />
            <SROnly>Avaa Spotify</SROnly>
          </a>
        </div>
        <p className="text-center md:text-xs lg:text-base mb-5">
          Käyttätkö Spotifytä podcastien kuunteluun?
        </p>
        <H4>Apple Podcast</H4>
        <div className="mb-3">
          <a
            href="https://podcasts.apple.com/fi/podcast/l%C3%A4hetyksenseuranta-podcast/id1537309218"
            target="_blank"
            rel="noreferrer"
          >
            <IconPodcast />
            <SROnly>Avaa Spotify</SROnly>
          </a>
        </div>
        <p className="text-center md:text-xs lg:text-base mb-5">
          Mikäli olet Apple käyttäjä.
        </p>
        <H4>RSS</H4>
        <div className="mb-3">
          <a
            href="https://feed.podbean.com/lahetyksenseuranta/feed.xml"
            target="_blank"
            rel="noreferrer"
          >
            <IconRss />
            <SROnly>Avaa RSS-syöte</SROnly>
          </a>
        </div>
        <p className="text-center md:text-xs lg:text-base mb-5">
          Vanha kunnon RSS syöte.
        </p>
      </TextBox.Padder>
    </TextBox.Body>
  </TextBox>
);

export default PodcastBox;
