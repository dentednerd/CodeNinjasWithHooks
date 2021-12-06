import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { GetUser } from '../../context/user';
import config from '../../config';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = GetUser();

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

  const User = styled('section', {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: '1rem'
  });

  const Avatar = styled('section', {
    backgroundImage: `url(${user.avatar})`,
    backgroundSize: 'cover',
    height: '3rem',
    width: '3rem',
    borderRadius: '50%',
    boxShadow: '0 0 0.5rem gray',

    '&:hover': {
      cursor: 'pointer'
    }
  });

  return (
    <StyledNav>
      <h1>Code Ninjas</h1>

      <User>
        {user.username}
        <Avatar onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </User>

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
