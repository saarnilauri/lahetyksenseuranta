import React from "react";

import Popover from "./popover";
import Container from "./container";
import Player from "./player";
import IconCalendar from "./icon-calendar";
import IconClock from "./icon-clock";
import IconBible from "./icon-bible";

const IconWrapper = ({ children }) => <div className="mr-2">{children}</div>;
const IconTextWrapper = ({ children }) => (
  <div className="mr-5">{children}</div>
);

const LargeEpisodePlayer = ({ episode }) => {
  return (
    <Container>
      <div className="bg-gray-700 py-5 px-5 md:py-10 md:px-10 text-white">
        <div className="flex flex-col md:flex-row content-center items-center mb-10">
          <div className="episode-number text-xl xl:text-4xl py-4 px-4 bg-white text-gray-900 uppercase md:mr-10 mb-5">
            Jakso {episode.episodeNumber}
          </div>
          <div>
            <h2 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl mb-5 font-bold">
              {episode.title}
            </h2>
            <div className="flex flex-col md:flex-row pl-100">
              <div className="flex flex-row items-center mb-2 md:mb-0">
                <IconWrapper>
                  <IconCalendar />
                </IconWrapper>
                <IconTextWrapper>
                  <p>{episode.published}</p>
                </IconTextWrapper>
              </div>
              <div className="flex flex-row items-center mb-2 md:mb-0">
                <IconWrapper>
                  <IconClock />
                </IconWrapper>
                <IconTextWrapper>
                  <p>19m 20s</p>
                </IconTextWrapper>
              </div>
              <div className="flex flex-row items-center">
                <IconWrapper>
                  <IconBible />
                </IconWrapper>
                <IconTextWrapper>
                  {episode.bibleReference.map((item) => (
                    <Popover
                      key={item.shortName}
                      trigger={item.shortName}
                      title={item.title}
                      content={item.text.text}
                    />
                  ))}
                </IconTextWrapper>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-5 episode-excerpt">
          {episode.excerpt.excerpt}
        </div>
        <Player url={episode.podbeanUrl} image={episode.image} />
      </div>
    </Container>
  );
};

export default LargeEpisodePlayer;
