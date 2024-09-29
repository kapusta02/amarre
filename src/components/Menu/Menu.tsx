import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export const Menu = () => {
    const { t } = useTranslation();

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <h2 className="text-center mb-5 mt-5">{t('menu.menu')}</h2>
            <div className="row">
                <div className="col-12 col-md-6 mb-4">
                    <div className="p-4 bg-light rounded">
                        <h4>{t('menu.info')}</h4>
                        <p>{t('menu.additionalInfo')}</p>
                        <a href="../../../public/menu/menuamarre_nuevo.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            {t('menu.downloadLink')}
                        </a>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <h4>{t('menu.sliderHeading')}</h4>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../../../public/images/menu/final-12.jpg"
                                alt="Dish 1"
                                style={{height: '700px'}}
                            />
                            <Carousel.Caption>
                                <h5>Dish 1</h5>
                                <p>Delicious dish with fresh ingredients.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../../../public/images/menu/final-15.jpg"
                                alt="Dish 2"
                                style={{height: '700px'}}
                            />
                            <Carousel.Caption>
                                <h5>Dish 2</h5>
                                <p>A delightful blend of spices and flavors.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../../../public/images/menu/final-28.jpg"
                                alt="Dish 3"
                                style={{height: '700px'}}
                            />
                            <Carousel.Caption>
                                <h5>Dish 3</h5>
                                <p>Perfectly cooked and seasoned to taste.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};