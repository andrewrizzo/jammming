import React, {useCallback} from "react";

const SearchBar = (props) => {
    return (
        <div>
        <input
            placeholder="Enter A Song Title"
          onChange={e => props.setSearchTerm(e.target.value)}
        />
      <button onClick={props.search}> 
      SEARCH
      </button>

        </div>
    );
};

export default SearchBar;