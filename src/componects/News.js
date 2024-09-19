// import React, { Component } from 'react';
// import NewsItem from './NewsItem';
// // import PropTypes from 'prop-types';

// export default class News extends Component {
//   constructor(props) {
//     super(props);
//     // Initialize state here
//     this.state = {
//       articles: [
//         {
//           "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//           "author": null,
//           "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//           "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//           "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//           "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//           "publishedAt": "2020-04-27T11:41:47Z",
//           "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//         },
//         {
//           "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//           "author": null,
//           "title": "What we learned from watching the 1992 World Cup final in full enjoyment you can do it",
//           "description": "Wides, lbw calls, swing - plenty of things were different in white-ball ",
//           "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//           "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//           "publishedAt": "2020-03-30T15:26:05Z",
//           "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//         }
//       ],
//       loading: false
//     };
//   }

//   render() {
//     return (
//       <div className='container my-3'>
//         <h2>NewsMonkey - Top Headlines</h2>
//         <div className="row">
//           {this.state.articles.map((element) => (
//             <div className="col-md-4" key={element.url}>
//               <NewsItem 
//                 title={element.title} 
//                 description={element.description} 
//                 imageUrl={element.urlToImage} 
//                 newsUrl={element.url} // Renamed to lowercase for consistency
//               /> 
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';
import NewsItem from './NewsItem';
// import PropTypes from 'prop-types';

export default class News extends Component {
  constructor(props) {
    super(props);
    // Initialize state here
    this.state = {
      articles: [
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full enjoyment you can do it",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball ",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        },

        {
          "source": {
          "id": null,
          "name": "MacRumors"
          },
          "author": "Tim Hardwick",
          "title": "New iPhone 16 and iPhone 16 Pro Colors Revealed Ahead of Apple Event",
          "description": "Apple is \"shaking up its color palette\" for its iPhone 16 lineup this year, according to well-connected Bloomberg reporter Mark Gurman.\n\n\n\nEarly iPhone 16 Pro dummy models via Sonny Dickson\n\nAccording to Gurman, the ‌iPhone 16 Pro‌ models will come in a Gold …",
          "url": "https://www.macrumors.com/2024/09/06/revealed-all-new-iphone-16-pro-colors/",
          "urlToImage": "https://images.macrumors.com/t/D1-gnccGw9A433Rn0zZjNIG9UXg=/1920x/article-new/2024/08/iphone-16-pro-bronze.jpg",
          "publishedAt": "2024-09-06T12:01:58Z",
          "content": "Apple is \"shaking up its color palette\" for its iPhone 16 lineup this year, according to well-connected Bloomberg reporter Mark Gurman.\r\nAccording to Gurman, the ‌iPhone 16 Pro‌ models will come in a… [+911 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "MacRumors"
          },
          "author": "Tim Hardwick",
          "title": "TrendForce: Both iPhone 16 Pro Models to Feature 256GB Base Storage",
          "description": "Apple is expected to offer both the iPhone 16 Pro and iPhone 16 Pro Max with a minimum of 256GB storage, doing away with the 128GB starting option on its smaller Pro model for the first time, according to a new TrendForce report.\n\n\n\n\n\nCurrently, Apple's 6.1-i…",
          "url": "https://www.macrumors.com/2024/09/06/both-iphone-16-pro-models-256gb-base-storage/",
          "urlToImage": "https://images.macrumors.com/t/a2140skqQ1W2Oy_NiPInMKotenY=/2500x/article-new/2024/01/iPhone-16-Pro-Right-Side-Feature.jpg",
          "publishedAt": "2024-09-06T09:16:35Z",
          "content": "Apple is expected to offer both the iPhone 16 Pro and iPhone 16 Pro Max with a minimum of 256GB storage, doing away with the 128GB starting option on its smaller Pro model for the first time, accordi… [+2432 chars]"
          },

          {
            "source": {
            "id": null,
            "name": "Journal du geek"
            },
            "author": "tristan carballeda",
            "title": "Après les puces, Qualcomm veut fabriquer des lunettes connectées",
            "description": "Qualcomm, Google et Samsung travaillent ensemble sur la conception d'une paire de lunettes connectées. Un projet pharaonique qui semble plaire en interne.",
            "url": "https://www.journaldugeek.com/2024/09/06/apres-les-puces-qualcomm-veut-fabriquer-des-lunettes-connectees/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/09/qualcomm-lunette-connectee.jpg",
            "publishedAt": "2024-09-06T08:06:53Z",
            "content": "Lan dernier ce sont trois géants qui ont signé un partenariat. Google, Samsung et Qualcomm ont échangé sur le futur du marché des smartphones. Alors que Google et Samsung sont bien implantés dans ce … [+2765 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Journal du geek"
            },
            "author": "Journal du Geek",
            "title": "En offrant 220€ sans condition à ses futurs clients, BoursoBank affole tout le marché",
            "description": "Anciennement connue sous le nom de Boursorama Banque, BoursoBank annonce un week-end généreux avec une prime XL pour tous les nouveaux clients. On vous explique ce qu'il faut faire pour recevoir 220 euros sur votre compte.",
            "url": "https://www.journaldugeek.com/bon-plan/en-offrant-220e-sans-condition-a-ses-futurs-clients-boursobank-affole-tout-le-marche/",
            "urlToImage": "https://www.journaldugeek.com/app/uploads/2023/05/argent-liquide-bonus-banque.jpg",
            "publishedAt": "2024-09-06T06:55:19Z",
            "content": "La rentrée est le moment idéal pour prendre de bonnes résolutions, notamment en matière de finances personnelles. Et si cette année, vous décidiez de dire adieu aux frais bancaires exorbitants et de … [+4155 chars]"
            },

