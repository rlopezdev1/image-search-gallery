import React from "react";


const testImages = {"test1": 1, "test2": 2, "test3": 3}

const Search = () => {
    return (
        <div className="searchBar">
            <input type="text" maxLength={25} placeholder="Search..."></input>
        </div>
    )
};


export default Search;