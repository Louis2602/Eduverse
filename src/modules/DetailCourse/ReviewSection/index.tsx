import React from 'react';
import { MySectionTitle } from '../Content/Content';
import { Rating, Stack, TextField, styled } from '@mui/material';
import Typography from '@/components/Typography/Typography';
import Icon from '@/components/Icon';

const MyCard = styled('div')({
  padding: '1rem',
  borderRadius: '8px',
  border: '1px solid var(--palette-04)',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
});

const MyText = styled(Typography)({
  color: 'var(--color-black)'
});

const MyName = styled(Typography)({
  color: 'var(--color-black)',
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: '600'
});

const MyAvatar = styled('div')({
  width: '48px',
  height: '48px',
  borderRadius: '4px'
});

const MyInputWrapper = styled('div')({
  borderRadius: '8px',
  backgroundColor: 'var(--palette-05)',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const MyInput = styled('input')({
  outline: 'none',
  border: 'none',
  background: 'inherit'
});

const MySeemoreText = styled(Typography)({
  color: 'var(--palette-01)',
  fontSize: '18px',
  fontWeight: '700',
  textAlign: 'center',
  cursor: 'pointer'
});

const Review = () => {
  return (
    <Stack direction="column" spacing="16px">
      <MySectionTitle>Reviews</MySectionTitle>
      <MyInputWrapper>
        <Stack direction="row" spacing="16px" alignItems="center">
          <MyAvatar>
            <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
          </MyAvatar>
          <Stack direction="column" spacing="8px">
            <Rating value={4} />
            <MyInput placeholder="Share your thoughts" />
          </Stack>
        </Stack>
        <Icon.Send />
      </MyInputWrapper>
      {[1, 2, 3].map(item => (
        <MyCard key={item}>
          <Stack direction="row" spacing="16px">
            <MyAvatar>
              <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
            </MyAvatar>
            <Stack direction="column" spacing="8px">
              <MyName>D. Batty</MyName>
              <Rating name="read-only" value={4} readOnly />
            </Stack>
          </Stack>
          <MyText>
            "Ugh, I hate updating my CV. It's like trying to sell yourself without sounding too cocky. And don't even
            get me started on choosing the right font. Can't someone just create a CV generator that does it all for us?
            I'd pay good money for that convenience."
          </MyText>
        </MyCard>
      ))}
      <MySeemoreText>See more (34)</MySeemoreText>
    </Stack>
  );
};

export default Review;
