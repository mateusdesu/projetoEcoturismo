import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/8f/2b/48/8f2b48a91333bda21c0833c00ec58861.jpg"
          alt="Praia do Forno"
        />
        <Carousel.Caption>
          <h3>Praia do Forno</h3>
        </Carousel.Caption>
        <h3>Praia do Forno</h3>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/564x/65/a1/0b/65a10bdae92d2ac670bf804adfd15d9c.jpg"
          alt="Praia dos Anjos"
        />

        <Carousel.Caption>
          <h3>Praia dos Anjos</h3>
        </Carousel.Caption>
        <h3>Praia dos Anjos</h3>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;