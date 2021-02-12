import React from "react";
import renderer from "react-test-renderer";

import EpisodeCards from "../episode-cards";

const episodesDataWithoutNode = [
  {
    contentful_id: "6CKymR5gXT6JrEHg87Er14",
    title: "Seurantakoodi Mk 16:15-16",
    episodeNumber: 1,
    slug: "seurantakoodi-mk-16-15-16",
    published: "25.11.2020",
    excerpt: {
      excerpt:
        "Podcastin avausjakso. Kuuntele mistä podcastissä on kyse ja ota käyttöön ensimmäinen lähetyksenseurantakoodi.",
    },
    bibleReference: [
      {
        title: "Markuksen evankeliumi 16:15-16",
        shortName: "Mk 6:15-16",
        text: {
          text:
            "15 Hän sanoi heille: »Menkää kaikkialle maailmaan ja julistakaa evankeliumi kaikille luoduille. 16 Joka sen uskoo ja saa kasteen, on pelastuva. Joka ei usko, se tuomitaan kadotukseen.",
        },
      },
    ],
    image: {
      fluid: {
        base64:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAYDAQQF/8QAKBAAAQMCBAYCAwAAAAAAAAAAAQIDBAARBQYSIRMUIjFBUXGBYZGx/8QAGAEBAAMBAAAAAAAAAAAAAAAAAgABBAb/xAAhEQABAwMEAwAAAAAAAAAAAAABAAIDESExEhMyUVJxkf/aAAwDAQACEQMRAD8Ancm5YisyUTMyxzy7jeuMyTYOggkKJG9vQ8n43oJOG5fxLB3lrgMx5bTikNcv0ki3lPm3beujgLy38DhmezxilAQ0Qvsjq0jttYJNcYWlPAdU7cPB9zX5I6jb6tak1zClLDJFzFK3HpQ+KQX2py23NB07ApbCQR72FKp8WMTnOt5CVaRcKNjSic2RGFgxEcjMttMzpiW2zqSkLFgfi35P7raRzMpnhOT5Wja4CgL2+qUrNUrpTEx2WheYvLsdxWpx+StXtSgT/KUpU1HtVsReI+Bf/9k=",
        aspectRatio: 1.7850467289719627,
        src:
          "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=573&h=321&q=50&fit=crop",
        srcSet:
          "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=143&h=80&q=50&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=287&h=161&q=50&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=573&h=321&q=50&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=860&h=482&q=50&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1146&h=642&q=50&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1400&h=784&q=50&fit=crop 1400w",
        srcWebp:
          "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=573&h=321&q=50&fm=webp&fit=crop",
        srcSetWebp:
          "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=143&h=80&q=50&fm=webp&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=287&h=161&q=50&fm=webp&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=573&h=321&q=50&fm=webp&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=860&h=482&q=50&fm=webp&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1146&h=642&q=50&fm=webp&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1400&h=784&q=50&fm=webp&fit=crop 1400w",
        sizes: "(max-width: 573px) 100vw, 573px",
      },
    },
  },
  {
    contentful_id: "19v87tUJActgRwDKGC0P8r",
    title: "Seurantakoodi Mt. 28:18-20",
    episodeNumber: 2,
    slug: "seurantakoodi-mt-28-18-20",
    published: "27.11.2020",
    excerpt: {
      excerpt:
        "Tämän kerran seurantakoodi on lähetyskäsky, joka päättää Matteuksen evankeliumin. Miten se liittyy hampurilaiseen? Se selviää kuuntelemalla.",
    },
    bibleReference: [
      {
        title: "Matteuksen evankeliumi 28:18-20",
        shortName: "Mt. 28:18-20",
        text: {
          text:
            "18 Jeesus tuli heidän luokseen ja puhui heille näin: »Minulle on annettu kaikki valta taivaassa ja maan päällä. 19 Menkää siis ja tehkää kaikki kansat minun opetuslapsikseni: kastakaa heitä Isän ja Pojan ja Pyhän Hengen nimeen 20 ja opettakaa heitä noudattamaan kaikkea, mitä minä olen käskenyt teidän noudattaa. Ja katso, minä olen teidän kanssanne kaikki päivät maailman loppuun asti.»",
        },
      },
    ],
    image: {
      fluid: {
        base64:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAUABQDAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAgUGBAf/xAAqEAACAQMDAgQHAQAAAAAAAAABAgMEBREAEiEGMQcTMkEWIkJRYYGxsv/EABkBAAIDAQAAAAAAAAAAAAAAAAQHAwUGCf/EADIRAAECBAMEBgsAAAAAAAAAAAECEQADBCEFEjEGQVFxBxMVgZGxFyIyUlNhkqHS0/D/2gAMAwEAAhEDEQA/AKe5U3w90u1voqyChvl4jc26CsytLNLHyA5AyTlQOMYz35wUlslgdNV0E3EsVnkSTogEDMxLZibD1ha45sWjOSxMQtCinMnfygaOZI3tlOKiC4V9WsjtJEBsO0fOSOQo5wAftjvpYVUuamZPqFS+pSkhkkXvoA+o+Y5iCJ0uYc00AJD6c+ENK20vVyh5I6Z2C7chEH8UaqFYgubdX2AHlAJUs8P7ujit2bre+W3pmmuN3hWltE7tFJCA0gkl80OwJUZCiB8A+44/D3qJQosIXSpS6NW7yW8RDeqdh6ql2fOIhYLJzkb8py79HZaS3Am72jFY/EWktExpt9zuk1Szy+ZM6xlTnPpTAzz799YGow2bPGdkpCWFnPnCaUmaR7JilbxIpIQqPBUhgOQcsR+ydVPZkxVwRAjr92FF98Xrl1DVtUVVrtSlxh4oopFiY4I3FPMxuwx5AzydO2onGpJzgX3DSOiiejmgFGKA1c4yhuKkaas/VuzgFtHAtaJiG70dOcxdPWiPv6InHfv9egVSUK1EVfolwL4k3xR+uBrLua+cyvTojHjCTTAf70KmgpkhggREeiDZ4lyub9SPwj//2Q==",
        aspectRatio: 1.7850467289719627,
        src:
          "//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=573&h=321&q=50&fit=crop",
        srcSet:
          "//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=143&h=80&q=50&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=287&h=161&q=50&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=573&h=321&q=50&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=860&h=482&q=50&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=1146&h=642&q=50&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=1400&h=784&q=50&fit=crop 1400w",
        srcWebp:
          "//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=573&h=321&q=50&fm=webp&fit=crop",
        srcSetWebp:
          "//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=143&h=80&q=50&fm=webp&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=287&h=161&q=50&fm=webp&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=573&h=321&q=50&fm=webp&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=860&h=482&q=50&fm=webp&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=1146&h=642&q=50&fm=webp&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=1400&h=784&q=50&fm=webp&fit=crop 1400w",
        sizes: "(max-width: 573px) 100vw, 573px",
      },
    },
  },
];

