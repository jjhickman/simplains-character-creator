import { CharacterProvider } from './utils/CharacterProvider';
import './App.css';
import CreatorBase from './base/CreatorBase';
import FooterBase from './base/FooterBase';
import HeaderBase from './base/HeaderBase';

function App() {
  return (
    <CharacterProvider>
      <HeaderBase />
      <CreatorBase />
      <FooterBase />
    </CharacterProvider>
  )
}

export default App
