import { useState } from 'react';
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
interface ModalText {
  paragraph: string;
  author: string;
}

export function Pioneering() {
  const [modalTexts] = useState<ModalText[]>([
    {
      paragraph:
        '“A powerful blueprint for developing a 21st-century purposeful organisation. CEOSs, designers and technologists alike will all take inspiration from this transdiscuplinary approach to Deep Tech.”',
      author:
        '— Dave Gray, Founder of XPLANE and author of The Connected Company, Gamestorming and Liminal Thinking',
    },
    {
      paragraph:
        'At a time when the adoption of advanced technologies is accelerating, Deep Tech and the Amplified Organisation and its authors show how a systemic view and the relationships between these new technologies, humanity and the environment are of fundamental importance, since moments of true evolution never have technology as an end in itself.',
      author:
        '— Giuliano Michel Fernandes, Head of Marketing and Communications, CBMM',
    },
  ]);
  const [textCurrent, setTextCurrent] = useState<ModalText>(modalTexts[0]);

  const currentText = modalTexts?.findIndex(
    (text) => text?.paragraph === textCurrent?.paragraph,
  );

  function handleNextText() {
    setTextCurrent(modalTexts[currentText + 1]);
  }

  function handlePrevText() {
    setTextCurrent(modalTexts[currentText - 1]);
  }

  return (
    <S.Container>
      <HeadingSection
        href="/contact"
        title="Pioneirismo Deep Tech"
        paragraph="Deep Tech and the Amplified Organisation provides readers with a powerful and pivotal multi-disciplinary approach to deep tech which has been created to elevate value propositions, scale platforms and amplify the impact of organisations."
        labelButton="Saiba mais"
      />

      <S.ContentPioneering>
        <Image src={Book} alt="" />

        <S.ModalTexts>
          <AnimatePresence>
            <S.BoxTextsModal
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
              <span> {textCurrent?.author}</span>
            </S.BoxTextsModal>
          </AnimatePresence>
          <S.BoxButtonsArrows>
            <S.ButtonArrow
              disabled={currentText === 0}
              onClick={handlePrevText}
            >
              <Image src={ArrowLeft} alt="Seta da esquerda da cor roxa" />
            </S.ButtonArrow>
            <S.ButtonArrow
              onClick={handleNextText}
              disabled={currentText - modalTexts.length + 1 === 0}
            >
              <Image src={ArrowRight} alt="Seta da direita da cor roxa" />
            </S.ButtonArrow>
          </S.BoxButtonsArrows>
        </S.ModalTexts>
      </S.ContentPioneering>
    </S.Container>
  );
}
