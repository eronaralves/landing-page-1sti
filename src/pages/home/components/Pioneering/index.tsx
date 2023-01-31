import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Image from 'next/image';

// Components
import { HeadingSection } from '../../../../components/HeadingSection';

// Images
import Book from '../../../../assets/images/book-pioneering.png';
import ArrowLeft from '../../../../assets/images/arrow-left.png';
import ArrowRight from '../../../../assets/images/arrow-right.png';

// Styles
import * as S from './styles';

// Interfaces
import { IHeading } from '../..';

interface ITextSelect {
  paragraph: string;
  author: string;
}

interface IPioneeringProps {
  pioneerings: [
    {
      heading: IHeading;
    },
  ];
  paragraphsBook: [
    {
      paragraph: string;
      author: string;
    },
  ];
}

export function Pioneering({ pioneerings, paragraphsBook }: IPioneeringProps) {
  const { heading } = pioneerings[0];

  const [silderTexts, setSilderTexts] = useState<ITextSelect[]>(paragraphsBook);
  const [textCurrent, setTextCurrent] = useState<ITextSelect>(
    {} as ITextSelect,
  );

  const currentText = silderTexts?.findIndex(
    (text) => text?.paragraph === textCurrent?.paragraph,
  );

  function handleNextText() {
    setTextCurrent(silderTexts[currentText + 1]);
  }

  function handlePrevText() {
    setTextCurrent(silderTexts[currentText - 1]);
  }

  useEffect(() => {
    setSilderTexts(paragraphsBook);
    setTextCurrent(paragraphsBook[0]);
  }, [paragraphsBook]);

  return (
    <S.Container>
      <HeadingSection
        hrefButton="https://deeptechamplified.com/"
        targetButton="_blank"
        title={heading.title}
        paragraph={heading.description}
        labelButton={heading.textButton}
      />

      <S.ContentPioneering>
        <Image src={Book} alt="" />

        <S.ContainerSliderTexts>
          <AnimatePresence>
            <S.BoxTexts
              initial={{ x: 200, opacity: 0, position: 'initial' }}
              animate={{ x: 0, opacity: 1, position: 'sticky' }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 40,
              }}
              key={currentText}
            >
              <S.Text>{textCurrent?.paragraph}</S.Text>
              <span>{textCurrent?.author}</span>
            </S.BoxTexts>
          </AnimatePresence>
          <S.SliderFooter>
            <S.BoxButtonsArrows>
              <S.ButtonArrow
                disabled={currentText === 0}
                onClick={handlePrevText}
              >
                <Image src={ArrowLeft} alt="Seta da esquerda da cor roxa" />
              </S.ButtonArrow>
              <S.ButtonArrow
                onClick={handleNextText}
                disabled={currentText - silderTexts.length + 1 === 0}
              >
                <Image src={ArrowRight} alt="Seta da direita da cor roxa" />
              </S.ButtonArrow>
            </S.BoxButtonsArrows>

            <S.AmountTexts>
              {currentText + 1}/{silderTexts.length}
            </S.AmountTexts>
          </S.SliderFooter>
        </S.ContainerSliderTexts>
      </S.ContentPioneering>
    </S.Container>
  );
}
