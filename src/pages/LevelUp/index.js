import { useNavigate } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { GetUser } from '../../context/user';
import config from '../../config';
import BeltHeading from '../../atoms/BeltHeading';
import Button from '../../atoms/Button';
import { patchUser } from '../../api';

export default function LevelUp() {;
  const { user } = GetUser();
  const navigate = useNavigate();

  const userLevelUp = () => {
    patchUser(user.username)
    .then((user) => {
      console.log(user);
      navigate(`/profile`)
    });
  }

  const StyledLevelUp = styled('section', {
    display: 'grid',
    gridTemplateRows: 'repeat(2,auto)',
    gap: '1rem',
    textAlign: 'center'
  });

  return (
    <StyledLevelUp>
      <BeltHeading levelNum={config[user.level].levelNum} text={`Congratulations, ${user.name}!`} />
      <Button pad color={config[user.level].levelColor} onClick={() => userLevelUp()}>
        Claim your {config[user.level].nextBelt} belt!
      </Button>
    </StyledLevelUp>
  )
}
