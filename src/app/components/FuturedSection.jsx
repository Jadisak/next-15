import React from "react"

function FuturedSection() {
  return (
    <section className="featured-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                            <div className="avatar-group d-flex flex-wrap align-items-center">
                                <img src="images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg" className="img-fluid avatar-image" alt=""/>

                                <img src="images/avatar/portrait-young-redhead-bearded-male.jpg" className="img-fluid avatar-image avatar-image-left" alt=""/>

                                <img src="images/avatar/pretty-blonde-woman.jpg" className="img-fluid avatar-image avatar-image-left" alt=""/>

                                <img src="images/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg" className="img-fluid avatar-image avatar-image-left" alt=""/>

                                <div className="reviews-group mt-3 mt-lg-0">
                                    <strong>4.5</strong>

                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star-fill"></i>
                                    <i className="bi-star"></i>

                                    <small className="ms-3">2,564 reviews</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
  )
}
export default FuturedSection