import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';

import config from '../../config';

import Button from '../../atoms/Button';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const StyledNav = styled('nav', {
    position: 'fixed',
    top: '0',
    width: 'calc(100% - 2rem)',
    height: '4rem',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 0.25rem 0.5rem $colors$accent',
    padding: '0 1rem',
    backgroundColor: '$highlight',
    zIndex: '3',

    ul: {
      position: 'absolute',
      top: '5rem',
      right: '2rem',
      width: '10rem',
      backgroundColor: '$highlight',
      border: 'solid 3px $colors$text',
      borderRadius: '0.5rem',
      listStyleType: 'none',
      padding: '1rem'
    }
  });

  return (
    <StyledNav>
      <h1>Code Ninjas</h1>
      <Button onClick={() => setIsMenuOpen(!isMenuOpen)} text="Levels" />
      {isMenuOpen && (
        <ul>
          {config.levels.map((level, i) => (
            <li key={level.levelName}>
              <Link to={`/levels/${i}`}>
                {level.levelName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </StyledNav>
  );
}
