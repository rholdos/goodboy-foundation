import './app.scss';

import { Container, Row, Col, Image } from 'react-bootstrap';

import Header from './partials/Header';
import Content from './partials/Content';
import Footer from './partials/Footer';
import doggoImg from './images/doggo.png';

function App() {
  return (
    <section className='app'>
      <Header />
      <Container>
        <main>
          <Row className='gx-0'>
            <Col lg={{ span: 7 }}>
              <Content />
            </Col>
            <Col lg={{ offset: 1, span: 4 }}>
              <Image fluid src={doggoImg} alt='Dog drinking from a puddle' />
            </Col>
          </Row>
        </main>
      </Container>
      <Footer />
    </section>
  );
}

export default App;
