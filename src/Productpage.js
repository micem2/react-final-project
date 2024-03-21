import React from "react";
import { ListGroup, Stack, Form, Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";


function ProductList(props) {
    let { sortProduct, unsortProduct } = useContext(ProductContext)

    function productList(products) {
        if (products === null) return
        return products.map((product) =>
            <ListGroup.Item key={product.id}>
                <img src={product.picture} style={{ width: '200px', height: '200px' }} />
                <br />
                <Link to={`/products/${product.id}`} key={product.id}>{product.name}</Link>
                <br />
                ${product.price}
            </ListGroup.Item>
        )
    }

    let navigate = useNavigate()

    function handleAdd(event) {
        event.preventDefault()
        navigate(`/products/new`)
    }

    function handleSort(event) {
        event.preventDefault()
        sortProduct()
    }

    function handleUnsort(event) {
        event.preventDefault()
        unsortProduct()
    }

    return (
        <>
            <h1>Products</h1>
            <p>All of our products come with a 30 day guarantee. Select products come with a one year limited warranty</p>
            <Form>
            <ButtonGroup>
            <Button onClick={handleSort}>Sort By Price</Button>
            <Button onClick={handleUnsort}>Unsort By Price</Button>
            </ButtonGroup>
            </Form>
            <Form onSubmit={handleAdd}>
                <Button type="submit">Add Product</Button>
                </Form>
            <Stack direction="horizontal" gap={3}>
                <ListGroup className="align-self-start w-75">
                    <ProductContext.Consumer>
                        {({ products }) => (
                            productList(products)
                        )}
                    </ProductContext.Consumer>
                </ListGroup>
                <Outlet />
            </Stack>
        </>
    )
}

export default ProductList