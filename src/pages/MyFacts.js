import React, { useState, useEffect } from 'react';
import {
    Button, Card, Row, Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MyRecipes.css';
import cookBook from '../assets/cookBook.png';

const MyRecipes = function () {
    const [isEmpty, setIsEmpty] = useState(true);
    const [data, setData] = useState([]);


    }, [data, isEmpty]);

    // eslint-disable-next-line no-unused-vars
    const onClick = function (id) {

        // alert('HIII ' + id)
    };

    const MyFacts = function () {
        const facts = [];
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const content = (
                <Col className="fact-col">
                    <Card onClick={() => onClick(item.id)} style={{ cursor: 'pointer' }} className="recipe-item">
                        <Card.Img variant="top" className="fact" src={item.picture === null ? } />
                        <Card.Body>
                            <Card.Title className="Fact-label">{item.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            );
            recipes.push(content);
        }
        return (
            <Row xs={1} sm={2} md={3} xl={4} xxl={5} className="g-4 fact m-2">
                {recipes.map((rec) => rec)}
            </Row>

        );
    };

    return (
        <div className="MyFacts">
            <Row className="mt-2">
                <Col xs={10}><h1 className="ms-3">My Recipes</h1></Col>
                <Col xs={2} className="align-me">
                    <Button as={Link} to="/add-fact" variant="outline-dark">
                        <FontAwesomeIcon icon={faPlusCircle} className="me-2" />
                        Add Fact
                    </Button>
                </Col>
            </Row>
            <div className={isEmpty ? null : 'hide'}>
                <div className="empty">
                    <img alt="empty box" src={factDict} className="empty-img" />
                </div>
                <h4 className="call-action">Start adding facts</h4>
            </div>
            <MyRecipe />
        </div>

    );
};

export default MyFacts;
