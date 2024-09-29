import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Reservation = () => {
    const { t } = useTranslation();
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [_, setSubmitted] = useState(false);

    const getWhatsAppLink = () => {
        const message =
            `${t('reservation.info')} ${t('reservation.name')}: ${fullName}, ${t('reservation.phone')}: ${phoneNumber}.`;
        const encodedMessage = encodeURIComponent(message);
        const phone = '+77053303913';
        return `https://wa.me/${phone}?text=${encodedMessage}`;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (fullName && phoneNumber) {
            setSubmitted(true);
            window.open(getWhatsAppLink(), '_blank');
        } else {
            alert(t('reservation.fillFields'));
        }
    };

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <div className="row">
                {/* Левая колонка с информацией */}
                <div className="col-12 col-md-6 mb-4">
                    <div className="p-4 bg-light rounded">
                        <h4>{t('reservation.info')}</h4>
                        <p>{t('reservation.instructions')}</p>
                        <ul>
                            <li>{t('reservation.fullName')}</li>
                            <li>{t('reservation.phoneNumber')}</li>
                        </ul>
                        <p>{t('reservation.cancellation')} <strong>+7 999 123-45-67</strong>.</p>
                        <p>{t('reservation.cancelNote')}</p>
                    </div>
                </div>

                {/* Правая колонка с формой */}
                <div className="col-12 col-md-6">
                    <h4>{t('reservation.info')}</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">{t('reservation.fullName')}</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">{t('reservation.phoneNumber')}</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">
                            {t('reservation.submit')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
