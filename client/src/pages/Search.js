import * as ReactDOM from "react-dom";
import React, { useState } from 'react';
import faker from  'faker';


  
  const Search = () => {
  let names = [];
  for (let i = 0; i < 100; i++) {
    names.push(faker.name.findName());
  };
  const [filter, setFilter] = useState("");
  
  let filteredNames = names.filter(name => {
    return name.toUpperCase().includes(filter.toUpperCase());
  });
  
  return(
    <>
      <input type="name" onChange={e => setFilter(e.target.value)} className="input" placeholder="filter" />
      <div className="content">
        <ul>
          {filteredNames.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

ReactDOM.render(<Search />, document.querySelector("#root"));
export default Search;