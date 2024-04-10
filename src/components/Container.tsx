import { styled, Box, BoxProps } from '@mui/material';
import React from 'react';

interface Props extends BoxProps {
  children?: React.ReactNode;
}

const MyContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 0 80px;
`;

const Container: React.FC<Props> = ({ children, ...rest }) => {
  return <MyContainer {...rest}>{children}</MyContainer>;
};

export default Container;
