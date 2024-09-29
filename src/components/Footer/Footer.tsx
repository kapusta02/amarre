import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Footer.css'

export const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div style={{ backgroundColor: '#6c757d', padding: '20px' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <a
                            className="logo link"
                            onClick={scrollTop}
                        >
                            <img src="../../../public/images/logo.png" alt="logo" className='logo'/>
                        </a>
                    </Col>

                    <Col md={6} className="d-flex justify-content-end align-items-center">
                        <div style={{ marginRight: '20px', color: 'white' }}>
                            <Link to="https://web.whatsapp.com/" className="link">Whatsapp</Link>
                            <div>Messanger</div>
                            <div>Messanger</div>
                        </div>
                        <div style={{ color: 'white' }}>Phone</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}