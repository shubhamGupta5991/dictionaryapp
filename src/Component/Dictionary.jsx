import React, { useState } from "react";

const Dictionary = () => {
  const [searchText, setSearchText] = useState("");
  
  const [isMeaningAvailable, setIsMeaningAvailable] = useState
  ("");


  let arr = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    {
      word: "Component",
      meaning: "A reusable building block in React.",
    },

    {
      word: "State",
      meaning: "An object that stores data for a component.",
    },
    {
      word: "Javascript",
      meaning: "A core programming language for web development.",
    },
  ];

  function handleSearch() {


const searchTermLower = searchText.toLowerCase();
const findWord = arr.find(
      (item) => item.word.toLowerCase() === searchTermLower
    );
    setIsMeaningAvailable(findWord ? findWord.meaning : "Word not found in the dictionary.")
//  setIsMeaningAvailable('Word not found in the dictionary')
    
  }
  // console.log(isMeaningAvailable);

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      
      <p>
        Definition: <br />
        {isMeaningAvailable}
      </p>
    </div>
  );
};

export default Dictionary;
