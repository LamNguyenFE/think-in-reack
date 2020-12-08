import React, { useEffect } from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {
    const rows = [];
    let lastCategory = null;

    //recived 
    const filterText = props.filterText;
    const inStockOnly = props.inStockOnly;

    props.products.forEach((product) => {
        //filter by name of product 
        if (product.name.indexOf(filterText) === -1) {
            return;
        }
        //filter by inStockOnly show or not
        if (inStockOnly && !product.stocked) {
            return;
        }

        //just render Category one time
        if (product.category !== lastCategory) {
            //push in to rows array
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });



    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable
