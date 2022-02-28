import './app.scss';

import { Container, Row, Col, Image } from 'react-bootstrap';

import Header from './components/Header';
import Stepper from './components/Stepper';
import Form from './components/Form';
import doggoImg from './images/doggo.png';
import Footer from './components/Footer';

function App() {
  return (
    <section className='app'>
      <Header />
      <main>
        <Container>
          <Row className='gx-0'>
            <Col lg={{ span: 7 }}>
              <Stepper />
              <Form />
            </Col>
            <Col lg={{ offset: 1, span: 4 }}>
              <Image fluid src={doggoImg} alt='Dog drinking from a puddle' className='mt-1-half' />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </section>
  );
}

export default App;
