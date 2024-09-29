import 'bootstrap/dist/css/bootstrap.min.css';

export const Google = () => {
    const reviews = [
        {
            author: 'Svetlana Tustanovskaia',
            authorPhoto: 'https://via.placeholder.com/50',
            rating: 5,
            timeAgo: '2 days ago',
            text: 'Delicious food, pleasant atmosphere, I liked everything.',
            reviewsCount: 30,
            photosCount: 29,
        },
        {
            author: 'Ivan Ivanov',
            authorPhoto: 'https://via.placeholder.com/50',
            rating: 5,
            timeAgo: '1 month ago',
            text: 'Nice place, very tasty',
            reviewsCount: 15,
            photosCount: 10,
        },
    ];

    const renderStars = (rating: any) => {
        return [...Array(rating)].map((_, index) => (
            <span key={index}>&#9733;</span>
        ));
    };

    return (
        <div className="container" style={{ marginTop: '20px' }}>
            <div className="row">
                <div className="col-12 col-md-6 mb-4">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.0589896805945!2d2.1789917!3d41.3759618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3adcb50ee71%3A0x113cbe60221f89cc!2sAmarre%2069%20-%20Vegan%20food%20%26%20Drinks!5e0!3m2!1sen!2sru!4v1695072075928!5m2!1sen!2sru"
                            allowFullScreen
                            title="Google Map"
                            style={{ border: 0 }}
                        ></iframe>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="card mb-3">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-2">
                                        <img
                                            src={review.authorPhoto}
                                            alt={review.author}
                                            className="rounded-circle me-3"
                                            style={{ width: '50px', height: '50px' }}
                                        />
                                        <div>
                                            <h5 className="mb-0">{review.author}</h5>
                                            <p className="text-muted mb-0" style={{ fontSize: '12px' }}>
                                                {review.reviewsCount} reviews · {review.photosCount} photos
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div style={{ color: '#fbc02d' }}>
                                            {renderStars(review.rating)}
                                        </div>
                                        <p className="text-muted" style={{ fontSize: '12px' }}>{review.timeAgo}</p>
                                    </div>
                                    <p className="card-text">{review.text}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Загрузка отзывов...</p>
                    )}
                </div>
            </div>
        </div>
    );
};