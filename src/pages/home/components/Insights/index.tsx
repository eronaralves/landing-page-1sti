import Image from 'next/image';

// Carrosel
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

// images
import Modal1 from '../../../../assets/images/modal-1.png';
import Modal2 from '../../../../assets/images/modal-2.png';

// Components
import { LayoutSection } from '../../../../components/HeadingSection';

// Styles
import * as S from './styles';

export function Insights() {
  return (
    <S.Container>
      <LayoutSection
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
          600: {
            slidesPerView: 2.5,
          },

          500: {
            slidesPerView: 1.5,
          },
        }}
        slideVisibleClass="myslider__slide--visible"
      >
        <SwiperSlide>
          {({ isPrev, isNext }) => (
            <S.BoxSlider className={isPrev || isNext ? 'next' : ''}>
              <Image src={Modal1} alt="ds" />
              <span>Artigo</span>
              <h2>O que é Agilidade Aumentada?</h2>
            </S.BoxSlider>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isPrev, isNext }) => (
            <S.BoxSlider className={isPrev || isNext ? 'next' : ''}>
              <Image src={Modal2} alt="ds" />
              <span>Editorial</span>
              <h2>Deep Tech e o Futuro da Educação</h2>
            </S.BoxSlider>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isPrev, isNext }) => (
            <S.BoxSlider className={isPrev || isNext ? 'next' : ''}>
              <Image src={Modal2} alt="ds" />
              <span>Artigo</span>
              <h2>Horizonte Digital</h2>
            </S.BoxSlider>
          )}
        </SwiperSlide>
      </S.SwiperContainer>
    </S.Container>
  );
}
