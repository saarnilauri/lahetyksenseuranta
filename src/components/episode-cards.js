import React from 'react';
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import IconCalendar from './icon-calendar';
import IconWithText from './icon-with-text';
import IconClock from './icon-clock';
import IconBible from './icon-bible';

const EpisodeCards = ({episodes}) => (
<div className="episode-cards-wrapper mb-10">

<div class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 place-content-stretch container mx-auto my-auto px-5 md:px-0">
    {episodes.map(episode => (
            
        <div key={episode.node.contentful_id} class="w-full shadow-md hover:shadow-lg hover:bg-gray-100 bg-white my-10 md:my-0">
        
        <Img className="overflow-hidden card-image"
        alt={episode.node.title}
        fluid={episode.node.image.fluid}/>
       
        <div class="p-4">
          <h3 class="font-bold text-gray-600 text-lg my-2 uppercase">Jakso {episode.node.episodeNumber} - {episode.node.title}</h3>
          
          <div className="flex flex-row mb-2">
            <IconWithText text={episode.node.published}><IconCalendar small/></IconWithText>
            <IconWithText text={episode.node.duration}><IconClock small/></IconWithText>
            <IconWithText text={episode.node.bibleReference[0].shortName}><IconBible small/></IconWithText>
          </div>
          
          <p class="text-left">{episode.node.excerpt.excerpt}</p>
          <div class="mt-5">
            <Link to={`/podcast/${episode.node.slug}`} class="hover:bg-gray-700 py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Avaa jakso</Link>
          </div>
        </div>
    </div>
        
    ))}
    </div>
</div>
)

export default EpisodeCards;