            {
              "source": {
              "id": null,
              "name": "Applesfera.com"
              },
              "author": "Guille Lomener",
              "title": "Malas noticias: un tifón devastador se acerca al núcleo de fabricación y entrega del iPhone 16",
              "description": "El iPhone 16 ya se encuentra en la fase final de ensamblaje. Algunos modelos están ya fabricados desde el pasado mes de julio y la producción no cesa para hacer frente a una demanda histórica. Apple  de iPhone 16, una de las mayores previsiones en los últimos…",
              "url": "https://www.applesfera.com/iphone/malas-noticias-tifon-devastador-se-acerca-al-nucleo-fabricacion-entrega-iphone-16",
              "urlToImage": "https://i.blogs.es/ddf72b/tifon-iphone/840_560.jpeg",
              "publishedAt": "2024-09-06T12:01:52Z",
              "content": "El iPhone 16 ya se encuentra en la fase final de ensamblaje. Algunos modelos están ya fabricados desde el pasado mes de julio y la producción no cesa para hacer frente a una demanda histórica. Apple … [+3375 chars]"
              },
              {
              "source": {
              "id": null,
              "name": "Applesfera.com"
              },
              "author": "Álvaro García M.",
              "title": "12 dispositivos que no pueden estar cerca del router si quieres que el Internet de tus dispositivos Apple vaya rápido",
              "description": "Abres el navegador del iPhone, intentas únicamente entrar en Google y no carga. Es un problema. Puede ser muchísimos motivos como una mala cobertura en el iPhone o incluso un problema puntual. Sin embargo, si habitualmente experimentas problemas con la conexi…",
              "url": "https://www.applesfera.com/tutoriales/12-dispositivos-que-no-pueden-estar-cerca-router-quieres-que-internet-tus-dispositivos-apple-vaya-rapido",
              "urlToImage": "https://i.blogs.es/3cc390/wifi-iphone/840_560.jpeg",
              "publishedAt": "2024-09-06T10:01:50Z",
              "content": "Abres el navegador del iPhone, intentas únicamente entrar en Google y no carga. Es un problema. Puede ser muchísimos motivos como una mala cobertura en el iPhone o incluso un problema puntual. Sin em… [+6076 chars]"
              },

