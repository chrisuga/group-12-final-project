import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import {
    Card, Row, Col, Carousel, Container, Button, ListGroup,
} from 'react-bootstrap';

//import Grading from '../components/Grading';

export const Home = function () {
    const wide = 7;
    const [factList, setFactList] = useState([]);

    const resCarousel = [[], [], []];
    const recCarousel = [[], [], []];

    const goToMore = (url) => {
        window.location.assign(url);
    };

    const getFactList = async () => {
        console.log("inside getFactList")
        const data = fetch("/get_facts")
          .then(response => {
            if (response.ok) {
              return response.json()
            }})
          .then(data => setFactList(data["facts"]))
    }

    const logFactList = () => {
        console.log(factList);
    }

    useEffect(() => {
        getFactList();
    }, []);


    return (
        <Container>
            {logFactList()}
            <h1 className="mt-4 mb-3">New random facts</h1>

            <Carousel variant="dark" className="m-3">
                <Carousel.Item>
                    <Row>
                        {resCarousel[0]}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {resCarousel[1]}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {resCarousel[2]}
                    </Row>
                </Carousel.Item>
            </Carousel>

            <h1 className="mt-5">Recently verified facts</h1>

            <Carousel variant="dark" className="m-3">
                <Carousel.Item>
                    <Row>
                        {recCarousel[0]}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {recCarousel[1]}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {recCarousel[2]}
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

