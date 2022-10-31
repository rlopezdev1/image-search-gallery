import React, {useState} from "react";



const Search = () => {
    const [query, setQuery] = useState("")
   
    function handleChange(event) {
        const { name, value } = event.target;
        console.log(name, value);
        
        setQuery(prevQuery => {
          return {
            ...prevQuery,
            [name]: value
          };
        });
      }




    return (
        <div className="form">
            <input type="text" onChange={handleChange} maxLength={25} placeholder="Search..."></input>
        </div>
    )
};


export default Search;