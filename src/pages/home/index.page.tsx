// Styles
import * as S from './styles';

// Icons
import { GrCirclePlay } from 'react-icons/gr';

// Components
import { Services } from './components/Services';
import { JourneyActive } from './components/JourneysActive';

export default function Home(props: any) {
  console.log(props);

  return (
    <S.Container>
      <header>
        <S.VideoContainer>
          <S.Video loop={true} muted={true} autoPlay={true}>
            <source src="/videos/deep-tech.mp4" type="video/mp4" />
          </S.Video>
        </S.VideoContainer>
        <S.ContentHero>
          <S.Title>
            Tecnologia <br /> com Alma e Impacto
          </S.Title>
          <hr />
          <h2>Para grandes desafios</h2>
          <S.ParagraphExplication>
            Explore novos caminhos para resolver os desafios mais complexos de
            sua organização. Pioneira em Deep Tech, a 1STi está pronta para
            inserir sua empresa em uma jornada de tecnologia com alma e impacto.
          </S.ParagraphExplication>
          <S.BoxButtons>
            <S.ButtonDeepTech>
              <GrCirclePlay size={22} />
              <span>Entenda Deep Tech</span>
            </S.ButtonDeepTech>
            <S.ButtonCLient>
              <span>Nossos clientes</span>
            </S.ButtonCLient>
          </S.BoxButtons>
        </S.ContentHero>
      </header>
      <main>
        <Services />
        <JourneyActive />
      </main>
    </S.Container>
  );
}
