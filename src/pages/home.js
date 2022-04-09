import { useState, useEffect } from 'react';
import {
    Card, Row, Col, Carousel, Container, Button, ListGroup,
} from 'react-bootstrap';
import Grading from '../components/Grading';

const Home = function () {
    const wide = 7;
    const [factList, setFactList] = useState([]);

    const resCarousel = [[], [], []];
    const recCarousel = [[], [], []];

    const goToMore = (url) => {
        window.location.assign(url);
    };

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/api/TBD`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => response.json()).then((data) => {
            setFactData(data.data);
        });

   
    }, []);


    return (
        <Container>
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

export default Home;
