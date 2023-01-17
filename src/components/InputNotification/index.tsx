import { useState } from 'react';

// Form
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Styles
import * as S from './styles';

// Icons
import { RxArrowRight } from 'react-icons/rx';
import { useTheme } from 'styled-components';

// Schema
const formSchema = yup.object({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Email é obrigatório'),
});

type FormInputs = yup.InferType<typeof formSchema>;

export function InputNotification() {
  const [input, setInput] = useState('');
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>({
    resolver: yupResolver(formSchema),
  });

  async function handleEmailSubmit(data: FormInputs) {
    console.log(data);
  }

  return (
    <S.Form onSubmit={handleSubmit(handleEmailSubmit)}>
      <S.BoxInput>
        <input
          type="text"
          placeholder="Cadastre-se"
          value={isSubmitSuccessful ? 'Obrigado' : input}
          autoComplete="off"
          {...register('email')}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" disabled={isSubmitSuccessful}>
          <RxArrowRight size={25} color={theme.colors.pink500} />
        </button>
      </S.BoxInput>
      <span>{errors.email?.message}</span>
    </S.Form>
  );
}
