import { ArrowRight } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import {
  MyBtnContent,
  MyCard,
  MyCardTypeText,
  MyCardValueText,
  MyClaimBtn,
  MyClaimText,
  MyContainer,
  MyDescText,
  MyDescription,
  MyDiscountText,
  MySubTitle,
  MyTimeCardWrapper,
  MyTitle,
  MyTitleWrapper
} from './StyleExclusiveOffer';

const timeData = [
  {
    type: 'Days',
    value: '26'
  },
  {
    type: 'Hours',
    value: '01'
  },
  {
    type: 'Minutes',
    value: '22'
  },
  {
    type: 'Seconds',
    value: '13'
  }
];

const ExclusiveOffer = () => {
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  const numberTimeCardRender: number = isSmallScreen ? timeData.length - 1 : timeData.length;

  return (
    <MyContainer>
      <MyTitleWrapper>
        <MySubTitle fontFamily="Poppins" color="var(--palette-01)" fontWeight="bold">
          Don&apos;t Miss Out On Our
        </MySubTitle>
        <MyTitle fontFamily="Poppins" color="var(--palette-03)" fontWeight="bold" textAlign="center">
          Exclusive Offer!
        </MyTitle>
      </MyTitleWrapper>
      <MyTimeCardWrapper>
        {timeData.slice(0, numberTimeCardRender).map(item => (
          <MyCard key={item.type}>
            <MyCardValueText fontFamily="Poppins" fontWeight="bold" color="var(--palette-01)" textAlign="center">
              {item.value}
            </MyCardValueText>
            <MyCardTypeText fontWeight="bold" color="var(--color-black)" textAlign="center">
              {item.type}
            </MyCardTypeText>
          </MyCard>
        ))}
      </MyTimeCardWrapper>
      <MyDescription>
        <MyDescText fontWeight="medium">
          Claim your limited-time offer now and enjoy a generous <br /> <MyDiscountText> 15% discount </MyDiscountText>
          on our courses.
        </MyDescText>
      </MyDescription>
      <MyClaimBtn variant="secondary">
        <MyBtnContent>
          <MyClaimText fontFamily="Nunito" fontWeight="semiBold" color="var(--color-white)">
            Claim Now
          </MyClaimText>
          <ArrowRight style={{ fill: 'var(--color-white)', fontSize: '32px' }} />
        </MyBtnContent>
      </MyClaimBtn>
    </MyContainer>
  );
};

export default ExclusiveOffer;
