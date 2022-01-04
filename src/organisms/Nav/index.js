import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { GetUser } from '../../context/user';
import Button from '../../atoms/Button';
import Avatar from '../../atoms/Avatar';
import config from '../../config';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = GetUser();

  const StyledNav = styled('nav', {
    position: 'fixed',
    top: '0',
    width: 'calc(100% - 2rem)',
    height: '4rem',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 0.25rem 0.5rem $colors$text',
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
      padding: '1rem',

      li: {
        marginBottom: '1rem',

        '&:last-of-type': {
          marginBottom: '0'
        }
      }

    }
  });

  const User = styled('section', {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: '1rem',

    section: {
      position: 'relative',

      'img.ninja': {
        position: 'absolute',
        bottom: '0.25rem',
        left: '-0.25rem',
        maxHeight: '2rem',
      }
    },
  });

  return (
    <StyledNav>
      <Link to="/">
        <h1>Code Ninjas</h1>
      </Link>

      {user && (
        <User>
          {user.username}
          <Avatar
            user={user}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </User>
      )}

      {isMenuOpen && (
        <ul>
          {config.slice(0, user.level + 1).map((level, i) => (
            <li key={level.levelName}>
              <Link to={`/levels/${i}`}>
                {level.levelName}
              </Link>
            </li>
          ))}
          <li style={{ textAlign: 'center' }}>
            <Button
              pad
              onClick={() => setUser('')}>
              Log out
            </Button>
          </li>
        </ul>
      )}
    </StyledNav>
  );
}
