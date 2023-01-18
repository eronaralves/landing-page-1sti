import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Form = styled.form`
  width: 100%;
  max-width: 289px;

  & > span {
    width: 100%;
    height: 20px;

    margin-top: 5px;

    display: block;

    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};

    color: #fff;
  }
`;

export const BoxInput = styled(motion.div)`
  width: 100%;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.pink500};
  color: ${({ theme }) => theme.colors.pink500};
  background-color: transparent;

  input {
    flex: 1;
    padding-block: 8px;

    border: 0;

    color: ${({ theme }) => theme.colors.pink500};
    background-color: transparent;

    font-family: ${({ theme }) => theme.fonts.cabinetGrotesk.regular};

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.pink500};
    }
  }

  button {
    border: 0;
    background-color: transparent;
  }
`;
