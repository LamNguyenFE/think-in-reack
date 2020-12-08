import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function FilterableProductTable(props) {
    return (
        <>
            <SearchBar />
            <ProductTable products={props.products} />
        </>
    )
}

export default FilterableProductTable
