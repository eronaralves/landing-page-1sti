// Styles
import * as S from './styles';

// Interfaces
import { IHeading } from '../../pages/home';

interface ICardNotificationsProps {
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

export function CardNotifications({
  cardNotifications,
}: ICardNotificationsProps) {
  const data = cardNotifications[0];
  console.log(data);

  return (
    <S.Container>
      <S.ContainerCard>
        <h2>{data.heading.title}</h2>
        <p>{data.heading.description}</p>

        <S.Input inputData={data.inputData} />
      </S.ContainerCard>
    </S.Container>
  );
}
