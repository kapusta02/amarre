import { Carousel } from 'react-bootstrap';

export const Slider = () => {
    const images = [
        { src: '../../public/images/slider/DSC9515.jpg', alt: 'First slide'},
        { src: '../../public/images/slider/DSC9545.jpg', alt: 'Second slide'},
        { src: '../../public/images/slider/DSC9833.jpg', alt: 'Third slide'},
        { src: '../../public/images/slider/DSC9730.jpg', alt: 'Third slide'}
    ];

    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image.src}
                        alt={image.alt}
                        style={{ height: '800px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};