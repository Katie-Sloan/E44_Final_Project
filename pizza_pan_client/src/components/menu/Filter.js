import React, { useState, useEffect } from 'react';

function Filter({handleChange})  {
  const [searchMenu, setSearchMenu] = useState("");

  const changeSearchMenu = (event) => {
    event.preventDefault();
    setSearchMenu(event.target.value);
  }

  useEffect(() => {
    handleChange(searchMenu);
  }, [searchMenu]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form id="search-bar" onSubmit={handleSubmit}>
      <input 
        onChange={changeSearchMenu}
        type="text"
        name="searchMenu"
        placeholder="Filter Menu"
        value={searchMenu} />
    </form>
  );
}

export default Filter;