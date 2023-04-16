import { useState } from 'react';
import './App.css';
import ProfileList from './components/ProfileList/ProfileList';
import Search from './components/Search/Search';

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <Search setSearchTerm={setSearchTerm} />
      <ProfileList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
