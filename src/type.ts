export interface ICourse {
  id: string;
  courseName: string;
  courseThumbnailUrl: string;
  currentPrice: string;
  instructor: IInstructor;
  categories: string[];
  language: string;
  willLearn: string[];
  requirements: string[];
  chapters?: IChapter[];
}

interface IChapter {
  name: string;
  lessons: ILesson[];
}

export interface ILesson {
  id: string;
  name: string;
  videoUrl: string;
}

export interface IInstructor {
  name: string;
  avatarUrl: string;
}

export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
