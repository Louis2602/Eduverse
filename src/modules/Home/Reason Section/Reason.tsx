import CardContent from '@mui/material/CardContent';
import { Box, CardActionArea } from '@mui/material';
import { reasons } from '../Courses Categories/fakeData';
import Image from 'next/image';
import { CardAction, CardTitle, CardsContent, MyCard, MyCardContainer, MyTilte, ReasonsSection } from './StyleReason';
import Title from '../components/Title/Title';

const Reasons = () => {
  return (
    <ReasonsSection>
      <Title title="4 REASONS" subtitle="Why You Should Choose Us?" />
      <MyCardContainer>
        {reasons.map(item => (
          <MyCard>
            <CardAction>
              <Box sx={{ width: '100px', height: '100px' }}>
                <Image src={item.img} width={100} height={100} alt="hinh" />
              </Box>
              <CardsContent>
                <CardTitle>{item.title}</CardTitle>
                <CardsContent>{item.content}</CardsContent>
              </CardsContent>
            </CardAction>
          </MyCard>
        ))}
      </MyCardContainer>
    </ReasonsSection>
  );
};

export default Reasons;
