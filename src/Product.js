import React from "react";
import { useContext, useState, useEffect } from "react";
import { Card, Button, Spinner, Alert } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";

function Product(props) {
    let params = useParams()
    let navigate = useNavigate()

    let { getProduct, deleteProduct } = useContext(ProductContext)
    let [product, setProduct] = useState()
    let [error, setError] = useState()

    useEffect(() => {
        async function fetch() {
            await getProduct(params.productId)
                .then((product) => setProduct(product))
        }
        fetch()
    }, [params.productId, getProduct])

    function handleDelete(id) {
        deleteProduct(id)
        navigate("/products")
    }

    function loading() {
        return (
            <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span class="sr-only">Loading...</span>
            </button>
        )
    }

    function errorMessage() {
        return <Alert variant="danger">There was an error attempting to load this item: {error}</Alert>
    }

    function productCard() {
        let { id, name, condition, specs, os, warranty, price, picture } = product
        function checkWarranty() {
            if (warranty === true) {
                return "Yes"
            } else {
                return "No"
            }
        }

        return (
            <Card className="align-self-start w-25">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{condition}</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted">Specifications: {specs}</Card.Text>
                    <Card.Text>Operating System: {os}</Card.Text>
                    <Card.Text>Warranty: {checkWarranty()}</Card.Text>
                    <Card.Text >${price}</Card.Text>
                    <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
                    <Button variant="danger" onClick={handleDelete.bind(this, id)}>Delete</Button>
                </Card.Body>
            </Card>
        )
    }
    if (error) return errorMessage()
    if (product === undefined) return loading()
    return product.id !== parseInt(params.productId) ? loading() : productCard()
}

export default Product