// Styles
import * as S from './styles';

// Components
import { InputNotification } from '../InputNotification';

export function CardNotifications() {
  return (
    <S.Container>
      <S.ContainerCard>
        <h2>Fique por dentro</h2>
        <p>
          Assine nossa newsletter e acompanhe insights e tendências de
          tecnologia e mercado com abordagem Deep Tech.
        </p>

        <InputNotification />
      </S.ContainerCard>
    </S.Container>
  );
}
