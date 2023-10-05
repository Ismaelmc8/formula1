import React from 'react'
import './home.css'
import Container from 'react-bootstrap/Container';
import Header from '../../components/header/NavBarCustom'
import About from '../../components/about/About'
import CarouselCustom from '../../components/carousel/CarouselCustom';

const Home = () => {
  const carouselCards = [
    {
      title: 'Card 1',
      description: 'This is the description of card 1.',
    },
    {
      title: 'Card 2',
      description: 'This is the description of card 2.',
    },
    {
      title: 'Card 3',
      description: 'This is the description of card 3.',
    },
    {
      title: 'Card 4',
      description: 'This is the description of card 4.',
    },
    {
      title: 'Card 5',
      description: 'This is the description of card 5.',
    },
    {
      title: 'Card 6',
      description: 'This is the description of card 6.',
    },
    {
      title: 'Card 7',
      description: 'This is the description of card 7.',
    },
    // Agrega más tarjetas aquí
  ];
  return (
    <>
    <Container >
      <CarouselCustom cards={carouselCards} />
    </Container>
    </>
  )
}

export default Home