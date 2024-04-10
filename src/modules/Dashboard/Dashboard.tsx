import React from 'react';
import StudentsTable from './StudentsTable';
import { MainLayout, MyButton } from '@/components';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import CoursesTable from './CoursesTable';
import AddCourse from './AddCourse';
import { toast } from 'react-toastify';

const Wrapper = styled(Box)`
  padding: 32px;
  margin: 32px;
  border: 1px solid #ccc;
  border-radius: 16px;
`;

const Dashboard = () => {
  const [openCourse, setOpenCourse] = React.useState(false);

  return (
    <MainLayout>
      <Wrapper>
        <Box marginBottom={4}>
          <Typography
            fontSize="36px"
            sx={{ color: 'var(--palette-01)' }}
            fontFamily="Poppins"
            fontWeight="medium"
            gutterBottom
          >
            Functionalities
          </Typography>
          <Box display="flex" flexDirection="row" gap={4}>
            <MyButton
              variant="secondary"
              sx={{
                padding: 3,
                '&:hover': {
                  backgroundColor: 'var(--palette-03)'
                }
              }}
              onClick={() => setOpenCourse(true)}
            >
              <Typography color="var(--palette-05)" fontSize="xxl">
                Add new course
              </Typography>
            </MyButton>
            <MyButton
              variant="secondary"
              sx={{
                padding: 3,
                '&:hover': {
                  backgroundColor: 'var(--palette-03)'
                }
              }}
              onClick={() => {
                toast('This function will be available soon!', {
                  position: 'top-center',
                  type: 'info',
                  theme: 'colored',
                  autoClose: 2000
                });
              }}
            >
              <Typography color="var(--palette-05)" fontSize="xxl">
                Create mock test
              </Typography>
            </MyButton>
            <MyButton
              variant="secondary"
              sx={{
                padding: 3,
                '&:hover': {
                  backgroundColor: 'var(--palette-03)'
                }
              }}
              onClick={() => {
                toast('This function will be available soon!', {
                  position: 'top-center',
                  type: 'info',
                  theme: 'colored',
                  autoClose: 2000
                });
              }}
            >
              <Typography color="var(--palette-05)" fontSize="xxl">
                View all documents
              </Typography>
            </MyButton>
          </Box>
        </Box>
        <Box>
          <Typography
            fontSize="36px"
            sx={{ color: 'var(--palette-01)' }}
            fontFamily="Poppins"
            fontWeight="medium"
            gutterBottom
          >
            Courses list
          </Typography>
          <CoursesTable />
        </Box>

        <Box>
          <Typography
            fontSize="36px"
            sx={{ color: 'var(--palette-01)' }}
            fontFamily="Poppins"
            fontWeight="medium"
            gutterBottom
          >
            Student list
          </Typography>
          <StudentsTable />
        </Box>
      </Wrapper>
      <AddCourse open={openCourse} setOpen={setOpenCourse} />
    </MainLayout>
  );
};

export default Dashboard;
