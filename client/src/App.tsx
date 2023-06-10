import './App.css'
import { Sidebar } from './components/sidebar';
import { Main } from './styled';
import { Posts } from './components/posts';
import { Search } from './components/search';

export const App = () => {

  return (
    <Main>
      <Sidebar />

      <Posts />

      <Search />
    </Main>
  );
};
