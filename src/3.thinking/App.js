import {useState} from 'react'

//property로 products가 들어온다.
function FilterableProductTable({products}) {
    //useState같은 hook은 제일 상단에 기술한다. return문에 기술해도 소용없다.
    //부모에 state를 두고, 이 값을 자식에게 property로 전달한다.
    const [filterText, setFilterText] = useState('')
    const [inStockOnly, setInStockOnly] = useState(false)

    return (
        <>
        {/* 자식에게 property로 전달한다. */}
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                setFilterText={setFilterText}
                setInStockOnly={setInStockOnly}/>
            <ProductTable products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}/>
        </>
    )
}

function SearchBar({filterText, inStockOnly, setFilterText, setInStockOnly}) {
    return (
        <form>
            <input type='text'
                placeholder='search...'
                value={filterText}
                onChange={e => setFilterText(e.target.value)}/><br/>
            <label>
                <input type='checkbox'
                    checked={inStockOnly}
                    onChange={e => setInStockOnly(e.target.checked)}/>{' '}
                Only show products in stock
            </label>
        </form>
    )
}

function ProductTable({products, filterText, inStockOnly}) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if(product.productName.toLowerCase().indexOf(
            filterText.toLowerCase()) === -1) return //필터에 걸리는게 없는경우(-1) return.
        if(inStockOnly && !product.stocked) return //재고가 없는경우 return.

        if(product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}/>
            )
        }

        rows.push(
            <ProductRow
                product={product}
                key={product.productName}/>
        )

        lastCategory = product.category
    })

    return (
        <table>
            <thead>
                <tr><th>name</th><th>price</th></tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

function ProductCategoryRow({category}) {
    return (
        <tr><th colSpan='2'>{category}</th></tr>
    )
}

function ProductRow({product}) {
    const productName = product.stocked ? product.productName : 
        <span style={{color: 'red'}}>{product.productName}</span>

    return (
        <tr>
            <td>{productName}</td>
            <td>{product.price}</td>
        </tr>
    )
}

//data hardcoding
const products = [
    {category: 'fruits', price: 1000, stocked: true, productName: 'apple'},
    {category: 'fruits', price: 1000, stocked: true, productName: 'dragonfruit'},
    {category: 'fruits', price: 2000, stocked: false, productName: 'passionfruit'},
    {category: 'vegetable', price: 2000, stocked: true, productName: 'spinach'},
    {category: 'vegetable', price: 4000, stocked: false, productName: 'pumpkin'},
    {category: 'vegetable', price: 1000, stocked: true, productName: 'pea'}
]

export default function App() {
    return <FilterableProductTable products={products}/>
}