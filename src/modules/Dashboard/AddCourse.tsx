import React from 'react';

// Mui Imports
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Typography from '@/components/Typography/Typography';
import { MyButton } from '@/components';

import { styled } from '@mui/material/styles';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// Icons
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { toast } from 'react-toastify';
import { storage } from '@/config/firebase.config';
import { Box, LinearProgress } from '@mui/material';
import { addNewCourse } from '@/services/course';
import ChapterModal from './ChapterModal';
import { useAuth } from '@/common/context/AuthContext';
import { useSession } from 'next-auth/react';

interface IAddCourse {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledDialogTitle = styled(DialogTitle)`
  font-size: 36px;
  font-weight: bold;
  font-family: Poppins;
  color: var(--palette-02);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddCourse = ({ open, setOpen }: IAddCourse) => {
  const [course, setCourse] = React.useState({
    name: '',
    currentPrice: '',
    language: '',
    willLearn: '',
    requirements: ''
  });
  const [chapters, setChapters] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState<File>();
  const [progressUpload, setProgressUpload] = React.useState(0);
  const [openChapterModal, setOpenChapterModal] = React.useState(false);
  const { data: session } = useSession();

  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setThumbnail(files[0]);
    } else {
      toast('File size to large', {
        position: 'top-center',
        type: 'error',
        theme: 'colored',
        autoClose: 2000
      });
    }
  };
  const CreateNewCourse = async () => {
    if (thumbnail) {
      const name = thumbnail?.name;
      const storageRef = ref(storage, `course_thumbnails/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, thumbnail);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgressUpload(progress); // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        error => {
          console.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(url => {
            //url is download url of file
            const courseData = {
              courseName: course.name,
              courseThumbnailUrl: url,
              currentPrice: course.currentPrice,
              language: course.language,
              willLearn: course.willLearn.split('\n'),
              requirements: course.requirements.split('\n'),
              chapters: chapters,
              userId: session?.user.uid
            };
            addNewCourse(courseData);
            toast(`Create new course successfully`, {
              position: 'top-center',
              type: 'success',
              theme: 'colored',
              autoClose: 2000
            });
            setCourse({
              name: '',
              currentPrice: '',
              language: '',
              willLearn: '',
              requirements: ''
            });
            setOpen(false);
          });
        }
      );
    } else {
      toast('File not found', {
        position: 'top-center',
        type: 'error',
        theme: 'colored',
        autoClose: 2000
      });
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const active = !course.name || !course.currentPrice || !course.language || !course.requirements || !course.willLearn;

  const CourseHandler = (e: any) => {
    const { name, value } = e.target;
    setCourse(pre => {
      return {
        ...pre,
        [name]: value
      };
    });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      <IconButton
        disableRipple
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        onClick={handleClose}
      >
        <CancelOutlinedIcon
          sx={{ fontSize: '32px', color: 'var(--palette-01)', marginTop: 2, marginRight: 2, marginBottom: -8 }}
        />
      </IconButton>
      <StyledDialogTitle id="alert-dialog-title">Create a course</StyledDialogTitle>
      <DialogContent>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Course Name *
          </Typography>
          <TextField
            id="courseName"
            name="name"
            type="text"
            required
            fullWidth
            placeholder="Enter course name"
            onChange={CourseHandler}
            value={course.name}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Course Thumbnail *
          </Typography>
          <TextField
            id="thumbnail"
            name="thumbnail"
            type="file"
            accept="image/png"
            required
            fullWidth
            onChange={files => handleSelectedFile(files.target.files)}
          />
          <LinearProgress value={progressUpload} variant="determinate" />
        </FormControl>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Set Price *
          </Typography>
          <TextField
            id="currentPrice"
            type="number"
            name="currentPrice"
            required
            fullWidth
            onChange={CourseHandler}
            value={course.currentPrice}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Language *
          </Typography>
          <TextField
            id="language"
            type="text"
            name="language"
            required
            fullWidth
            onChange={CourseHandler}
            value={course.language}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Things Will Learn *
          </Typography>
          <TextField
            id="willLearn"
            name="willLearn"
            type="text"
            required
            multiline
            rows={5}
            fullWidth
            placeholder="Enter things will learn"
            onChange={CourseHandler}
            value={course.willLearn}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Requirements *
          </Typography>
          <TextField
            id="requirements"
            name="requirements"
            type="text"
            required
            fullWidth
            placeholder="Enter requirements"
            multiline
            onChange={CourseHandler}
            value={course.requirements}
            rows={5}
          />
        </FormControl>
        <MyButton
          variant="primary"
          sx={{
            color: 'var(--color-white)'
          }}
          onClick={() => setOpenChapterModal(true)}
        >
          Add a chapter
        </MyButton>
        <ChapterModal open={openChapterModal} setOpen={setOpenChapterModal} setChapters={setChapters} />
        {chapters.map(chapter => (
          <Box
            key={chapter?.id}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: 2,
              width: '30%',
              display: 'flex',
              marginY: 2
            }}
          >
            {chapter?.name}
          </Box>
        ))}
      </DialogContent>
      <DialogActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 4 }}>
        <MyButton
          variant="primary"
          sx={{
            color: active ? 'var(--color-black)' : 'var(--color-white)',
            backgroundColor: active ? 'var(--gray-02)' : 'var(--palette-01)'
          }}
          onClick={CreateNewCourse}
          disabled={active}
        >
          Create a course
        </MyButton>
      </DialogActions>
    </Dialog>
  );
};

export default AddCourse;
