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

// Icons
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { getRandomId } from '@/common/utils/genId';

interface IChapterModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setChapters: React.Dispatch<React.SetStateAction<never[]>>;
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

const ChapterModal = ({ open, setOpen, setChapters }: IChapterModal) => {
  const [chapter, setChapter] = React.useState({
    name: '',
    lessons: '',
    lessons_link: ''
  });

  const handleClose = () => {
    setOpen(false);
  };

  const active = !chapter.name || !chapter.lessons || !chapter.lessons_link;

  const ChapterHandler = (e: any) => {
    const { name, value } = e.target;
    setChapter(pre => {
      return {
        ...pre,
        [name]: value
      };
    });
  };
  const handleAddChapter = () => {
    const lesson_names = chapter.lessons.split('\n').map(item => item.replace(/^\d+\.\s*/, ''));
    const lesson_links = chapter.lessons_link.split('\n').map(item => item.replace(/^\d+\.\s*/, ''));
    const lessons = lesson_names.map((lesson, index) => ({
      id: getRandomId(),
      name: lesson,
      videoUrl: lesson_links[index]
    }));
    const chapterData = {
      name: chapter.name,
      lessons: lessons
    };
    setChapters(prev => {
      return [...prev, chapterData];
    });
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <IconButton
        disableRipple
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        onClick={handleClose}
      >
        <CancelOutlinedIcon
          sx={{ fontSize: '32px', color: 'var(--palette-01)', marginTop: 2, marginRight: 2, marginBottom: -8 }}
        />
      </IconButton>
      <StyledDialogTitle id="alert-dialog-title">Create a chapter</StyledDialogTitle>
      <DialogContent>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Chapter Name *
          </Typography>
          <TextField
            id="name"
            name="name"
            type="text"
            required
            fullWidth
            placeholder="Enter your chapter name"
            onChange={ChapterHandler}
            value={chapter.name}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Lesson Name *
          </Typography>
          <TextField
            id="lesson_name"
            name="lessons"
            type="text"
            required
            multiline
            rows={5}
            fullWidth
            placeholder="Enter your lesson name"
            onChange={ChapterHandler}
            value={chapter.lessons}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Lesson Youtube Link *
          </Typography>
          <TextField
            id="youtube_link"
            name="lessons_link"
            type="text"
            required
            fullWidth
            multiline
            rows={5}
            placeholder="Enter your links"
            onChange={ChapterHandler}
            value={chapter.lessons_link}
          />
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 4 }}>
        <MyButton
          variant="primary"
          sx={{
            color: active ? 'var(--color-black)' : 'var(--color-white)',
            backgroundColor: active ? 'var(--gray-02)' : 'var(--palette-01)',
            width: '95%'
          }}
          onClick={handleAddChapter}
          disabled={active}
        >
          Add a chapter
        </MyButton>
      </DialogActions>
    </Dialog>
  );
};

export default ChapterModal;
