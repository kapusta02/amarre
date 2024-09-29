export const YouTube = () => {
    return (
        <div className="container" style={{marginTop: '20px', marginBottom: '50px'}}>
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.youtube.com/embed/SZDrLbpbK6g"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};