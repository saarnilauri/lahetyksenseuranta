import React from "react";
import renderer from "react-test-renderer";

import LargeEpisodePlayer from "../large-episode-player";

const episodeData = {
  title: "Seurantakoodi Mk 16:15-16",
  episodeNumber: 1,
  slug: "seurantakoodi-mk-16-15-16",
  published: "25.11.2020",
  excerpt: {
    excerpt:
      "Podcastin avausjakso. Kuuntele mistä podcastissä on kyse ja ota käyttöön ensimmäinen lähetyksenseurantakoodi.",
  },
  podbeanUrl:
    "https://www.podbean.com/media/player/i7h2y-f050a8?from=pb6admin&download=1&version=1&auto=0&share=0&download=1&rtl=0&fonts=Helvetica&skin=2&pfauth=&btn-skin=109",
  tags: [{ title: "Lähetyskäsky" }],
  bibleReference: [
    {
      title: "Markuksen evankeliumi 16:15-16",
      shortName: "Mk 16:15-16",
      text: { text: "Test verse" },
    },
  ],
  image: {
    fluid: {
      tracedSVG:
        "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='350'%20height='196'%20viewBox='0%200%20350%20196'%20preserveAspectRatio='none'%3e%3cpath%20d='M0%2098v98h351V0H0v98m289-87c-2%203%200%205%203%203h9a2992%202992%200%200112-2c-1-4-2-5-5-3h-1c-2-2-5-1-5%202l-1%202-2-2c-3-4-7-4-10%200m27-2l-2%203c1%203%204%203%208%202h5c5%202%2011-2%206-5-3-1-8%200-9%202h-1V9c0-1-4-2-7%200m-148%202l-7%201-8%202c-2%201-17%203-34%203l-10%202-2%201-3%203-4%203-2%202c-2%202-3%203-5%203l-5%202-10%206c-6%202-6%203-7%205l1%203c1%202-3%205-6%205s-6%201-7%203v3c0%203-5%204-22%204-19%201-20%201-18%207%202%204%204%2016%204%2021-1%204%200%206%206%209l3%203%203%205%202%207%201%202h1l2%202c2%200%203%201%203%202l2%201%201-1c-1-1%200-1%201-1v1l4%201h4l9%201%2014%201%2018%206%201%201%202%201c2%201%203%202%204%201s4%200%204%201l2%201v3c-2%201-2%202%200%207l2%205c-1%200-4%207-3%208l-2%202-1%202%201%202%201%201%201-1%202%201%201%202h4c2%200%203%200%202%201s-1%201%201%201c2%201%202%200%202-1-1-1%201-2%202%200l2%201v1h1l2%201c-1%201%206%202%209%200l6-1c6%200%209-2%205-3-1-1-1-1%201-1l4%201v1l-3%201%201%201c1-1%203%200%203%201l5%201c3%200%2010%203%207%203l-1%201h4c1%202%200%202-2%202h-3l2%201c4%201%208-1%208-4%200-2%201-3%2010-3h25l14%204h1l1%201v-3l-1-2%203-2h3l3%201-1-2v-1c1%200%202%200%201-1l1-2%202-2c0-1%204-4%205-2h2c2-1%202-1%203%201h1c1-2%207-2%208-1h3c2-1%202-1%202%201%200%201%206%201%209-1h4l4-1%202-2v4l3-1c1-1%203-2%2010-2%202%200%202%200%201-1-2-2%201-3%205-2l9%201c6%200%206%200%201%202s-9%205-6%205l2-1h1l4-1c1-1%203-3%205-3l3-2h5c2-2%201-3-1-3l-2-3h1c0%202%200%202%202%200v-2l-2%201c0-2%209-9%2010-7s5%202%206%200l2-1c1%201%202%200%203-1h2l2-5c0-5%201-6%202-6%201-1%202-1%201-2h-4c-4-1-4-1-3%201l-1%201h-4c-1%201-1%201-1-1%201-2%200-3-2%200l-2%201%201-2v-2l-3%201h-1v-6h-1c-1%201-1%200-1-2l-1-3-1-1h1l1-2v-4l1-1c0%202%204%204%205%202v-3l-1-1h-2v-1l1-1c0-1-2%200-3%202l-3%202V97c1-1%202-2%203-1h3l-2-1c-2%200-2%200%200-4l3-4%201-1v-4%201c-2-1-6%205-6%207v1l-1%202h-1v-1l-1-1-1%201h-1l2-3%202-1h-2c-2%200-3-1%200-2%202-1%201-4-1-5-4%200-4-2%200-1%201%200%202%200%201-1-2%200-2%200-1-1v-2c1-2%201-2-1-2s-5-3-5-4c1-2-3-4-8-4-4%200-4%200-2-1v-2c0-1-2-4-4-4l-3-6c0-2-2-3-4-3l-3-2c-1-1-2-2-3-1l-1-1-1-2-6-3c-2-2-5-4-6-3v-2h-1l-2-1-5-4-4-2h-1l-5-1-5-1-2-1-5-1-6-1-7-2a171%20171%200%2001-18-4l-5-2-8-2-5-1-10-1-10-1h-8m-3%2050c-3%201-4%203-2%205%201%201%201%201-1%201s-2%200-1%201v1l3%201c4%201%204%203%201%204l-4%201-3%201h3c2-1%203%200%203%201v3c-1-1-1-1-2%201l-1%201c0-2-1-1-2%202l-3%208c-2%204-3%206-1%206l-1%203-3%204-1%201v4l-1%204c-2%200-1%204%201%205v1l-1%203v7c-1%202%201%206%204%207l4%203%201%201c1-1%201%200%201%201%200%202%205%207%206%206l1%201-3%201c-3%200-2%201%202%202l3%201%201%202%201%203%201%203%201%201v1l1-2h7c5%200%205-1%205-3l1-2%201-1-1-2-1-4%201-4h1l2%202v-1l-1-2-2-3c-1-1-1-1-1%201%201%203%200%202-3-4l-2-5c1%200%201-1-1-1-3-2-4-14%200-18l2-4c3-18%204-21%206-21l2-2%202-2c1-1%201-1-2-2-2-1-3-3-2-3l-5-1c-2%200-1-2%202-3h2l-3-2-3-3-3-2-2-3c1-2%200-4-3-5h-7m133%206l-1%202-1%204c-1%201%200%205%202%204l1%203c0%205%201%208%203%207h3c3%201%203%201%204-1l1-2c1-1%201-1-1-2l-2-1-2-1c-1-1%200-1%201-1l3%201%201%201%201-2c0-2-1-2-2-2l-2-2h2c1%200%202%200%202-2l-4-1c-7%201-11-1-7-4v-2l-2%201m-85%206v2c-1%202-2%202-2%200s0-2-1-1c-2%202-2%205%200%205v2c0%202%201%205%203%205l1-1c0-2%203-2%204-1%202%204%208%206%208%204-1-2-2-4-2-2l-4-3c-3-3-4-4-3-6l-1-3c-1-1-1%200-1%201l-1-1-1-1M46%20132h-3v31h19l1-2c0-2%200-2-6-2h-6v-13c0-15%200-15-5-14m22%202c-4%203-3%207%206%2015l7%208c-1%203-6%202-7-1l-1-2h-4c-8%200-4%208%204%209%2015%203%2021-7%2010-15l-7-6c-3-3-3-3-2-5h4l1%201h2c0%201%201%202%204%202%204%200%205-2%202-5-2-3-15-4-19-1m139%2017l-3%201h-2l-1%203h-6c-3-1-5%200-5%201%200%202%205%203%209%202h3c-2%201-1%201%203%201a300%20300%200%20017-2c-1-1%200-1%203-1s4%200%203-2l-4-1c-5%200-5%200-2%201%201%201%201%201-2%201s-4-1-2-3l1-2-2%201'%20fill='%23d3d3d3'%20fill-rule='evenodd'/%3e%3c/svg%3e",
      aspectRatio: 1.7857142857142858,
      src:
        "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=350&h=196&q=50&fit=scale",
      srcSet:
        "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=88&h=49&q=50&fit=scale 88w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=175&h=98&q=50&fit=scale 175w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=350&h=196&q=50&fit=scale 350w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=525&h=294&q=50&fit=scale 525w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=700&h=392&q=50&fit=scale 700w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1050&h=588&q=50&fit=scale 1050w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1400&h=784&q=50&fit=scale 1400w",
      sizes: "(max-width: 350px) 100vw, 350px",
    },
  },
  description: {
    raw:
      '{"data":{},"content":[{"data":{},"content":[{"data":{},"marks":[],"value":"Podcastin avausjakso. Kuuntele mistä podcastissä on kyse ja ota käyttöön ensimmäinen lähetyksenseurantakoodi.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat ligula, sollicitudin sed nibh vel, dictum elementum nisl. Aliquam sollicitudin odio sed augue ultrices, eu semper lacus porttitor. Pellentesque pulvinar lacus dui, sit amet rhoncus justo pretium at. Vivamus quis lectus sollicitudin, tempor est a, egestas dui. Sed vitae mi elit. Etiam et dictum diam. Nunc gravida fringilla odio accumsan accumsan. Nunc in sapien tincidunt metus congue laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas pretium, dolor non fermentum hendrerit, felis lorem mattis nisi, a consectetur tortor risus in turpis. Suspendisse sollicitudin sed mauris nec tincidunt. Maecenas rhoncus neque erat, a tempus purus tempus eget. In nec tincidunt odio, ut sagittis nibh.","nodeType":"text"}],"nodeType":"paragraph"},{"data":{},"content":[{"data":{},"marks":[],"value":"Proin id ex blandit, fringilla mi in, suscipit dolor. Curabitur maximus neque augue, ut interdum tellus vestibulum vel. Pellentesque bibendum mi et quam efficitur, sit amet semper arcu efficitur. Curabitur nulla velit, volutpat volutpat neque sed, elementum aliquet leo. Ut imperdiet nunc arcu, sed feugiat nisl cursus ut. Curabitur dignissim commodo erat. Mauris egestas felis sit amet enim faucibus, id molestie sem elementum. Quisque rhoncus a justo sit amet egestas. Nam vel libero dictum, tempor ante nec, venenatis dui. Proin eget tempor lorem. Proin tincidunt varius tellus in posuere. Phasellus vestibulum eleifend lorem a pulvinar. Integer tristique nulla tempus augue fermentum, quis sollicitudin arcu maximus. Etiam pretium, lectus sed euismod congue, quam ante ornare felis, sit amet placerat risus nibh et sem. Nam ullamcorper libero sed felis dignissim, non vulputate sem euismod. Morbi condimentum nunc quis felis pulvinar, nec pellentesque mauris molestie.","nodeType":"text"}],"nodeType":"paragraph"}],"nodeType":"document"}',
  },
};

describe("LargeEpisodePlayer", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<LargeEpisodePlayer episode={episodeData} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
