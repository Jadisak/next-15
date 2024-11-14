import React from "react";

function ScrollSection() {
  return (
    
        <section>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12 text-center">
                            <h6>What is inside?</h6>

                            <h2 className="mb-5">Preview at glance</h2>
                        </div>

                        <div className="col-lg-4 col-12">
                            <nav id="navbar-example3" className="h-100 flex-column align-items-stretch">
                                <nav className="nav nav-pills flex-column">
                                    <a className="nav-link smoothscroll" href="#item-1">Introduction</a>

                                    <a className="nav-link smoothscroll" href="#item-2">Chapter 1: <strong>Win back your time</strong></a>

                                    <a className="nav-link smoothscroll" href="#item-3">Chapter 2: <strong>Work less, do more</strong></a>

                                    <a className="nav-link smoothscroll" href="#item-4">Chapter 3: <strong>Delegate</strong></a>

                                    <a className="nav-link smoothscroll" href="#item-5">Chapter 4: <strong>Habits</strong></a>
                                </nav>
                            </nav>
                        </div>

                        <div className="col-lg-8 col-12">
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">
                                <div className="scrollspy-example-item" id="item-1">
                                    <h5>Introducing ebook</h5>

                                    <p>This ebook landing page is good to use for any purpose. This layout is based on Bootstrap 5 CSS framework.</p>

                                    <p><strong>What is Content Marketing?</strong> If you are wondering what content marketing is all about, this is the place to start.</p>

                                    <blockquote className="blockquote">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</blockquote>

                                    <p>When you need free HTML CSS templates, please visit Templatemo website which provides a variety of templates.</p>
                                </div>

                                <div className="scrollspy-example-item" id="item-2">
                                    <h5>Win back your time</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci.</p>

                                    <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>

                                    <div className="row">
                                        <div className="col-lg-6 col-12 mb-3">
                                            <img src="images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid" alt="" />
                                        </div>

                                        <div className="col-lg-6 col-12 mb-3">
                                            <img src="images/businessman-sitting-by-table-cafe.jpg" className="scrollspy-example-item-image img-fluid" alt="" />
                                        </div>
                                    </div>

                                    <p>If you need some specific CSS templates, you can Google with keywords such as templatemo gallery, templatemo digital marketing, etc.</p>
                                </div>

                                <div className="scrollspy-example-item" id="item-3">
                                    <h5>Work less, do more</h5>

                                    <p>Credit goes to <a rel="nofollow" href="https://freepik.com" target="_blank">FreePik</a> for images used in this ebook landing page template. You may browse FreePik to download more free images for your website.</p>
                                    <p>This is a second paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

                                    <p>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p>

                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <img src="images/tablet-screen-contents.jpg" className="img-fluid" alt="" />
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <p>Modern ebook ever</p>

                                            <p><strong>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt.</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="scrollspy-example-item" id="item-4">
                                    <h5>Delegate</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <p>Lorem ipsum dolor sit amet, consive adipisicing elit, sed do eiusmod. tempor incididunt ut labore.</p>

                                    <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>

                                    <img src="images/portrait-mature-smiling-authoress-sitting-desk.jpg" className="scrollspy-example-item-image img-fluid mb-3" alt="" />

                                    <p>You may want to contact us for more information about this template.</p>
                                </div>

                                <div className="scrollspy-example-item" id="item-5">
                                    <h5>Habits</h5>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                    <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>

                                    <p><strong>What is Free CSS Templates?</strong> Free CSS Templates are a variety of ready-made web pages designed for different kinds of websites.</p>

                                    <blockquote className="blockquote">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</blockquote>

                                    <p>You may browse TemplateMo website for more CSS templates. Thank you for visiting our website.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
  )
}
export default ScrollSection