import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';
const UserProfile = () => {
  const login= useSelector(state=> state.auth.isAuthenticated);

  return (
    <main className={classes.profile}>
      {login && <h2>My User Profile</h2>}
    </main>
  );
};

export default UserProfile;
