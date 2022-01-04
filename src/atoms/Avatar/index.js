import React from 'react'
import { styled } from '../../stitches.config';
import ninjas from '../../assets/ninjas';

export default function Avatar({ user, onClick }) {
  const StyledAvatar = styled('section', {
    position: 'relative',

    'section.avatar': {
      backgroundImage: `url(${user.avatar})`,
      backgroundSize: 'cover',
      height: '3rem',
      margin: '0.5rem 0',
      aspectRatio: '1 / 1',
      borderRadius: '50%',
    },

    'img.ninja': {
      position: 'absolute',
      bottom: '0.25rem',
      left: '-0.25rem',
      maxHeight: '2rem',
    },

    '&:hover': {
      cursor: 'pointer'
    }
  });

  if (!user) return null;

  return (
    <StyledAvatar>
      <section className="avatar" onClick={() => onClick()} />
      <img className="ninja" src={ninjas[user.level]} alt="ninja" />
    </StyledAvatar>
  );
}
