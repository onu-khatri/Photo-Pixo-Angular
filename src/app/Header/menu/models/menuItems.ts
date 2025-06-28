export interface MenuItem {
  label: string;
  link: string;
  icon: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: 'Inspiration',
    link: '/inspiration',
    icon: 'inspiration',
    children: [
      {
        label: 'For You',
        link: '/inspiration/for-you',
        icon: 'for-you',
      },
      {
        label: 'Explore',
        link: '/inspiration/explore',
        icon: 'explore',
      },
      {
        label: 'Popular Photos',
        link: '/inspiration/popular-photos',
        icon: 'popular-photos',
      },
      {
        label: "Editor's Choice",
        link: '/inspiration/editors-choice',
        icon: 'editors-choice',
      },
      {
        label: 'Photo Stories',
        link: '/inspiration/photo-stories',
        icon: 'photo-stories',
      },
      {
        label: 'Galleries',
        link: '/inspiration/galleries',
        icon: 'galleries',
      },
      {
        label: 'Categories',
        link: '/inspiration/categories',
        icon: 'categories',
      },
    ],
  },
  {
    label: 'Photographers',
    link: '/photographers',
    icon: 'photographers',
    children:[
      {
        label: 'All Photographers',
        link: '/photographers/all',
        icon: 'all-photographers',
      },
      {
        label: 'For Hire',
        link: '/photographers/for-hire',
        icon: 'for-hire',
      },
      {
        label: 'Featured',
        link: '/photographers/featured',
        icon: 'featured',
      },
      {
        label: 'Quest Winners',
        link: '/photographers/quest-winners',
        icon: 'quest-winners',
      },
      {
        label: 'Ambassadors',
        link: '/photographers/ambassadors',
        icon: 'ambassadors',
      }
    ]
  },
  {
    label: 'Quest',
    link: '/quest',
    icon: 'quest',
    children:[
      {
        label: 'Global Award',
        link: '/quest/global-award',
        icon: 'global-award',
      },
      {
        label: 'Community',
        link: '/quest/community',
        icon: 'community',
      },
      {
        label: 'Sponsored',
        link: '/quest/sponsored',
        icon: 'sponsored',
      },
      {
        label: 'Licensing',
        link: '/quest/licensing',
        icon: 'licensing',
      }
    ]
  },
  {
    label: 'Licensing',
    link: '/licensing',
    icon: 'licensing',
    children:[
      {
        label: 'About Licensing',
        link: '/licensing/about-licensing',
        icon: 'about-licensing',
      },
      {
        label:'Become a Contributor',
        link: '/licensing/become-a-contributor',
        icon: 'become-a-contributor',
      },
      {
        label: 'Submission requirements',
        link: '/licensing/submission-requirements',
        icon: 'submission-requirements',
      },
      {
        label: 'Content types',
        link: '/licensing/content-types',
        icon: 'content-types',
      },
      {
        label: 'Content Distribution',
        link: '/licensing/content-distribution',
        icon: 'content-distribution',
      },
      {
        label: 'Commerical Grants',
        link: '/licensing/commercial-grants',
        icon: 'commercial-grants',
      }
    ]
  },
  {
    label: 'Blog',
    link: '/blog',
    icon: 'blog',
  },
  {
    label: 'Memberships',
    link: '/memberships',
    icon: 'memberships'
  }

];
