const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
    { category: 'Clothes', price: '$199.99', stocked: true, name: 'HM 1' },
    { category: 'Clothes', price: '$199.99', stocked: true, name: 'HM 2' },
    { category: 'Clothes', price: '$199.99', stocked: true, name: 'HM 3' },
    { category: 'Clothes', price: '$199.99', stocked: false, name: 'HM 4' },
    // { category: 'Clothes', price: '$199.99', stocked: false, name: 'HM 4' }
];
//if name not unique, rerender will duplicate
export default PRODUCTS