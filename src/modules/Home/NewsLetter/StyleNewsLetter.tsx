import TextInput from '@/components/Typography/Typography';
import { styled } from '@mui/material';

export const MyDiscountText = styled(TextInput)(({ theme }) => ({
  fontWeight: 700,
  color: 'var(--palette-02)',
  fontSize: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px'
  }
}));
