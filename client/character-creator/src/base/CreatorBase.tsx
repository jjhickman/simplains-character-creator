import { useCharacterContext } from "../utils/CharacterContext";

function CreatorBase(){
    const { cookies, searchValue, setSearchValue } = useCharacterContext();
  
    const filteredCookies = cookies.filter((cookie) =>
      cookie.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a cookie..."
        />
        <ul>
          {filteredCookies.map((cookie, index) => (
            <li key={index}>{cookie}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CreatorBase;