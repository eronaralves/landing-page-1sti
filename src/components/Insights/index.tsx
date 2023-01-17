import Image, { StaticImageData } from 'next/image';

// Carrosel
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

// images
import Modal1 from '../../assets/images/modal-1.png';
import Modal2 from '../../assets/images/modal-2.png';
import Modal3 from '../../assets/images/modal3.png';

// Components
import { HeadingSection } from '../../components/HeadingSection';

// Styles
import * as S from './styles';

// Interface
interface ISlider {
  title: string;
  type: string;
  image: StaticImageData;
}

export function Insights() {
  const slides = [
    {
      title: 'O que é Agilidade Aumentada?',
      type: 'Artigo',
      image: Modal1,
    },
    {
      title: 'Deep Tech e o Futuro da Educação',
      type: 'Editorial',
      image: Modal2,
    },
    {
      title: 'Horizonte Digital',
      type: 'Artigo',
      image: Modal3,
    },
  ] as ISlider[];

  return (
    <S.Container>
      <HeadingSection
        href="/contact"
        title="Insights"
        paragraph="A abordagem Deep Tech para temas do presente e futuro."
        labelButton="Acesse nosso arquivo"
      />

      <S.SwiperContainer
        slidesPerView={1.5}
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          1000: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 1.5,
          },

          600: {
            slidesPerView: 2.5,
          },
        }}
        slideVisibleClass="myslider__slide--visible"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            {({ isPrev, isNext }) => (
              <S.BoxSlider className={isPrev || isNext ? 'next' : ''}>
                <Image src={slide.image} alt="ds" />
                <span>{slide.type}</span>
                <h2>{slide.title}</h2>
              </S.BoxSlider>
            )}
          </SwiperSlide>
        ))}
      </S.SwiperContainer>
    </S.Container>
  );
}
