import React, { useState } from "react";

const Dictionary = () => {
  const [searchText, setSearchText] = useState("");
  const [isWrong,setIsWrong] = useState('');
  const [isMeaningAvailable, setIsMeaningAvailable] = useState
  ("");
//   const isWrong = 'Word not found in dictionary'

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
  ];

  function handleSearch() {
 for(let i=0;i<arr.length;i++){
    if(arr[i].word.toLowerCase()===(searchText.toLowerCase())){
       return setIsMeaningAvailable(arr[i].meaning);
        
    }
 }
 setIsMeaningAvailable('Word not found in the dictionary')
    
  }
  // console.log(isMeaningAvailable);

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <br />
      <p>
        Definition: <br />
        {isMeaningAvailable?isMeaningAvailable:isWrong}
      </p>
    </div>
  );
};

export default Dictionary;
