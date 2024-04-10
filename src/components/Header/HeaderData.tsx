import { CATEGORY } from '@/common/constants/category';

export interface INavContent {
  name: string;
  slug: string;
  subs?: INavContent[];
}

export const NavbarItems: INavContent[] = [
  {
    name: 'Home',
    slug: `/${CATEGORY.HOME}`,
    subs: []
  },
  {
    name: 'Courses',
    slug: `/${CATEGORY.COURSES}`,
    subs: [
      {
        name: 'Software Engineering',
        slug: `/courses/${CATEGORY.COURSES}/${CATEGORY.SOFTWARE_ENGINEERING}`
      },
      {
        name: 'Machine Learning',
        slug: `/courses/${CATEGORY.COURSES}/${CATEGORY.MACHINE_LEARNING}`
      },
      {
        name: 'Test',
        slug: `/courses/${CATEGORY.COURSES}/${CATEGORY.TEST}`
      }
    ]
  },
  {
    name: 'Teachers',
    slug: `/${CATEGORY.TEACHERS}`,
    subs: []
  },
  {
    name: 'About us',
    slug: `/${CATEGORY.ABOUT}`,
    subs: []
  },
  {
    name: 'Contact us',
    slug: `/${CATEGORY.CONTACT}`,
    subs: []
  },
  {
    name: 'FAQ',
    slug: `/${CATEGORY.FAQ}`,
    subs: []
  }
];
