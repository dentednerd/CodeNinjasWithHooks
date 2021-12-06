import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: '0',
    padding: '0',
    fontFamily: "'OpenDyslexicAlta-Regular', sans-serif",
    fontSize: '20px',
    lineHeight: '24px',
    color: '$text'
  },

  body: {
    backgroundColor: '$background'
  },

  a: {
    textDecoration: 'none'
  },

  main: {
    minWidth: '600px',
    maxWidth: '600px',
    margin: '5rem auto 1rem'
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

  code: {
    display: 'block',
    textAlign: 'left',
    backgroundColor: '$text',
    color: '$highlight',
    marginBottom: '1rem',
    borderRadius: '1rem',
    padding: '1rem',
    font: '1rem "Jetbrains Mono", monospace'
  },
});


export default globalStyles;
