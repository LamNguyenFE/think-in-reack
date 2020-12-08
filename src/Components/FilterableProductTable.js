import React, { useState } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'

function FilterableProductTable(props) {
    //test by set defaul filterText = 'HM'
    const [filterText, setFilterText] = useState('HM')
    //test by set defaul inStockOnly = true/false
    const [inStockOnly, setInStockOnly] = useState(true)
    return (
        <>
            {/* pass through pross */}
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
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
