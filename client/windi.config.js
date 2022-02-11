import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(278 100% 69% / 1)',
      },
      fontFamily: {
        body: ['Source Sans Pro', 'sans-serif', 'system-ui'],
        serif: ['Noto Serif', 'serif']
      },
      backgroundImage: {
        'login-btn-gradient': "linear-gradient(135deg, #5243FF 10%, #9708CC 100%)",
        'header-gradient': "linear-gradient(to right, rgb(107, 33, 168), rgba(131, 51, 18, 0))",
        'container-gradient': "linear-gradient(90deg, rgba(0, 0, 0, 0.38) 3.07%, rgba(6, 37, 65, 0.3) 88.06%)",
        'stats-gradient': 'linear-gradient(80deg, #252728 0%, #101415 100%)',
        'navbar-bg': "linear-gradient(200deg,#38135e 14%,#141218 78%);",
        'header-bg': "linear-gradient(45.75deg, rgb(111, 27, 168) 0%, rgb(29, 29, 30) 43.66%, rgb(48, 34, 79) 64.23%, rgba(47, 30, 64, 0.3)80.09%,rgba(96, 50, 164, 0.19) 83.76%, rgb(104, 30, 111) 100%)"
      }
    },
  },
  shortcuts: {
    'btn-range': 'relative inline-flex items-center px-2 py-1 lg:py-1 mt-2 m rounded-l-md border border-true-gray-600 font-medium text-gray-100 hover:text-primary focus:(z-10 outline-none ring-2 ring-blue-gray-200 border-violet-500)',
    'btn-log': 'inline-flex items-center px-6 py-3 bg-transparent border-2 border-primary text-primary text-lg font-bold font-serif uppercase hover:(bg-primary text-light-100 border-primary rounded-[60px]) focus:(outline-none ring-2 ring-offset-2 ring-purple-600) transition-all delay-0 ease-in duration-500',
    'logo': { 'margin': '1.5rem clamp(1.5rem, 5vw, 3.5rem)' },
    'box-shadow-header': { 'box-shadow': '0px 0px 30px #000' },
    'box-shadow-container': { 'box-shadow': '0px 0px 30px #000' },
    'box-shadow-stats-container': { 'box-shadow': '0px 0px 8px #000' },
    'title-text-shadow': { 'text-shadow': '0px 0px 5px #000' },
    'title-active-shadow': { 'box-shadow': '0px 0px 10px #427ed1, 0px 0px 10px #427ed1' },
    'text-slogan-color': {
      'background': 'rgba(0, 0, 0, 0) linear-gradient(310deg, rgb(127, 127, 127) 25%, rgb(221, 186, 255) 100%) repeat scroll 0% 0% padding-box text',
      '-webkit-text-fill-color': '#ae787800'
    },
    'nav-mobile': {
      'inset': '0 0 0 30%',
      'padding': 'min(20rem, 15vh) 2rem',
      'z-index': '1000',
      'transform': 'translateX(0)',
      'transition': 'transform 500ms ease-in-out',
      '@apply': 'flex-col fixed m-0 bg-dark-900 opacity-95',
    },
    'nav-mobile-hidden': {
      'inset': '0 0 0 30%',
      'padding': 'min(20rem, 15vh) 2rem',
      'z-index': '1000',
      'transform': 'translateX(100%)',
      'transition': 'transform 500ms ease-in-out',
      '@apply': 'flex-col fixed m-0 bg-dark-900 opacity-75'
    },
    'nav-mobile-toggle': {
      'aspect-ratio': '1',
      'background': "url('../src/assets/toggle-icon.svg')",
      'z-index': '9999',
      '@apply': 'absolute bg-center bg-no-repeat rounded-none top-8 right-8 w-8'
    },
    'breadcrumb': {
      '@apply': 'flex text-light-500',
      '&:after': {
        '@apply': 'block my-0 mx-2',
        'content': "'/'"
      }
    },
    'stats-bar-filled': {
      'box-shadow': '0px 0px 10px #7532db, 0px 0px 10px #b7a2dd',
      'transition-property': 'width',
      'transition-duration': '0.6s',
      'transition-delay': '0.1s',
      '@apply': 'absolute h-full w-0 left-0 top-0 bg-white'
    }
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
  ],
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      'src/**/*.{vue,html,jsx,tsx}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
});