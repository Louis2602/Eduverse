import Typography from '@/components/Typography/Typography';
import { Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/system';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RadioGroup from '@mui/material/RadioGroup';
import PaypalImg from '../paypal.png';
import Image from 'next/image';
import VisaImg from '../visa.png';
import DisImg from '../discorver.png';
import MasterImg from '../master.png';

const MyPaymentMethod = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  justifyItems: 'center',
  gap: '16px',
  [theme.breakpoints.down('sm')]: {}
}));

const MyTitle = styled(Typography)(({ theme }) => ({
  color: 'var(--palette-02, #507551)',
  fontSize: '48px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('sm')]: {}
}));

const MethodTilte = styled(Typography)(({ theme }) => ({
  color: '#000',
  fontSize: '16px',
  fontWeight: '700',
  fontFamily: 'Poppins',
  [theme.breakpoints.down('sm')]: {}
}));

const AllMethods = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '8px',
  border: '1px solid var(--palette-04, #9DC08B)',
  background: 'var(--palette-05, #EDF1D6)',
  [theme.breakpoints.down('sm')]: {}
}));

const Method = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  border: '1px solid var(--palette-04, #9DC08B)',
  background: 'var(--palette-05, #EDF1D6)',
  [theme.breakpoints.down('sm')]: {}
}));

const PaymentMethod = () => {
  return (
    <MyPaymentMethod>
      <MyTitle>Payment method</MyTitle>
      <AllMethods>
        <RadioGroup defaultValue={'Credit/Debit Card'}>
          {/* Credit Card/Debit Card */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 12px',
              borderBottom: '1px solid var(--palette-04, #9DC08B)'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Radio color="success" size="small" value={'Credit/Debit Card'} />
              <CreditCardIcon sx={{ height: '38px', width: '48px', backgroundColor: 'white', borderRadius: '4px' }} />
              <MethodTilte>Credit/Debit Card</MethodTilte>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flexDirection: 'row' }}>
              <Box sx={{ width: '50px', height: '30px' }}>
                <Image
                  src={DisImg}
                  alt="discover"
                  style={{ borderRadius: '4px', objectFit: 'contain', backgroundColor: 'white' }}
                />
              </Box>
              <Box sx={{ width: '50px', height: '30px' }}>
                <Image
                  src={MasterImg}
                  alt="master"
                  style={{ borderRadius: '4px', objectFit: 'contain', backgroundColor: 'white' }}
                />
              </Box>
              <Box sx={{ width: '50px', height: '30px' }}>
                <Image
                  src={VisaImg}
                  alt="visa"
                  style={{ borderRadius: '4px', objectFit: 'contain', backgroundColor: 'white' }}
                />
              </Box>
            </Box>
          </Box>
          {/* Paypal  */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Radio color="success" size="small" value={'Paypal'} />
              <Image
                src={PaypalImg}
                alt="paypal"
                width={40}
                height={30}
                style={{ borderRadius: '4px', objectFit: 'contain' }}
              />
              <MethodTilte>Paypal</MethodTilte>
            </Box>
          </Box>
        </RadioGroup>
      </AllMethods>
    </MyPaymentMethod>
  );
};

export default PaymentMethod;
