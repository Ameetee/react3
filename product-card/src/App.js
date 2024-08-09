// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import React Bootstrap styles
import { Card, Container } from 'react-bootstrap';
import Name from './components/name';
import Price from './components/price';
import Description from './components/Description';
import Image from './components/Image';
import './style.css';


const App = () => {
  const firstName = "John"; // Change this to your first name or leave as "" if preferred

  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }} className="mx-auto">
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-3 text-center">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img
              src="https://cdn.dribbble.com/userupload/11342615/file/original-edecbe7b582a6d7b8c24e61bb25fc579.jpg?resize=752x"
              alt="Greeting"
              style={{ borderRadius: '100%', width: '100px', height: '100px' }}
            />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </Container>
  );
};

export default App;