const episodesDataWithNode = [
  {
    node: {
      contentful_id: "6Tx8SctSxbUzX3VWshU5Zs",
      title: "Seurantakoodi Lk 2:6-7",
      episodeNumber: 3,
      slug: "seurantakoodi-lk-2-6-7",
      published: "9.1.2021",
      duration: "15:37",
      excerpt: {
        excerpt:
          "Joulu meni jo. Silti jaksossa avataan seurantakoodina meille monille tuttua jouluevankeliumia. Miten se liittyy lähetystyöhön. Ota selvää kuuntelemalla uusin jakso.",
      },
      podbeanUrl:
        "https://mcdn.podbean.com/mf/download/xrza3d/jakso_3_-_912021_2200adv9y.mp3",
      tags: [
        {
          title: "Joulu",
        },
        {
          title: "Kulttuuri",
        },
        {
          title: "Traditio",
        },
        {
          title: "Kontekstualisointi",
        },
      ],
      bibleReference: [
        {
          title: "Luukkaan evankeliumi 2:6-7",
          shortName: "Lk 2:6-7",
          text: {
            text:
              "6 Heidän siellä ollessaan tuli Marian synnyttämisen aika, 7 ja hän synnytti pojan, esikoisensa. Hän kapaloi lapsen ja pani hänet seimeen, koska heille ei ollut tilaa majapaikassa.",
          },
        },
      ],
      image: {
        fluid: {
          base64:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCAAUABQDAREAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABgcBCP/EACwQAAEDAwIEAwkAAAAAAAAAAAECAwQFESEAEgYHMVEUQnETFSIjJDJBYYH/xAAaAQACAgMAAAAAAAAAAAAAAAADBAIFAAYH/8QALxEAAQIEAwYDCQAAAAAAAAAAAQIDAAQRIQUSkQYXMVHB0lNh0RYiIzJBcYGx8P/aAAwDAQACEQMRAD8Ar1DpzaZzSptKdjQ0OPIcEoWWrY5tSQB5VJClA9bW76HN7RzrhssJFuA6m8BlNmJBtN28xvcnoLRLecUduQyqVTpSqfFAXsEp3c2tbasbUlNuxCs5NtLTGMvTScrhr+tOcMS2BNS6/hD115RNS3WZDEd9moyAh5BX9IttlJO43KgLXVcG5OenbSjK3VJqlVNekMvSjaFUWmsdRo5hJrNZlUOTGCWlyFsR3mj91g5YKzjLS8+mOp1VqBKa/SN0VgDzcmJ3MOFSPL3e4Wg1wwyrxkJqqU8Icqjz7S2XRuLjSGiDk+W6047i/XUKKBFDaKdRSQedOsBInCVSqMCAIlMbbajRmmT4dDe0qCApRyL9VHTC31NqIArAw2FgEqpAfhHjCrcITJkpuT7xckKC0Cf8SYxsofKSjaE3CiPzj1NxqXmASBQD7+sdl9jpctFhT7hTyqnT5K08uFoQyOblbkwfCGNBASlQQ8A6XW9xuSlZWSD+/wCdNYHCDwhTd/h3iOap7Yyn83uJqdAiwmX2vYxm0tI3BRO0Cwud2dTL1blI/vzEd32HeI5qntj/2Q==",
          aspectRatio: 1.7850467289719627,
          src:
            "//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=573&h=321&q=50&fit=crop",
          srcSet:
            "//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=143&h=80&q=50&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=287&h=161&q=50&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=573&h=321&q=50&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=860&h=482&q=50&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=1146&h=642&q=50&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=1400&h=784&q=50&fit=crop 1400w",
          srcWebp:
            "//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=573&h=321&q=50&fm=webp&fit=crop",
          srcSetWebp:
            "//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=143&h=80&q=50&fm=webp&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=287&h=161&q=50&fm=webp&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=573&h=321&q=50&fm=webp&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=860&h=482&q=50&fm=webp&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=1146&h=642&q=50&fm=webp&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/6ulhRKaz2osiC4BPIP6elS/e9d8999dad655754f96a1d1ae2ee8ac7/jakso-3.jpg?w=1400&h=784&q=50&fm=webp&fit=crop 1400w",
          sizes: "(max-width: 573px) 100vw, 573px",
        },
      },
    },
  },
  {
    node: {
      contentful_id: "19v87tUJActgRwDKGC0P8r",
      title: "Seurantakoodi Mt. 28:18-20",
      episodeNumber: 2,
      slug: "seurantakoodi-mt-28-18-20",
      published: "27.11.2020",
      duration: "19:53",
      excerpt: {
        excerpt:
          "Tämän kerran seurantakoodi on lähetyskäsky, joka päättää Matteuksen evankeliumin. Miten se liittyy hampurilaiseen? Se selviää kuuntelemalla.",
      },
      podbeanUrl:
        "https://mcdn.podbean.com/mf/download/dzneyg/jakso_2_-_27112020_230390h6w.mp3",
      tags: [
        {
          title: "Opetuslapseuttaminen",
        },
        {
          title: "Lähetyskäsky",
        },
      ],
      bibleReference: [
        {
          title: "Matteuksen evankeliumi 28:18-20",
          shortName: "Mt. 28:18-20",
          text: {
            text:
              "18 Jeesus tuli heidän luokseen ja puhui heille näin: »Minulle on annettu kaikki valta taivaassa ja maan päällä. 19 Menkää siis ja tehkää kaikki kansat minun opetuslapsikseni: kastakaa heitä Isän ja Pojan ja Pyhän Hengen nimeen 20 ja opettakaa heitä noudattamaan kaikkea, mitä minä olen käskenyt teidän noudattaa. Ja katso, minä olen teidän kanssanne kaikki päivät maailman loppuun asti.»",
          },
        },
      ],
      image: {
        fluid: {
          base64:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAUABQDAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAgUGBAf/xAAqEAACAQMDAgQHAQAAAAAAAAABAgMEBREAEiEGMQcTMkEWIkJRYYGxsv/EABkBAAIDAQAAAAAAAAAAAAAAAAQHAwUGCf/EADIRAAECBAMEBgsAAAAAAAAAAAECEQADBCEFEjEGQVFxBxMVgZGxFyIyUlNhkqHS0/D/2gAMAwEAAhEDEQA/AKe5U3w90u1voqyChvl4jc26CsytLNLHyA5AyTlQOMYz35wUlslgdNV0E3EsVnkSTogEDMxLZibD1ha45sWjOSxMQtCinMnfygaOZI3tlOKiC4V9WsjtJEBsO0fOSOQo5wAftjvpYVUuamZPqFS+pSkhkkXvoA+o+Y5iCJ0uYc00AJD6c+ENK20vVyh5I6Z2C7chEH8UaqFYgubdX2AHlAJUs8P7ujit2bre+W3pmmuN3hWltE7tFJCA0gkl80OwJUZCiB8A+44/D3qJQosIXSpS6NW7yW8RDeqdh6ql2fOIhYLJzkb8py79HZaS3Am72jFY/EWktExpt9zuk1Szy+ZM6xlTnPpTAzz799YGow2bPGdkpCWFnPnCaUmaR7JilbxIpIQqPBUhgOQcsR+ydVPZkxVwRAjr92FF98Xrl1DVtUVVrtSlxh4oopFiY4I3FPMxuwx5AzydO2onGpJzgX3DSOiiejmgFGKA1c4yhuKkaas/VuzgFtHAtaJiG70dOcxdPWiPv6InHfv9egVSUK1EVfolwL4k3xR+uBrLua+cyvTojHjCTTAf70KmgpkhggREeiDZ4lyub9SPwj//2Q==",
          aspectRatio: 1.7850467289719627,
          src:
            "//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=573&h=321&q=50&fit=crop",
          srcSet:
            "//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=143&h=80&q=50&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=287&h=161&q=50&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=573&h=321&q=50&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=860&h=482&q=50&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=1146&h=642&q=50&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=1400&h=784&q=50&fit=crop 1400w",
          srcWebp:
            "//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=573&h=321&q=50&fm=webp&fit=crop",
          srcSetWebp:
            "//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=143&h=80&q=50&fm=webp&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=287&h=161&q=50&fm=webp&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=573&h=321&q=50&fm=webp&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=860&h=482&q=50&fm=webp&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=1146&h=642&q=50&fm=webp&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/74XqCMX6q1HXU0Po0Pre5f/2132b417954cd45dabf75242ed0f2b43/jakso2.jpg?w=1400&h=784&q=50&fm=webp&fit=crop 1400w",
          sizes: "(max-width: 573px) 100vw, 573px",
        },
      },
    },
  },
  {
    node: {
      contentful_id: "6CKymR5gXT6JrEHg87Er14",
      title: "Seurantakoodi Mk 16:15-16",
      episodeNumber: 1,
      slug: "seurantakoodi-mk-16-15-16",
      published: "25.11.2020",
      duration: "18:43",
      excerpt: {
        excerpt:
          "Podcastin avausjakso. Kuuntele mistä podcastissä on kyse ja ota käyttöön ensimmäinen lähetyksenseurantakoodi.",
      },
      podbeanUrl:
        "https://mcdn.podbean.com/mf/download/s4ffvt/jakso_16p6g4.mp3",
      tags: [
        {
          title: "Lähetyskäsky",
        },
      ],
      bibleReference: [
        {
          title: "Markuksen evankeliumi 16:15-16",
          shortName: "Mk 6:15-16",
          text: {
            text:
              "15 Hän sanoi heille: »Menkää kaikkialle maailmaan ja julistakaa evankeliumi kaikille luoduille. 16 Joka sen uskoo ja saa kasteen, on pelastuva. Joka ei usko, se tuomitaan kadotukseen.",
          },
        },
      ],
      image: {
        fluid: {
          base64:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAlgCWAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQEAAwAAAAAAAAAAAAAAAAYDAQQF/8QAKBAAAQMCBAYCAwAAAAAAAAAAAQIDBAARBQYSIRMUIjFBUXGBYZGx/8QAGAEBAAMBAAAAAAAAAAAAAAAAAgABBAb/xAAhEQABAwMEAwAAAAAAAAAAAAABAAIDESExEhMyUVJxkf/aAAwDAQACEQMRAD8Ancm5YisyUTMyxzy7jeuMyTYOggkKJG9vQ8n43oJOG5fxLB3lrgMx5bTikNcv0ki3lPm3beujgLy38DhmezxilAQ0Qvsjq0jttYJNcYWlPAdU7cPB9zX5I6jb6tak1zClLDJFzFK3HpQ+KQX2py23NB07ApbCQR72FKp8WMTnOt5CVaRcKNjSic2RGFgxEcjMttMzpiW2zqSkLFgfi35P7raRzMpnhOT5Wja4CgL2+qUrNUrpTEx2WheYvLsdxWpx+StXtSgT/KUpU1HtVsReI+Bf/9k=",
          aspectRatio: 1.7850467289719627,
          src:
            "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=573&h=321&q=50&fit=crop",
          srcSet:
            "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=143&h=80&q=50&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=287&h=161&q=50&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=573&h=321&q=50&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=860&h=482&q=50&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1146&h=642&q=50&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1400&h=784&q=50&fit=crop 1400w",
          srcWebp:
            "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=573&h=321&q=50&fm=webp&fit=crop",
          srcSetWebp:
            "//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=143&h=80&q=50&fm=webp&fit=crop 143w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=287&h=161&q=50&fm=webp&fit=crop 287w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=573&h=321&q=50&fm=webp&fit=crop 573w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=860&h=482&q=50&fm=webp&fit=crop 860w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1146&h=642&q=50&fm=webp&fit=crop 1146w,\n//images.ctfassets.net/1ytenrlcq9nc/1fbBUWeiHM0e7HWZcPRta2/19318bedb93604a4678f880aea025606/jakso-1.jpg?w=1400&h=784&q=50&fm=webp&fit=crop 1400w",
          sizes: "(max-width: 573px) 100vw, 573px",
        },
      },
    },
  },
];

describe("EpisodeCards", () => {
  it("renders correctly without the node key", () => {
    const tree = renderer
      .create(<EpisodeCards episodes={episodesDataWithoutNode} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with the node key", () => {
    const tree = renderer
      .create(<EpisodeCards episodes={episodesDataWithoutNode} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
