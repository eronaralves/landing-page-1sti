import React from 'react';
import { motion } from 'framer-motion';

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
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>({
    resolver: yupResolver(formSchema),
  });

  function handleEmailSubmit(data: FormInputs) {
    setValue('email', 'Obrigado');
  }

  return (
    <S.Form onSubmit={handleSubmit(handleEmailSubmit)}>
      <S.BoxInput whileHover="triggerHoverButton">
        <input
          type="text"
          autoComplete="off"
          placeholder="Cadastre-se"
          {...register('email')}
          disabled={isSubmitSuccessful}
        />
        <motion.button
          variants={{
            triggerHoverButton: {
              x: 4,
            },
          }}
          type="submit"
          disabled={isSubmitSuccessful}
        >
          <RxArrowRight size={25} color={theme.colors.pink500} />
        </motion.button>
      </S.BoxInput>
      <S.TextError>{errors.email?.message}</S.TextError>
    </S.Form>
  );
}
