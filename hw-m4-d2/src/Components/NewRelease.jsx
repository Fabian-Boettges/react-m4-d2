import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import fantasy from '../data/fantasy.json'




export default function NewRealease () {
    console.log(fantasy)
    
    return <Container className="d-flex flex-wrap">
        <Row>
        {fantasy.map(book => (
           <Col>

            <Card className="book-cover">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col> 
        ))
        }
        </Row>
    </Container>
        

}