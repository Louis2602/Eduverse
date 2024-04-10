import { ICourse } from '@/type';

export const CoursesData: ICourse = [
  {
    id: '1',
    courseName: 'Photoshop for Beginner',
    courseThumbnailUrl: 'https://evondev.com/wp-content/uploads/2018/10/e-learning.jpg',
    currentPrice: '24',
    instructor: {
      name: 'Sonnie Heilds',
      avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
    },
    categories: ['UI Design', 'Photoshop'],
    language: 'Vietnamese',
    willLearn: [
      'Complete Python.',
      'Terminal based programming applications using Python.',
      'Artificial intelligent Python game.',
      'Turtle graphics for creating graphical applications and motion using Python',
      'Datascience and data visualisation using python.',
      'Data visualisation using Seaborn in python.'
    ],
    requirements: [
      'No coding experience is necessary to take this course! I take you from beginner to expert!',
      'Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.',
      'A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.'
    ],
    chapters: [
      {
        name: 'ABC',
        lessons: [
          { id: '1', name: 'HEHEHE', videoUrl: 'https://www.youtube.com/embed/jFfd0RYax5k?si=R8P9dURo16iLyrcv' },
          { id: '2', name: 'Tập tay', videoUrl: 'https://www.youtube.com/watch?v=MJWcvVGTnko&ab_channel=TheHinhOnline' }
        ]
      },
      {
        name: 'CHAPTER 2',
        lessons: [{ id: '3', name: 'JUKY SAN', videoUrl: 'https://www.youtube.com/watch?v=sv--JoyT0ik' }]
      }
    ]
  },
  {
    id: '2',
    courseName: 'HCMUS - Cơ sở trí tuệ nhân tạo',
    courseThumbnailUrl:
      'https://cdn.tgdd.vn/hoi-dap/1321801/javascript-la-gi-co-vai-tro-gi-cach-bat-javascript-tren.001.jpg',
    currentPrice: '15',
    instructor: {
      name: 'Jonash',
      avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
    },
    categories: ['Web Development'],
    language: 'english',
    willLearn: [
      'Become an advanced, confident, and modern JavaScript developer from scratch',
      'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)',
      'Become job-ready by understanding how JavaScript really works behind the scenes',
      'How to think and work like a developer: problem-solving, researching, workflows'
    ],
    requirements: [
      'No coding experience is necessary to take this course! I take you from beginner to expert!',
      'Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.',
      'A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.'
    ],
    chapters: [
      {
        name: 'ABC',
        lessons: [
          {
            id: '1',
            name: 'HEHEHE',
            videoUrl: 'https://www.youtube.com/watch?v=Ur3wlwz2piY&list=PLzT98eUM-jq8XKPK0DUJRtlihwPJW914K'
          },
          {
            id: '2',
            name: 'machine learning',
            videoUrl: 'https://www.youtube.com/watch?v=JrNjTfTQPuQ&list=PLzT98eUM-jq8XKPK0DUJRtlihwPJW914K&index=2'
          },
          {
            id: '3',
            name: 'PL Inference: Syntax, Semantics',
            videoUrl: 'https://www.youtube.com/watch?v=ejMY4WCW3hc&list=PLzT98eUM-jq8XKPK0DUJRtlihwPJW914K&index=11'
          },
          {
            id: '4',
            name: 'constraint graph, variables, domains, arc consistency, backtracking',
            videoUrl: 'https://www.youtube.com/watch?v=HlBCQDN3cM0&list=PLzT98eUM-jq8XKPK0DUJRtlihwPJW914K&index=12'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    courseName: 'Lập trình C++ cơ bản, nâng cao',
    courseThumbnailUrl:
      'https://funix.edu.vn/wp-content/uploads/2022/07/C%C3%A1c-b%C6%B0%E1%BB%9Bc-t%E1%BB%B1-h%E1%BB%8Dc-l%E1%BA%ADp-tr%C3%ACnh-c-hi%E1%BB%87u-qu%E1%BA%A3.jpeg',
    currentPrice: '24',
    instructor: {
      name: 'Bui Minh',
      avatarUrl:
        'https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-boy-man-round-frame-vector-cartoon-flat-illustration_551425-19.jpg?w=2000'
    },
    categories: ['UI Design', 'Programming'],
    language: 'Vietnamese',
    willLearn: [
      'Complete C++.',
      'Terminal based programming applications using Python.',
      'Artificial intelligent Python game.',
      'Turtle graphics for creating graphical applications and motion using Python',
      'Datascience and data visualisation using python.',
      'Data visualisation using Seaborn in python.'
    ],
    requirements: [
      'No coding experience is necessary to take this course! I take you from beginner to expert!',
      'Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.',
      'A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.'
    ]
  },
  {
    id: '4',
    courseName: 'Web development Learn Html in 2 hours with certification',
    courseThumbnailUrl:
      'https://wiki.matbao.net/wp-content/uploads/2019/09/html5-la-gi-html-va-html5-co-nhung-diem-khac-biet.png',
    currentPrice: '10',
    instructor: {
      name: 'Tran Kha',
      avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
    },
    categories: ['HTML', 'Coding'],
    language: 'English',
    willLearn: [
      'Paragraph tags',
      'Adding text on browser',
      'Creating tables',
      'Working with html files',
      'Datascience and data visualisation using python.',
      'Creating iframes'
    ],
    requirements: [
      'No coding experience is necessary to take this course! I take you from beginner to expert!',
      'Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.',
      'A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.'
    ]
  },
  {
    id: '5',
    courseName: 'Introduce to IT',
    courseThumbnailUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/7.png',
    currentPrice: '28',
    instructor: {
      name: 'Tung Lam',
      avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
    },
    categories: ['UI Design', 'Photoshop'],
    language: 'Vietnamese',
    willLearn: [
      'Complete Python.',
      'Terminal based programming applications using Python.',
      'Artificial intelligent Python game.',
      'Turtle graphics for creating graphical applications and motion using Python',
      'Datascience and data visualisation using python.',
      'Data visualisation using Seaborn in python.'
    ],
    requirements: [
      'No coding experience is necessary to take this course! I take you from beginner to expert!',
      'Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.',
      'A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.'
    ]
  },
  {
    id: '6',
    courseName: 'HTML CSS từ Zero đến Hero',
    courseThumbnailUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/2.png',
    currentPrice: '30',
    instructor: {
      name: 'Sonnie Heilds',
      avatarUrl: 'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'
    },
    categories: ['UI Design', 'Photoshop'],
    language: 'Vietnamese',
    willLearn: [
      'Complete Python.',
      'Terminal based programming applications using Python.',
      'Artificial intelligent Python game.',
      'Turtle graphics for creating graphical applications and motion using Python',
      'Datascience and data visualisation using python.',
      'Data visualisation using Seaborn in python.'
    ],
    requirements: [
      'No coding experience is necessary to take this course! I take you from beginner to expert!',
      'Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.',
      'A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.'
    ]
  }
];
