import React from "react";
import { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function ProductForm() {
    let params = useParams()
    let [product, setProduct] = useState({
        id: params.productId,
        name: "",
        condition: "",
        specs: "",
        os: "",
        warranty: "",
        price: "",
        picture: ""
    })

    let { getProduct, addProduct, updateProduct } = useContext(ProductContext)
    let navigate = useNavigate()
    let { id, name, condition, specs, os, warranty, price, picture } = product

    useEffect(() => {
        if (id === undefined) return
        async function fetch() {
            await getProduct(id)
                .then((product) => setProduct(product))
        }
        fetch()
    }, [id])

    function handleChange(event) {
        setProduct((previousValue) => {
            return { ...previousValue, [event.target.name]: event.target.value }
        })
    }

    function addOrUpdate() {
        if (id === undefined) {
            return addProduct(product)
        } else {
            return updateProduct(product)
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        addOrUpdate().then((product) =>
            navigate(`/products/${product.id}`)
        )
    }

    return (
        <Form className="align-self-start" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Condition</Form.Label>
                <Form.Control type="text" name="condition" value={condition} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Specifications</Form.Label>
                <Form.Control type="text" name="specs" value={specs} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Operating System</Form.Label>
                <Form.Control type="text" name="os" value={os} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Warranty</Form.Label>
                <Form.Control as="select" name="warranty" value={warranty.toString()} onChange={handleChange}>
                    <option value="true">true</option>
                    <option value="false">false</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" value={price} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="picture" value={picture} onChange={handleChange} />
            </Form.Group>
            <Button type="submit">Save</Button>
        </Form>
    )
}

export default ProductForm