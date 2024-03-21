import React from "react";
import { ListGroup, Stack, Form, Button } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function Home() {
    function productList(products) {
        if (products === null) return
        return products.slice(0, 3).map((product) =>
            <ListGroup.Item key={product.id}>
                <img src={product.picture} style={{ width: '200px', height: '200px' }} />
                <br />
                <Link to={`/products/${product.id}`} key={product.id}>{product.name}</Link>
                <br />
                ${product.price}
            </ListGroup.Item>
        )
    }

    return (
        <>
            <h1>Local Electronics Recycling</h1>
            <h3>Dispose your used electronics in the most responsible way</h3>
            <p>Take a look around your office or home. How much space is being wasted with old, outdated electronics that you no longer use? Not only do those old computers, printers, monitors, phone systems, TVs, and other appliances take up a lot of space, but they're just sitting there gathering dust and wasting away. They could be safely and ethically recycled or reused.</p>
            <h4>Some products we sell</h4>
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

export default Home;