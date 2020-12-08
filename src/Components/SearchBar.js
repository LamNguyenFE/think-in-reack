import React, { useEffect, useRef } from 'react'

function SearchBar(props) {
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    function handleFilterTextChange(e) {
        props.onFilterTextChange(e.target.value);
    }

    function handleInStockChange(e) {
        props.onInStockChange(e.target.checked);
    }
    const inputEl = useRef(null);
    useEffect(() => {
        inputEl.current.focus();
    })


    return (
        <form>
            <input
                type="text"
                ref={inputEl}
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange}
            />
            <p>
                <input type="checkbox" checked={inStockOnly}
                    onChange={handleInStockChange}
                />
                {' '}
          Only show products in stock
        </p>
        </form>
    )
}

export default SearchBar
