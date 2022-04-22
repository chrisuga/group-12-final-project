import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
    Button, Form, InputGroup, Image, Alert,
} from 'react-bootstrap';
import { DefaultEditor } from 'react-simple-wysiwyg';
import './MyFactss.css';
import logo from '../logo.png';

const AddRecipe = function () {
    const [title, setTitle] = useState('');
    const [fact, setFacts] = useState('');
    const [saveError, setSaveError] = useState(false);
    const [errors, setErrors] = useState({});
    const [redirect, setRedirect] = useState(false);
    const findFormErrors = () => {
        const newErrors = {};
        if (!title || title === '') newErrors.title = 'Give your fact a title!';
        if (title.length > 80) newErrors.title = 'That is a long title!';
        if (!fact || fact === '') newErrors.fact = 'Missing fact';
        return newErrors;
    };

    const handleSubmit = function () {
        const newErrors = findFormErrors();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('fact', fact);
            ;
            if (picture !== null) {
                formData.append('picture', picture);
            }
            });
        }
    };

    const handleImage = function (e) {
        setPicture(e.target.files[0]);
        setPictureURL(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="AddFact">
            <h1 className="add-fact">Add New Fact</h1>
            <InputGroup className="mb-3 ">
                <InputGroup.Text>Name:</InputGroup.Text>
                <Form.Control
                    value={name}
                    isInvalid={!!errors.name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.name}
                </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3 ">
                <InputGroup.Text>Ingredients:</InputGroup.Text>
                <Form.Control
                    placeholder="Write your fact "
                    value={fact}
                    isInvalid={!!errors.fact}
                    onChange={(e) => setFact(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.fact}
                </Form.Control.Feedback>
            </InputGroup>

            
            <Image className="fact-picture" src={picture ? pictureURL : logo} rounded />
            <Button className="add-fact-btn" size="lg" variant="dark" onClick={handleSubmit}>Submit</Button>
            {
                redirect ? <Navigate to="/my-facts" /> : null
            }
            {
                saveError ? <Alert onClose={() => setSaveError(false)} variant="danger" dismissible>Something went wrong! Failed to save fact.</Alert> : null
            }
        </div>

    );
};

export default AddFact;
