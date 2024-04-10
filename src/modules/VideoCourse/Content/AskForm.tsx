import React from 'react';

// Mui Imports
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@/components/Typography/Typography';
import { MyButton } from '@/components';

import { styled } from '@mui/material/styles';

// Icons
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

interface IAskForm {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const StyledDialogTitle = styled(DialogTitle)`
  font-size: 36px;
  font-weight: bold;
  font-family: Poppins;
  color: var(--palette-02);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const lessons = [
  'Introduction to Photoshop Tools and Workspace',
  'Photoshop Basic Hotkeys',
  'Photoshop advanced: How to crop image'
];

const AskForm = ({ open, setOpen }: IAskForm) => {
  const [lessonName, setLessonName] = React.useState<string>('');
  const [question, setQuestion] = React.useState<string>('');
  const [active, setActive] = React.useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChooseLesson = (event: SelectChangeEvent<typeof lessonName>) => {
    setLessonName(event.target.value);
  };
  const handleQuestion = (event: any) => {
    setQuestion(event.target.value);
  };
  const handleSendQuestion = () => {
    console.log({ lessonName, question });
  };

  React.useEffect(() => {
    if (lessonName && question) {
      setActive(false);
    } else {
      setActive(true);
    }
    console.log(active);
  });

  return (
    <Dialog open={open} onClose={handleClose} fullWidth sx={{}}>
      <IconButton
        disableRipple
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        onClick={handleClose}
      >
        <CancelOutlinedIcon
          sx={{ fontSize: '32px', color: 'var(--palette-01)', marginTop: 2, marginRight: 2, marginBottom: -8 }}
        />
      </IconButton>
      <StyledDialogTitle id="alert-dialog-title">Ask A Question</StyledDialogTitle>
      <DialogContent>
        <FormControl variant="standard" fullWidth sx={{ marginBottom: 2 }}>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Your Lesson *
          </Typography>
          <Select
            value={lessonName}
            displayEmpty
            onChange={handleChooseLesson}
            input={<OutlinedInput />}
            renderValue={selected => {
              if (selected.length === 0) {
                return <em>Select Your Lesson</em>;
              }
              return selected;
            }}
            MenuProps={MenuProps}
          >
            <MenuItem disabled value="">
              <em>Select Your Lesson</em>
            </MenuItem>
            {lessons.map(lesson => (
              <MenuItem key={lesson} value={lesson}>
                {lesson}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <Typography fontSize="md" fontWeight="bold" color="var(--palette-01)" gutterBottom>
            Your Question *
          </Typography>
          <TextField
            id="question"
            type="text"
            required
            fullWidth
            placeholder="Enter your question"
            multiline
            onChange={handleQuestion}
            value={question}
            rows={5}
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
          onClick={handleSendQuestion}
          disabled={active}
        >
          Send
        </MyButton>
      </DialogActions>
    </Dialog>
  );
};

export default AskForm;
