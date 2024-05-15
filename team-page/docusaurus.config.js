// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '스프린터즈9 - Fandom-K 프로젝트',
  tagline: '코드잇 스프린트 Fandom-K',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://codeit-sprint-6-part-2-team-9.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/frontend/team-page/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sprinters9', // Usually your GitHub org/user name.
  projectName: 'Fandom-K', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Codeit-Sprint-6-Part-2-Team-9/frontend/tree/main/blog/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Codeit-Sprint-6-Part-2-Team-9/frontend/tree/main/blog/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fandom-K 프로젝트',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: '블로그', position: 'left'},
          {
            href: 'https://github.com/Codeit-Sprint-6-Part-2-Team-9/frontend/',
            label: '깃허브',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Fandom-K',
            items: [
              {
                label: '이 프로젝트는',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '커뮤니티',
            items: [
              {
                label: '코드잇 스프린트',
                href: 'https://sprint.codeit.kr',
              },
            ],
          },
          {
            title: '더보기',
            items: [
              {
                label: '팀 블로그',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Codeit-Sprint-6-Part-2-Team-9/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sprinters9.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
