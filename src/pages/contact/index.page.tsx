import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

// Icons
import { TfiWorld } from 'react-icons/tfi';
import { BsArrowUpRight } from 'react-icons/bs';

// Images
import Book from '../../assets/images/book-pioneering.png';

// Styles
import * as S from './styles';
import { useTheme } from 'styled-components';

// Components
import { InputNotification } from '../../components/InputNotification';

export default function Contact(props: any) {
  const theme = useTheme();

  return (
    <S.Container>
      <h1>Contact</h1>
      <S.Content>
        <p className="description-deep-tech">
          We train business, from the frontline to the executive, in the new
          business discipline of Deep Tech. We advise and guide business to make
          strong and powerful decisions on the principles of deep tech.
          <br />
          <br />
          Contact us to work with Deep Tech and amplify your organization :
          ola@1sti.com.br
        </p>

        <S.SectionDeepTech>
          <S.HeadingBook>
            <h3>BOOK</h3>
            <p>
              How to elevate, scale and amplify your business through the New
              4Ps of platforms, purpose, people and planet.
            </p>
            <S.SiteDeepTech>
              <TfiWorld size={22} color={theme.colors.blue100} />
              <Link href="https://deeptechamplified.com/" target="_blank">
                deeptechamplified.com/
              </Link>
              <BsArrowUpRight size={22} color={theme.colors.blue100} />
            </S.SiteDeepTech>
            <Image src={Book} alt="Livro Verde da Deep tech" />
          </S.HeadingBook>
          <S.HeadingNewsletter>
            <h3>NEWSLETTER</h3>
            <p>
              Subscribe to our newsletter to be the first to hear the latest
              news about Deep Tech and receive updates, exclusive content, and
              more.
            </p>
            <InputNotification />
          </S.HeadingNewsletter>
          <S.HeadingCarrer>
            <h3>CAREERS</h3>
            <p>
              Our positions are for everyone. Explore our current open
              opportunities and join us!
            </p>
          </S.HeadingCarrer>
        </S.SectionDeepTech>
      </S.Content>
    </S.Container>
  );
}
