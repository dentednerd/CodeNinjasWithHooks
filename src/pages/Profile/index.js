import React from 'react'
import { GetUser } from '../../context/user';
import Avatar from '../../atoms/Avatar';
import config from '../../config';

export default function Profile() {
  const { user } = GetUser();
  if (!user) return null;

  const availableLevels = config.slice(0, user.level + 1).reverse();
  const previousLevels = availableLevels.slice(1);

  return (
    <section>
      <Avatar
        user={user}
      />
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
      <p>{user.level}</p>

      <h3>Next Level:</h3>
      <p>{availableLevels[0].levelName}</p>

      {previousLevels.length > 0 && (
        <>
          <h3>Previous Levels</h3>
          {previousLevels.map((level) => (
            <p>{level.levelName}</p>
          ))}
        </>
      )}
    </section>
  )
}
