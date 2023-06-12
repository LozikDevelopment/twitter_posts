import './App.css'
import { Sidebar } from './components/sidebar';
import { Main } from './styled';
import { Posts } from './components/posts';
import { Search } from './components/search';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState("");

  return (
    <Main>
      <Sidebar />

      <Posts value={query} />

      <Search
        query={query}
        onQueryChange={setQuery} 
      />
    </Main>
  );
};
