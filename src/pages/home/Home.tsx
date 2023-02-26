import useTheme from 'hooks/useTheme';
import { Theme } from 'store/slices/appSlice';

const Home = () => {
  const { theme, setCurrentTheme } = useTheme();

  const setDarkTheme = () => {
    setCurrentTheme(Theme.Dark);
  };

  return (
    <div>
      <div>Current them is {theme}</div>
      <button onClick={setDarkTheme}>Set Dark Theme</button>
    </div>
  );
};

export default Home;
