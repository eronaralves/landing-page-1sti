import React from 'react';
import { motion } from 'framer-motion';

// Styles
import * as S from './styles';

// Icons
import { GrCirclePlay } from 'react-icons/gr';

// Components
import { Services } from '../../components/Services';
import { JourneyActive } from './components/JourneysActive';
import { Insights } from './components/Insights';
import { Pioneering } from './components/Pioneering';
import { CardNotifications } from '../../components/CardNotifications';

// Interface
interface IHome {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    buttonDeepTech: string;
    buttonClients: string;
    video: {
      url: string;
    };
  };
}

export default function Home({ hero }: IHome) {
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
              <source src={hero?.video?.url} type="video/mp4" />
            </S.Video>
          </S.VideoContainer>
          <S.ContentHero>
            <S.Title>{hero?.title}</S.Title>
            <hr />
            <h2>{hero?.subtitle}</h2>
            <S.ParagraphExplication>{hero?.description}</S.ParagraphExplication>
            <S.BoxButtons>
              <S.ButtonDeepTech>
                <GrCirclePlay size={22} />
                <span>{hero?.buttonDeepTech}</span>
              </S.ButtonDeepTech>
              <S.ButtonCLient>
                <span>{hero?.buttonClients}</span>
              </S.ButtonCLient>
            </S.BoxButtons>
          </S.ContentHero>
        </header>
        <main>
          <Services />
          <JourneyActive />
          <Insights />
          <Pioneering />
          <CardNotifications />
        </main>
      </S.Container>
    </motion.div>
  );
}