import React from 'react';
import { motion } from 'framer-motion';

// Styles
import * as S from './styles';

// Icons
import { GrCirclePlay } from 'react-icons/gr';

// Components
import { Services } from './components/Services';
import { JourneyActive } from './components/JourneysActive';
import { Insights } from './components/Insights';
import { Pioneering } from './components/Pioneering';
import { CardNotifications } from '../../components/CardNotifications';

// Interface

export interface IHeading {
  title: string;
  description: string;
  textButton: string;
}

interface IHome {
  homeHeroes: [
    {
      title: string;
      subtitle: string;
      description: string;
      buttonDeepTech: string;
      buttonClients: string;
      video: {
        url: string;
      };
    },
  ];
  services: [
    {
      title: string;
      subtitle: string;
      description: {
        html: any;
      };
      asset: {
        url: any;
      };
      slug: string;
    },
  ];

  journeysActives: [
    {
      labelEducation: string;
      labelHealth: string;
      labelInsurance: string;
      labelRetail: string;
      heading: IHeading;
    },
  ];

  insights: [
    {
      heading: IHeading;
    },
  ];

  cardInsights: [
    {
      title: string;
      type: string;
      image: string;
    },
  ];

  pioneerings: [
    {
      bookParagraphs: [
        {
          paragraph: string;
          author: string;
        },
      ];
      heading: IHeading;
    },
  ];

  paragraphsBooks: [
    {
      paragraph: string;
      author: string;
    },
  ];

  cardNotifications: [
    {
      heading: IHeading;
      inputData: {
        placeholder: string;
        placeholderSucess: string;
      };
    },
  ];
}

interface IHomeProps {
  data: IHome;
}

export default function Home({ data }: IHomeProps) {
  const {
    homeHeroes,
    services,
    journeysActives,
    insights,
    cardInsights,
    pioneerings,
    paragraphsBooks,
    cardNotifications,
  } = data;

  console.log(cardNotifications);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.Container>
        <header>
          <S.VideoContainer>
            <S.Video loop={true} muted={true} autoPlay={true}>
              <source src={homeHeroes[0]?.video.url} type="video/mp4" />
            </S.Video>
          </S.VideoContainer>
          <S.ContentHero>
            <S.Title>{homeHeroes[0]?.title}</S.Title>
            <hr />
            <h2>{homeHeroes[0]?.subtitle}</h2>
            <S.ParagraphExplication>
              {homeHeroes[0]?.description}
            </S.ParagraphExplication>
            <S.BoxButtons>
              <S.ButtonDeepTech>
                <GrCirclePlay size={22} />
                <span>{homeHeroes[0]?.buttonDeepTech}</span>
              </S.ButtonDeepTech>
              <S.ButtonCLient>
                <span>{homeHeroes[0]?.buttonClients}</span>
              </S.ButtonCLient>
            </S.BoxButtons>
          </S.ContentHero>
        </header>
        <main>
          <Services card={services} />
          <JourneyActive journeysActives={journeysActives} />
          <Insights insights={insights} cardInsights={cardInsights} />
          <Pioneering
            pioneerings={pioneerings}
            paragraphsBook={paragraphsBooks}
          />
          <CardNotifications cardNotifications={cardNotifications} />
        </main>
      </S.Container>
    </motion.div>
  );
}
