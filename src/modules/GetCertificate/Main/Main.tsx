import { Box, IconButton, TextField, Typography } from '@mui/material';
import { GetCertificate } from '@/assets';
import Image from 'next/image';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { MyButton } from '@/components';

const Main = () => {
  const handleCopyClick = () => {
    const textField = document.getElementById('outlined-read-only-input') as HTMLInputElement; // Lấy đối tượng TextField bằng ID

    if (textField) {
      textField.select(); // Chọn toàn bộ nội dung trong TextField
      document.execCommand('copy'); // Sao chép nội dung đã chọn vào clipboard
    }
  };

  return (
    <Box sx={{ padding: '48px 96px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <Box sx={{ width: '60%' }}>
        <Image alt="hinh" src={GetCertificate} />
      </Box>
      <Box sx={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%' }}>
          <TextField
            sx={{ width: '250px' }}
            id="outlined-read-only-input"
            defaultValue="https://eduverse.com/abcxyz"
            InputProps={{
              readOnly: true
            }}
          />
          <IconButton onClick={handleCopyClick} sx={{}}>
            <ContentCopyIcon />
          </IconButton>
        </Box>
        <MyButton
          variant="tertiary"
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            justifyItems: 'center'
          }}
        >
          <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: '600', color: 'var(--palette-05)' }}>
            Save as PDF
          </Typography>
        </MyButton>
      </Box>
    </Box>
  );
};

export default Main;
