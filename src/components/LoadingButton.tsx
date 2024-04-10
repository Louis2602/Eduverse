import React from 'react';
import { styled, CircularProgress } from '@mui/material';
import { LoadingButton as MuiLoadingButton } from '@mui/lab';

interface ILoadingButtonProps {
  text?: string;
  isLoading?: boolean | undefined;
  loadingColor?: string;
  loadingIndicator?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const MyLoadingButton = styled(MuiLoadingButton)`
  text-transform: none;
  align-items: center;
  justify-content: center;
  background-color: var(--palette-01);
  &:hover {
    background-color: var(--palette-01);
  }
`;

const LoadingButton = ({
  text,
  isLoading,
  loadingColor,
  loadingIndicator,
  disabled,
  onClick,
  ...rest
}: ILoadingButtonProps) => {
  return (
    <>
      <MyLoadingButton
        {...rest}
        disabled={disabled}
        loading={isLoading}
        variant="outlined"
        onClick={onClick}
        type="submit"
        sx={{
          width: '100%',
          py: 1,
          m: '0 auto',
          color: loadingColor,
          fontSize: '20px'
        }}
        loadingIndicator={
          loadingIndicator ? loadingIndicator : <CircularProgress size={25} sx={{ color: loadingColor }} />
        }
      >
        {text}
      </MyLoadingButton>
    </>
  );
};

export default LoadingButton;
