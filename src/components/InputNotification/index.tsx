import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Loading from '@mui/material/CircularProgress';

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

// Interfaces
interface InputNotificationProps {
  className?: string;
  inputData: {
    placeholder: string;
    placeholderSucess: string;
  };
}

export function InputNotification({
  className,
  inputData,
}: InputNotificationProps) {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>({
    resolver: yupResolver(formSchema),
  });

  function handleEmailSubmit() {
    setLoading(true);
    setTimeout(() => {
      setValue('email', inputData.placeholderSucess);
      setLoading(false);
    }, 3000);
  }

  return (
    <S.Form className={className} onSubmit={handleSubmit(handleEmailSubmit)}>
      <S.ContainerInput>
        <S.BoxInput whileHover="triggerHoverButton">
          <input
            type="text"
            autoComplete="off"
            placeholder={inputData.placeholder}
            {...register('email')}
            disabled={isSubmitSuccessful}
          />
          {loading ? (
            <Loading size="1.2rem" />
          ) : (
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
          )}
        </S.BoxInput>
      </S.ContainerInput>
      <S.TextError>{errors.email?.message}</S.TextError>
    </S.Form>
  );
}