              {
                "source": {
                "id": "bbc-news",
                "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Alice Guo: Fury as Filipino officials pose with 'China spy mayor'",
                "description": "Disgraced ex-mayor Alice Guo flashes a wide smile and the peace sign in photos with her escorts.",
                "url": "https://www.bbc.co.uk/news/articles/cdxl8j8lyjzo",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/fff4/live/6a291370-6c13-11ef-a1f1-2172a664cae4.jpg",
                "publishedAt": "2024-09-06T06:37:16.0227382Z",
                "content": "By that time, Ms Guo had changed into an orange police detainee shirt. At the airport in Jakarta, she was casually dressed in a white striped t-shirt and jeans. She was also not in handcuffs.\r\nAnothe… [+727 chars]"
                },
                {
                "source": {
                "id": "bbc-news",
                "name": "BBC News"
                },
                "author": "BBC News",
                "title": "New York police commissioner and other officials' homes raided",
                "description": "Several top officials reportedly close to Mayor Eric Adams were targeted.",
                "url": "https://www.bbc.co.uk/news/articles/cy0r7vr2v2eo",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b84e/live/5163f360-6bcc-11ef-b43e-6916dcba5cbf.jpg",
                "publishedAt": "2024-09-06T03:52:12.1010159Z",
                "content": "The US Attorney's Office and the FBI, which reportedly participated in some of the raids, declined to comment. \r\nAs of Thursday evening, no official reason had been given for the raids. \r\nSources tol… [+1845 chars]"
                },
                {
                "source": {
                "id": "bbc-news",
                "name": "BBC News"
                },
                "author": "BBC News",
                "title": "Anger as concrete 'dam' appears on remote Cornish beach",
                "description": "Residents near Whipsiderry beach have urged people to leave the beach to be \"left wild\".",
                "url": "https://www.bbc.co.uk/news/articles/cgl23j439w4o",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/85ea/live/14523fb0-6aee-11ef-bca3-61f7b73970e9.jpg",
                "publishedAt": "2024-09-06T03:22:15.625736Z",
                "content": "Regular users of a hard-to-reach Cornish beach are angry and confused over a large piece of concrete that has appeared, and is blocking a natural pool.\r\nThe concrete, along with slabs and bricks, app… [+356 chars]"
                },
                {
                "source": {
                "id": "bbc-news",
                "name": "BBC News"
                },
                "author": "BBC News",
                "title": "7-Eleven owner rejects $38.7bn buyout offer from rival",
                "description": "Japanese owner of 7-Eleven says the offer from a Canadian rival 'grossly undervalues' the company.",
                "url": "https://www.bbc.co.uk/news/articles/cz9w74dwkgno",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/99de/live/27f1a0f0-6bee-11ef-9b5b-f1989844e211.jpg",
                "publishedAt": "2024-09-06T03:07:14.2574519Z",
                "content": "\"The Special Committee believes that your proposal is opportunistically timed and grossly undervalues our standalone path and the additional actionable avenues we see to realize and unlock shareholde… [+677 chars]"
                },
                {
                  "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
                  },
                  "author": "BBC News",
                  "title": "Why Canadian politics just got more unpredictable",
                  "description": "Justin Trudeau's Liberals lost the backing of a key parliamentary ally, meaning an early election is more likely.",
                  "url": "https://www.bbc.co.uk/news/articles/c5y3vpp1z91o",
                  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b66c/live/bbe59bc0-6bbe-11ef-9f70-95a4eda3a418.jpg",
                  "publishedAt": "2024-09-06T12:07:21.0030621Z",
                  "content": "\"We are absolutely aware ripping up this agreement makes an election more likely,\" Mr Singh, whose party is ranked fourth in the House of Commons, said at a press conference. \r\n\"Whenever an election … [+2430 chars]"
                  },
                  {
                  "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
                  },
                  "author": "BBC News",
                  "title": "West Bank: Israeli forces pull out of Jenin after major operation",
                  "description": "More than 20 Palestinians, including civilians, were killed in over a week of battles with militants.",
                  "url": "https://www.bbc.co.uk/news/articles/cpdl751l3djo",
                  "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ad06/live/d2d10e70-6c34-11ef-b43e-6916dcba5cbf.jpg",
                  "publishedAt": "2024-09-06T12:07:17.2684609Z",
                  "content": "The city of Tubas and al-Faraa refugee camp were also raided during the operation across the northern West Bank - the deadliest of its kind since the start of the war in Gaza last October triggered b… [+3419 chars]"
                  },
                  {
                  "source": {
                    "id": null,
                    "name": "Quartz India"
                    },
                    "author": "Madeline Fitzgerald",
                    "title": "'Founder mode': What's behind Silicon Valley's latest obsession?",
                    "description": "Yet another new buzzword has hit the world of startups, dividing the already fractious Silicon Valley community over the best way to manage a growing company.Read more...",
                    "url": "https://qz.com/manager-mode-founder-mode-startups-1851641323",
                    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/f4557640446fe1d1a0af0dabdebcfafd.jpg",
                    "publishedAt": "2024-09-06T09:00:00Z",
                    "content": "Yet another new buzzword has hit the world of startups, dividing the already fractious Silicon Valley community over the best way to manage a growing company.\r\nNoted entrepreneur Paul Graham recently… [+2099 chars]"
                    },
                  {
                  "source": {
                    "id": null,
                    "name": "Smartworld.it"
                    },
                    "author": "Alessandro Nodari",
                    "title": "Segway ZT3 Pro è il monopattino elettrico definitivo per qualsiasi terreno: caratteristiche e data di lancio",
                    "description": "Scoprite tutte le caratteristiche e la data di lancio del nuovo Segway ZT3 Pro, un monopattino elettrico votato all'off-road con ruote da 11 pollici\r\nL'articolo Segway ZT3 Pro è il monopattino elettrico definitivo per qualsiasi terreno: caratteristiche e data…",
                    "url": "https://mobility.smartworld.it/segway-zt3-pro-ufficiale.html",
                    "urlToImage": "https://mobility.smartworld.it/images/2024/09/06/segway-zt3-pro_1200x675.jpeg",
                    "publishedAt": "2024-09-06T08:58:00Z",
                    "content": "Segway-Ninebot ha appena annunciato il suo primo monopattino elettrico votato all'off-road: il nuovo ZT3 Pro. Dotato di ruote da 11 pollici e un'altezza da terra di 152 mm, il veicolo promette di acc… [+3851 chars]"
                    },
                  {
                  "source": {
                    "id": null,
                    "name": "Digiday"
                    },
                    "author": "Kristina Monllos",
                    "title": "Studios embrace ‘creator and meme culture’ as movies like Twisters, Beetlejuice Beetlejuice memeify marketing",
                    "description": "Roughly three quarters of younger consumers in the U.S. – Gen Z and millennials aged 15-43 – have decided to watch a movie following seeing “its online virality or memes about it,” per data from an August poll of over 1,600 consumers across the nation, per UT…",
                    "url": "http://digiday.com/marketing/studios-embrace-creator-and-meme-culture-as-movies-like-twisters-beetlejuice-beetlejuice-memeify-marketing/",
                    "urlToImage": "https://digiday.com/wp-content/uploads/sites/3/2024/08/movie-phone-digiday.gif",
                    "publishedAt": "2024-09-06T04:01:00Z",
                    "content": "The memeification of movie marketing is underway. Finding ways to capitalize off of the cultural conversation, much of which takes place online and within memes, is crucial for movie marketers, accor… [+6130 chars]"
                    },
                  {
                  "source": {
                    "id": null,
                    "name": "Marketingdirecto.com"
                    },
                    "author": "Fabiana Seara",
                    "title": "Un dron para selfies, hogares inteligentes y mucha IA: las novedades de la IFA Berlín 2024",
                    "description": "Las principales marcas de tecnología presentan sus novedades más destacadas en el escenario de la IFA 2024, la mayor feria de productos tecnológicos de Europa.\nLa entrada Un dron para selfies, hogares inteligentes y mucha IA: las novedades de la IFA Berlín 20…",
                    "url": "https://www.marketingdirecto.com/marketing-general/eventos-y-formacion/mejores-novedades-presentadas-ifa-berlin-2024",
                    "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2023/01/inteligencia-artificial-publicidad.jpg",
                    "publishedAt": "2024-09-06T11:23:54Z",
                    "content": "Las principales marcas de tecnología presentan sus novedades más destacadas en el escenario de la IFA 2024, la mayor feria de productos tecnológicos de Europa.Año tras año, la Internationale Funkauss… [+7016 chars]"
                    },
                  {
                  "source": {
                    "id": null,
                    "name": "La Vanguardia"
                    },
                    "author": "Fran Besora",
                    "title": "Pensábamos que se había filtrado el Apple Watch Series 10... pero no ha sido así",
                    "description": "Recientemente saltaron todas las alarmas porque, supuestamente, se había filtrado el diseño del Apple Watch Series 10 en la última beta de iOS 18.1. Al parecer, a un usuario le apareció una imagen del nuevo modelo al intentar enlazar su reloj al iPhone, pero …",
                    "url": "https://www.lavanguardia.com/andro4all/apple/pensabamos-que-se-habia-filtrado-el-apple-watch-series-10-pero-no-ha-sido-asi",
                    "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/09/apple-watch-series-10-bug.jpg?width=1200",
                    "publishedAt": "2024-09-06T10:25:45Z",
                    "content": "Apple presentará los Apple Watch Series 10 el próximo 9 de septiembre\r\nRecientemente saltaron todas las alarmas porque, supuestamente, se había filtrado el diseño del Apple Watch Series 10 en la últi… [+2354 chars]"
                    },{
                    "source": {
                      "id": null,
                      "name": "La Vanguardia"
                      },
                      "author": "Fran Besora",
                      "title": "Pensábamos que se había filtrado el Apple Watch Series 10... pero no ha sido así",
                      "description": "Recientemente saltaron todas las alarmas porque, supuestamente, se había filtrado el diseño del Apple Watch Series 10 en la última beta de iOS 18.1. Al parecer, a un usuario le apareció una imagen del nuevo modelo al intentar enlazar su reloj al iPhone, pero …",
                      "url": "https://www.lavanguardia.com/andro4all/apple/pensabamos-que-se-habia-filtrado-el-apple-watch-series-10-pero-no-ha-sido-asi",
                      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/09/apple-watch-series-10-bug.jpg?width=1200",
                      "publishedAt": "2024-09-06T10:25:45Z",
                      "content": "Apple presentará los Apple Watch Series 10 el próximo 9 de septiembre\r\nRecientemente saltaron todas las alarmas porque, supuestamente, se había filtrado el diseño del Apple Watch Series 10 en la últi… [+2354 chars]"
                      },
                    {
                    "source": {
                      "id": null,
                      "name": "La Vanguardia"
                      },
                      "author": "Fran Besora",
                      "title": "IPhone 16 y iPhone 16 Pro: Apple habría filtrado sin querer su fecha de lanzamiento",
                      "description": "Apple presentará los iPhone 16 y iPhone 16 Pro el próximo lunes 9 de septiembre. Si la compañía sigue los pasos de todos los años, podemos hacernos una idea de cuándo podría ser su lanzamiento. Gracias a un reciente movimiento, nuestra atención se debe centra…",
                      "url": "https://www.lavanguardia.com/andro4all/apple/iphone-16-y-iphone-16-pro-apple-habria-filtrado-sin-querer-su-fecha-de-lanzamiento",
                      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/09/iphone-16-lanzamiento.jpeg?width=1200",
                      "publishedAt": "2024-09-06T06:43:04Z",
                      "content": "Apple presentará nuevos productos el próximo 9 de septiembre\r\nApple presentará los iPhone 16 y iPhone 16 Pro el próximo lunes 9 de septiembre. Si la compañía sigue los pasos de todos los años, podemo… [+2033 chars]"
                      },
                    {
                    "source": {
                      "id": null,
                      "name": "La Vanguardia"
                      },
                      "author": "Sergio Agudo",
                      "title": "Samsung podría lanzar unas gafas de realidad mixta para competir con las Apple Vision Pro",
                      "description": "Hay que retrotraerse casi un año, a la presentación de los Samsung Galaxy S23, para rescatar una mención que hizo el fabricante coreano a un dispositivo llamado \"XR\". Después supimos que la firma tenía un equipo dedicado para su desarrollo y ahora, gracias a …",
                      "url": "https://www.lavanguardia.com/andro4all/samsung/samsung-podria-lanzar-unas-gafas-de-realidad-mixta-para-competir-con-las-apple-vision-pro",
                      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/09/qualcomm-ar2-gen-1-augmented-reality-glasses.webp?width=1200",
                      "publishedAt": "2024-09-06T11:01:49Z",
                      "content": "Render de unas gafas inteligentes\r\nHay que retrotraerse casi un año, a la presentación de los Samsung Galaxy S23, para rescatar una mención que hizo el fabricante coreano a un dispositivo llamado \"XR… [+2327 chars]"
                      },
                    {
                    "source": {
                      "id": null,
                      "name": "La Vanguardia"
                      },
                      "author": "Sergio Agudo",
                      "title": "Spotify estrena \"Daylist\", una lista de reproducción que te ofrece música diferente para cada momento del día",
                      "description": "Spotify sigue buscando formas de retener a los usuarios en la plataforma aprovechándose de sus algritmos. Si hace cosa de un mes el servicio de streaming musical presidido por Daniel Ek presentaba a su DJ con IA, hoy nos encontramos ante una nueva novedad que…",
                      "url": "https://www.lavanguardia.com/andro4all/aplicaciones-de-musica/spotify-estrena-daylist-una-lista-de-reproduccion-que-te-ofrece-musica-diferente-para-cada-momento-del-dia",
                      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/08/app-spotify-xiaomi-14.jpg?width=1200",
                      "publishedAt": "2024-09-06T10:01:45Z",
                      "content": "Spotify en un Xiaomi 14\r\nSpotify sigue buscando formas de retener a los usuarios en la plataforma aprovechándose de sus algritmos. Si hace cosa de un mes el servicio de streaming musical presidido po… [+2634 chars]"
                      },
                    {
                    "source": {
                      "id": null,
                      "name": "La Vanguardia"
                      },
                      "author": "David Freire",
                      "title": "El Amazfit T-Rex 3 es oficial: todo lo que debes saber del nuevo smartwatch resistente de la firma china",
                      "description": "Hoy ha comenzado oficialmente el IFA 2024, uno de los eventos tecnológicos más importantes del año y el conocido fabricante de relojes inteligentes Amazfit ha aprovechado su presencia en Berlín para presentar en sociedad su nuevo smartwatch resistente, un Ama…",
                      "url": "https://www.lavanguardia.com/andro4all/relojes-inteligentes/el-amazfit-t-rex-3-es-oficial-todo-lo-que-debes-saber-del-nuevo-smartwatch-resistente-de-la-firma-china",
                      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/09/amazfit-t-rex-3-portada.jpg?width=1200",
                      "publishedAt": "2024-09-06T09:15:40Z",
                      "content": "El diseño al completo del nuevo Amazfit T-Rex 3\r\nHoy ha comenzado oficialmente el IFA 2024, uno de los eventos tecnológicos más importantes del año y el conocido fabricante de relojes inteligentes Am… [+2417 chars]"
                      },
                    {
                    "source": {
                      "id": null,
                      "name": "La Vanguardia"
                      },
                      "author": "JuanMi Guirado",
                      "title": "130 euros menos por este portátil con Intel Core i7, 16 GB de RAM y diseño ultra delgado",
                      "description": "¿Buscas un ordenador portátil para un estudiante? Tengo una gran idea de compra y, además, hoy tiene un precio de escándalo. Se trata del Lenovo IdeaPad Slim 3 Gen 8, un dispositivo muy portable por su peso y tamaño, y que cuenta con un hardware a la altura d…",
                      "url": "https://www.lavanguardia.com/andro4all/ofertas/130-euros-menos-por-este-portatil-con-intel-core-i7-16-gb-de-ram-y-diseno-ultra-delgado",
                      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/09/lenovo-ideapad-slim-3-gen-8-sonido.jpg?width=1200",
                      "publishedAt": "2024-09-06T10:30:44Z",
                      "content": "A pesar de su gran pantalla de 15,6 pulgadas su peso total se queda en nada con un chasis tan delgado\r\n¿Buscas un ordenador portátil para un estudiante? Tengo una gran idea de compra y, además, hoy t… [+3465 chars]"
                      },
                      {
                      "source": {
                        "id": "techradar",
                        "name": "TechRadar"
                        },
                        "author": "jacob.krol@futurenet.com (Jacob Krol)",
                        "title": "Target aims to make picking up orders even easier by integrating with Apple CarPlay",
                        "description": "Target is rolling out CarPlay integration, which should make completing “Drive Up” orders even easier if you have an iPhone.",
                        "url": "https://www.techradar.com/vehicle-tech/car-infotainment/target-aims-to-make-picking-up-orders-even-easier-by-integrating-with-apple-carplay",
                        "urlToImage": "https://cdn.mos.cms.futurecdn.net/LYcMduUNsovqC2Qvfdf36o-1200-80.jpg",
                        "publishedAt": "2024-09-06T01:00:10Z",
                        "content": "Seemingly on a quest to make your Target run even smoother, the retailer is rolling out CarPlay integration, which should make completing “Drive Up” orders even easier if you have an iPhone.\r\nLike a … [+2164 chars]"
                        },
                      {
                      "source": {
                        "id": "techradar",
                        "name": "TechRadar"
                        },
                        "author": "tom.power@futurenet.com (Tom Power)",
                        "title": "New Paramount Plus show Landman looks like another slick and thrilling drama from Yellowstone's co-creator, and it's releasing in November",
                        "description": "Landman's first trailer suggests it'll be another rural America-set TV hit for Yellowstone co-creator Taylor Sheridan.",
                        "url": "https://www.techradar.com/streaming/paramount-plus/new-paramount-plus-show-landman-looks-like-another-slick-and-thrilling-drama-from-yellowstones-co-creator-and-its-releasing-in-november",
                        "urlToImage": "https://cdn.mos.cms.futurecdn.net/gcnKwyykhyWQusTy9JwwSF-1200-80.jpg",
                        "publishedAt": "2024-09-06T09:15:46Z",
                        "content": "The first trailer for Landman, the latest rural America drama from Taylor Sheridan, has been released – and I'm convinced it'll be Paramount Plus' next big TV hit.\r\nReleased yesterday (September 5), … [+3497 chars]"
                        },
                      {
                      "source": {
                        "id": null,
                        "name": "Forbes"
                        },
                        "author": "Mark Sparrow, Senior Contributor, \n Mark Sparrow, Senior Contributor\n https://www.forbes.com/sites/marksparrow/",
                        "title": "Anker’s New MagGo Range Keeps iPhones And Apple Watches Going",
                        "description": "The latest MagGo charging products from Anker are ideal for people on the move or who are traveling and short of space. The range includes power banks and chargers.",
                        "url": "https://www.forbes.com/sites/marksparrow/2024/09/06/ankers-new-maggo-range-keeps-iphones-and-apple-watches-going/",
                        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66daca1d4b52622a0b8c1312/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                        "publishedAt": "2024-09-06T09:30:52Z",
                        "content": "The new Anker MagGo Wireless Charging Station is a 3-in-1 foldable charging station that can fit in ... [+] a purse.\r\nAnker\r\nAnkers new MagGo power chargers combine offbeat design and vibrant colors … [+3165 chars]"
                        },
                      {
                      "source": {
                        "id": null,
                        "name": "Forbes"
                        },
                        "author": "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
                        "title": "iPhone 16 Release Date Latest: What To Expect When And Where",
                        "description": "The countdown is on and the next iPhones are almost here. Here’s the latest on what’s happening when, including what the pricing is set to be, so nothing surprises you.",
                        "url": "https://www.forbes.com/sites/davidphelan/2024/09/06/iphone-16-release-date-latest-what-to-expect-when-and-where/",
                        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d835bbbfa24661cbc9bc4b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                        "publishedAt": "2024-09-06T10:15:05Z",
                        "content": "Updated September 6 with new rumor making the release date more likely.\r\nLike an airplane on a glidepath, the iPhone 16 series is there in the distant sky, slowly coming in to land. Youll want to kno… [+4117 chars]"
                        },
                      {
                      "source": {
                        "id": null,
                        "name": "Forbes"
                        },
                        "author": "Erik Kain, Senior Contributor, \n Erik Kain, Senior Contributor\n https://www.forbes.com/sites/erikkain/",
                        "title": "What To Watch This Weekend: New Streaming TV Shows And Movies On Netflix, Amazon Prime Video, Hulu, Apple TV And More",
                        "description": "A little guide to help you pick the right show or movie to watch this weekend from all your favorite streaming services.",
                        "url": "https://www.forbes.com/sites/erikkain/2024/09/06/what-to-watch-this-weekend-new-streaming-tv-shows-and-movies-on-netflix-amazon-prime-video-hulu-apple-tv-and-more/",
                        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d9daba83754f1fb9918e50/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                        "publishedAt": "2024-09-06T12:00:00Z",
                        "content": "What to watch this weekend.\r\nCredit: Netflix / Apple / Peacock\r\nIts almost the weekend which means one thing and one thing only: Soon, youll be able to kick back and relax with a good TV show or movi… [+8719 chars]"
                        },
                      {
                      "source": {
                        "id": null,
                        "name": "Forbes"
                        },
                        "author": "Mark Sparrow, Senior Contributor, \n Mark Sparrow, Senior Contributor\n https://www.forbes.com/sites/marksparrow/",
                        "title": "Ugreen Unveils New Uno Series Of Fast-Charging Technology At IFA",
                        "description": "Following on from Anker’s unveiling of some high-end charging stations, Ugreen has now announced a slew of new charging products at IFA, Berlin.",
                        "url": "https://www.forbes.com/sites/marksparrow/2024/09/06/ugreen-unveils-new-uno-series-of-fast-charging-technology-at-ifa/",
                        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66cf1b291084ca181be8f813/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                        "publishedAt": "2024-09-06T10:00:00Z",
                        "content": "The Uno 100W PD charger has a fun face on its LCD. \r\nUgreen\r\nFollowing on from Ankers unveiling of some high-end charging stations, Ugreen has now announced a slew of new charging products at IFA, Be… [+3108 chars]"
                        },
                      {
                      "source": {
                        "id": null,
                        "name": "Forbes"
                        },
                        "author": "Ronak Sheth, Forbes Councils Member, \n Ronak Sheth, Forbes Councils Member\n https://www.forbes.com/councils/forbescommunicationscouncil/people/ronaksheth/",
                        "title": "Quantifying The Unquantifiable: The Value Of Emotion In Branding",
                        "description": "Understanding the emotional motivators that drive consumer behavior can significantly enhance how brands engage with their audiences.",
                        "url": "https://www.forbes.com/councils/forbescommunicationscouncil/2024/09/06/quantifying-the-unquantifiable-the-value-of-emotion-in-branding/",
                        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d9e1f783754f1fb9918e54/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                        "publishedAt": "2024-09-06T11:15:00Z",
                        "content": "Ronak is CMO at 360 ONE WAM Ltd. \r\ngetty\r\nNavigating the complex landscape of contemporary marketing, I've often grappled with a compelling yet elusive challenge: quantifying the value of emotion in … [+6945 chars]"
                        },
                      {
                      "source": {
                        "id": null,
                        "name": "Forbes"
                        },
                        "author": "Beth Kindig, Contributor, \n Beth Kindig, Contributor\n https://www.forbes.com/sites/bethkindig/",
                        "title": "Prediction: Microsoft Azure To Reach $200 Billion In Revenue By 2028",
                        "description": "Microsoft Azure is predicted to more than double, spelling good things for MSFT stock. Azure's reporting metrics changed resulting in higher AI contribution and growth",
                        "url": "https://www.forbes.com/sites/bethkindig/2024/09/05/prediction-microsoft-azure-to-reach-200-billion-in-revenue-by-2028/",
                        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66da6d856f3f9306ddfa98c9/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                        "publishedAt": "2024-09-06T03:03:35Z",
                        "content": "BELLEVUE, WA - NOVEMBER 28: Microsoft CEO Satya Nadella smiles during the question and answer ... [+] portion of the Microsoft Annual Shareholders Meeting at the Meydenbauer Center on November 28, 20… [+22142 chars]"
                        },
                      {
                      "source": {
                        "id": null,
                        "name": "Forbes"
                        },
                        "author": "Rebecca Deurlein, Contributor, \n Rebecca Deurlein, Contributor\n https://www.forbes.com/sites/rebeccadeurlein-1/",
                        "title": "Plan Now For The Best Fall Leaf Viewing In The U.S.",
                        "description": "Whether taking an autumn road trip or seeking a fall getaway, these are the best places to see fall foliage in September and October.",
                        "url": "https://www.forbes.com/sites/rebeccadeurlein/2024/09/06/plan-now-for-the-best-fall-leaf-viewing-in-the-us/",
                        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66d9ffe67136e2623bc558bd/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                        "publishedAt": "2024-09-06T10:00:00Z",
                        "content": "Beautiful autumn colors at Mt. Rainier National Park in Washington state\r\ngetty\r\nLeaf peepers, pumpkin hunters, and fall festival lovers unite its your time to revel in cooler temps and all things pu… [+6839 chars]"
                        },
                      {
                      "source": {
                        "id": null,
                        "name": "Iphoneblog.de"
                        },
                        "author": "Alex Olma",
                        "title": "Club-3D-Kabel verbindet Nintendo Switch mit Apples Studio Display",
                        "description": "Um eine Nintendo Switch (oder einen Apple TV) direkt an Apples Studio Display anzuschließen, benötigt ihr dieses Kabel (Affiliate-Link), respektive diesen Adapter (Affiliate-Link) von Club 3D. Für Sound müsst ihr auf (Bluetooth-)Kopfhörer ausweichen; das Kabe…",
                        "url": "https://www.iphoneblog.de/2024/09/06/club-3d-kabel-verbindet-nintendo-switch-mit-apples-studio-display/",
                        "urlToImage": "https://www.iphoneblog.de/wp-content/uploads/2024/09/iphoneblog.de_3d-club-cable.jpg",
                        "publishedAt": "2024-09-06T11:58:09Z",
                        "content": "Wir benötigen Ihre Zustimmung, bevor Sie unsere Website weiter besuchen können.Wenn Sie unter 16 Jahre alt sind und Ihre Zustimmung zu freiwilligen Diensten geben möchten, müssen Sie Ihre Erziehungsb… [+626 chars]"
                        },
                        {
                          "source": {
                            "id": null,
                            "name": "Forbes"
                            },
                            "author": "Beth Kindig, Contributor, \n Beth Kindig, Contributor\n https://www.forbes.com/sites/bethkindig/",
                            "title": "Prediction: Microsoft Azure To Reach $200 Billion In Revenue By 2028",
                            "description": "Microsoft Azure is predicted to more than double, spelling good things for MSFT stock. Azure's reporting metrics changed resulting in higher AI contribution and growth",
                            "url": "https://www.forbes.com/sites/bethkindig/2024/09/05/prediction-microsoft-azure-to-reach-200-billion-in-revenue-by-2028/",
                            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66da6d856f3f9306ddfa98c9/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
                            "publishedAt": "2024-09-06T03:03:35Z",
                            "content": "BELLEVUE, WA - NOVEMBER 28: Microsoft CEO Satya Nadella smiles during the question and answer ... [+] portion of the Microsoft Annual Shareholders Meeting at the Meydenbauer Center on November 28, 20… [+22142 chars]"
                            },
                            {
                              "source": {
                              "id": "cnn",
                              "name": "CNN"
                              },
                              "author": "Jackie Wattles",
                              "title": "Live updates: Nasa’s Boeing Starliner capsule is returning from the International Space Station - CNN",
                              "description": "After 12 weeks in space, Boeing’s Starliner spacecraft is finally set to return home from the International Space Station. Follow here for the latest.",
                              "url": "https://www.cnn.com/science/live-news/nasa-boeing-starliner-capsule-09-06-24/index.html",
                              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24192571409453.jpg?c=16x9&q=w_800,c_fill",
                              "publishedAt": "2024-09-07T01:44:00Z",
                              "content": "The problems that have troubled Starliner are not simple. It is, after all, rocket science. \r\nBut NASA and Boeing have worked for weeks to better understand what went wrong.\r\nFirst during the first l… [+1874 chars]"
                              },
                              {
                                "source": {
                                "id": null,
                                "name": "Milwaukee Journal Sentinel"
                                },
                                "author": "Christopher Kuhagen, Emmett Prosser",
                                "title": "Live game updates in Brazil: Green Bay Packers 19, Philadelphia Eagles 14, second quarter - Milwaukee Journal Sentinel",
                                "description": "The Packers open the 2024 NFL season vs the Eagles in Brazil. Follow here for live game and score updates.",
                                "url": "https://www.jsonline.com/story/sports/nfl/packers/2024/09/06/green-bay-packers-vs-philadelphia-eagles-score-live-game-updates-highlights-brazil/75093443007/",
                                "urlToImage": "https://www.jsonline.com/gcdn/authoring/images/smg/2024/04/09/USAT/73107802007-1445080538.jpeg?crop=5135,2889,x0,y267&width=3200&height=1801&format=pjpg&auto=webp",
                                "publishedAt": "2024-09-07T01:30:00Z",
                                "content": "Welcome to the 2024 NFL season, Green Bay Packers fans!\r\nJordan Love and the Packers kick off the season against Jalen Hurts and the Philadelphia Eagles on Friday night in Sao Paulo, Brazil, in a Wee… [+17409 chars]"
                                },
                                
                                
                            

                      
                    
                  

                

              
              






      ],
      loading: false
    };
  }

  componentDidMount(){
    console.log("cmd")
  }

d
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <NewsItem 
                title={article.title.slice(0,45)} 
                description={article.description.slice(0,88)} 
                imageUrl={article.urlToImage} 
                newsurl={article.url} // Ensure prop name is consistent with NewsItem
              /> 
            </div>
          ))}
        </div>
      </div>
    );
  }
}

