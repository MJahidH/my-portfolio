import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();


  return (
    <ul>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/projects')}>My Projects</button>
      <button onClick={() => navigate('/findme')}>Find Me</button>
    </ul>
  );
};

export default NavBar;