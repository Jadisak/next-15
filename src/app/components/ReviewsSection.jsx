import React from "react";

function ReviewsSection() {
  return (
    <section className="reviews-section section-padding" id="section_4">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12 text-center mb-5">
                            <h6>Reviews</h6>

                            <h2>What people saying...</h2>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="custom-block d-flex flex-wrap">
                                <div className="custom-block-image-wrap d-flex flex-column">
                                    <img src="images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" className="img-fluid avatar-image" alt="" />

                                    <div className="text-center mt-3">
                                        <span className="text-white">Sandy</span>

                                        <strong className="d-block text-white">Artist</strong>
                                    </div>
                                </div>

                                <div className="custom-block-info">
                                    <div className="reviews-group mb-3">
                                        <strong>4.5</strong>

                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star"></i>
                                    </div>

                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 my-5 my-lg-0">
                            <div className="custom-block d-flex flex-wrap">
                                <div className="custom-block-image-wrap d-flex flex-column">
                                    <img src="images/avatar/portrait-young-redhead-bearded-male.jpg" className="img-fluid avatar-image avatar-image-left" alt="" />

                                    <div className="text-center mt-3">
                                        <span className="text-white">John</span>

                                        <strong className="d-block text-white">Producer</strong>
                                    </div>
                                </div>

                                <div className="custom-block-info">
                                    <div className="reviews-group mb-3">
                                        <strong>3.5</strong>

                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star"></i>
                                        <i className="bi-star"></i>
                                    </div>

                                    <p className="mb-0">If you need some specific CSS templates, you can Google with keywords such as templatemo one-page, templatemo portfolio, etc.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="custom-block d-flex flex-wrap">
                                <div className="custom-block-image-wrap d-flex flex-column">
                                    <img src="images/avatar/pretty-blonde-woman.jpg" className="img-fluid avatar-image" alt="" />

                                    <div className="text-center mt-3">
                                        <span className="text-white">Candy</span>

                                        <strong className="d-block text-white">VP, Design</strong>
                                    </div>
                                </div>

                                <div className="custom-block-info">
                                    <div className="reviews-group mb-3">
                                        <strong>5</strong>

                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star-fill"></i>
                                        <i className="bi-star-fill"></i>
                                    </div>

                                    <p className="mb-0">Please tell your friends about our website that we provide 100% free CSS templates for everyone. Thank you for using our templates.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
  )
}
export default ReviewsSection