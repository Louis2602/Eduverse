import { Box, Breadcrumbs } from '@mui/material';
import { useRouter } from 'next/router';
import { CategoryBox } from './StyleCategory';
import Typography from '@/components/Typography/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import Result from '../SearchPage/Result/Result';
const Category = () => {
  const router = useRouter();
  const { categorySlug } = router.query;
  const breadcrumbs = [
    <Typography sx={{ fontSize: '18px', color: 'var(--palette-01, #40513B)' }} key="1">
      Course
    </Typography>,
    <Typography sx={{ fontSize: '18px', color: 'var(--palette-01, #40513B)' }} key="2">
      categorySlug
    </Typography>
  ];
  return (
    <Box sx={{ width: '100%' }}>
      <CategoryBox>
        <Breadcrumbs
          separator={<CircleIcon sx={{ fontSize: '4px', color: 'var(--palette-01, #40513B)' }} />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '140%',
            color: 'var(--palette-01, #40513B)'
          }}
        >
          UI DESIGN
        </Typography>
      </CategoryBox>
      <Result />
    </Box>
  );
};

export default Category;
