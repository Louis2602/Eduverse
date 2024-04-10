import { Avatar, Box, Rating, Typography } from '@mui/material';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/router';
import { ICourse } from '@/type';
import { ROUTE } from '@/common/constants/route';
import { Google } from '@/assets';

interface CourseCardProps {
  course: ICourse;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const router = useRouter();

  return (
    <Box
      onClick={() => {
        router.push(`/${ROUTE.COURSE}/${course?.id}`);
      }}
      sx={{
        position: 'relative',
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '212px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        {/* Tag and Like  */}
        <Box
          sx={{
            width: '100%',
            padding: '24px',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyItems: 'center',
              background: 'var(--color-white)',
              padding: '4px 8px',
              borderRadius: '2px'
            }}
          >
            <Typography variant="body1" fontWeight={'semiBold'} color="var(--palette-03, #609966)">
              {course?.categories?.[0]}
            </Typography>
          </Box>
          <FavoriteBorderOutlinedIcon
            sx={{
              borderRadius: '50%',
              background: 'var(--color-white)',
              padding: '5px'
            }}
          />
        </Box>
        <img src={course?.courseThumbnailUrl} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px',
          height: 'auto',
          gap: '16px',
          background: 'var(--palette-05)'
        }}
      >
        {/* Course Info  */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
            <Avatar alt="Google" src={`${Google}`} sx={{ width: '32px', height: '32px' }} />
            <Typography variant="body2" fontWeight="semiBold">
              {course?.instructor?.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
            <AutoStoriesOutlinedIcon sx={{ color: 'var(--palette-02)' }} />
            <Typography variant="body2" fontWeight="semiBold" sx={{ color: 'var(--gray-03, #535353)' }}>
              16 lessons
            </Typography>
          </Box>
        </Box>
        {/* Course Title  */}
        <Typography
          variant="h6"
          fontFamily={'Poppins'}
          fontSize={'lg'}
          fontWeight={'bold'}
          sx={{ height: '100px', color: 'var(--palette-03, #609966)', width: '100%' }}
        >
          {course?.courseName}
        </Typography>
        <Divider variant="middle" sx={{ background: '#B9B9B9', width: '100%' }} />
        {/* Price and Rate  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <Typography variant="h6" fontFamily="Poppins" fontWeight={'semiBold'} color="var(--palette-03, #609966)">
            ${course?.currentPrice}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Rating name="read-only" value={4} readOnly size="small" />
            <Typography variant="body1" fontFamily={'Nunito'} fontWeight={'medium'} color="var(--gray-02, #929292)">
              (99)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCard;
