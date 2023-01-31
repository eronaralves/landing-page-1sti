import Image from 'next/image';

// Carrosel
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

// images
import Modal2 from '../../../../assets/images/modal-2.png';

// Components
import { HeadingSection } from '../../../../components/HeadingSection';

// Styles
import * as S from './styles';

// Interface
interface IInsightsProps {
  insights: [
    {
      heading: {
        title: string;
        description: string;
        textButton: string;
      };
    },
  ];

  cardInsights: [
    {
      title: string;
      type: string;
      image: string;
    },
  ];
}

export function Insights({ insights, cardInsights }: IInsightsProps) {
  const insight = insights[0];
  const cards = cardInsights;

  const slides = cards.map((card) => {
    return {
      ...card,
      image: Modal2,
    };
  });

  return (
    <S.Container>
      <HeadingSection
        hrefButton="/contact"
        title={insight.heading.title}
        paragraph={insight.heading.description}
        labelButton={insight.heading.textButton}
      />

      <S.SwiperContainer
        slidesPerView={1.5}
        spaceBetween={30}
        onSlideChange={() => {}}
        onSwiper={() => {}}
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
