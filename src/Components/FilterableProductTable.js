import React, { useEffect, useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function FilterableProductTable(props) {
    //test by set defaul filterText = 'HM'
    const [filterText, setFilterText] = useState('')
    //test by set defaul inStockOnly = true/false
    const [inStockOnly, setInStockOnly] = useState(false)

    function handleFilterTextChange(filterText) {
        setFilterText(filterText)
    }

    function handleInStockChange(inStockOnly) {
        setInStockOnly(inStockOnly)
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You filter product name : ${filterText} and show Stock Only : ${inStockOnly}`;
    });


    return (
        <>
            {/* pass through pross */}
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockChange={handleInStockChange}
            />

            <ProductTable
                products={props.products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </>
    )
}

export default FilterableProductTable
