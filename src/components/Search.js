import React from "react";
import "../styles/Search.css";

function Search({ handleSearchChange }) {
    return (

        <div className="searchbox ml-3 mt-2">
            <form className="form-inline-lg">
                <input
                    className="form-control form-control-lg"
                    type="search-lg"
                    placeholder="Type name or last name"
                    aria-label="Search"
                    onChange={e => handleSearchChange(e)}
                />
            </form>
            
        </div>
    );
}
export default Search;