import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: '0',
    padding: '0',
    fontFamily: "'OpenDyslexicAlta-Regular', sans-serif",
    fontSize: '20px',
    lineHeight: '24px',
    color: '$text',
    tabSize: '2rem',
  },

  body: {
    backgroundColor: '$background'
  },

  a: {
    textDecoration: 'none'
  },

  main: {
    minWidth: '768px',
    maxWidth: '768px',
    margin: '5rem auto 1rem',
  },

  h1: {
    font: '2rem "Karate", sans-serif'
  },

  h2: {
    font: '1.5rem "Reggae One", sans-serif'
  },

  p: {
    marginBottom: '1.2rem'
  },

  'button pre': {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },

  'code.hljs': {
    display: 'block',
    textAlign: 'left',
    borderRadius: '0.5rem',
    padding: '1rem',
    font: '1rem "Jetbrains Mono", monospace',
    marginBottom: '0',

    span: {
      font: '1rem "Jetbrains Mono", monospace',
    }
  },
});


export default globalStyles;
