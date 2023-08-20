import React from "react";
import "./App.css";
import imgSec3 from "./assets/sec3image.svg";
import btp1 from "./assets/btp-1.jpg";
import btp2 from "./assets/btp-2.jpg";
import btp3 from "./assets/btp-3.jpg";
import btp4 from "./assets/btp-4.jpg";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import payment from "./assets/payment.png";

const App = () => {
  return (
    <div>
      {/* Section 1 */}

      <div className="background">
        <section className="backColor">
          {/* ========= Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark px-3 ">
            <div className="container-fluid">
              <a className="navbar-brand mx-5 fw-bolder" href="#">
                DORSIN
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 p-2 mb-lg-0">
                  <li className="nav-item p-2">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item p-2">
                    <a className="nav-link" href="#">
                      Services
                    </a>
                  </li>
                  <li className="nav-item p-2">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item p-2">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item p-2">
                    <a className="nav-link" href="#">
                      Team
                    </a>
                  </li>
                  <li className="nav-item p-2">
                    <a className="nav-link" href="#">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item p-2">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
                <button
                  className="btn btn-danger rounded-pill px-3 py-2"
                  type="submit"
                >
                  Try it free
                </button>
              </div>
            </div>
          </nav>
          {/* Banner */}
          <div className="banner d-flex justify-content-center align-items-center">
            <div className="flex-column">
              <h1 className="text-white text-center">
                We help startups launch their <br />
                products
              </h1>
              <p className="text-white text-center mt-4">
                Etiam sed.Interdum consequat proin vestibulum class at.
              </p>
              <p className="text-danger text-center fs-1">
                <i class="fa-regular fa-circle-play"></i>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Section 2 */}

      <div className="container">
        <section className="pt-4 pb-4 text-center">
          <h2>OUR SERVICES</h2>
          <p className="marginB pt-3"></p>
          <p>
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that <br /> have meaning and add
            a value for our clients.
          </p>
        </section>
        <div className="row">
          <div className="col-md-4">
            <div class="text-center p-5">
              <i class="fa-regular fa-gem text-danger fs-2 pb-4"></i>
              <h4 class="pb-4">Digital Design</h4>
              <p class="pb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="text-center p-5">
              <i class="fa-solid fa-laptop text-danger fs-2 pb-4"></i>
              <h4 class="pb-4">Digital Design</h4>
              <p class="pb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="text-center p-5">
              <i class="fa-solid fa-piggy-bank text-danger fs-2 pb-4"></i>
              <h4 class="pb-4">Digital Design</h4>
              <p class="pb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="text-center p-5">
              <i class="fa-solid fa-magnifying-glass text-danger fs-2 pb-4"></i>
              <h4 class="pb-4">Digital Design</h4>
              <p class="pb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="text-center p-5">
              <i class="fa-regular fa-newspaper text-danger fs-2 pb-4"></i>
              <h4 class="pb-4">Digital Design</h4>
              <p class="pb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div class="text-center p-5">
              <i class="fa-solid fa-plane text-danger fs-2 pb-4"></i>
              <h4 class="pb-4">Digital Design</h4>
              <p class="pb-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Moltin gives you the platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="sec3 bg-body-secondary pb-5">
        <section className="container">
          <div className="row pt-5">
            <div className="col-md-6">
              <div className="d-flex text-body-secondary justify-content-around flex-column h-100">
                <h4 className="text-black">
                  A digital web design studio creating <br /> modern & engaging
                  online <br />
                  experiences
                </h4>
                <p>
                  Separated they live in Bookmarksgrove right at the coast of
                  the <br /> Semantics, a large language ocean. A small river
                  named Duden <br /> flows by their place and supplies it with
                  the necessary regelialia.
                </p>
                <ul>
                  <li>We put a lot of effort in design.</li>
                  <li>We put a lot of effort in design.</li>
                  <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                  <li>Submit Your Organization.</li>
                </ul>
                <div>
                  <button className="btn btn-danger p-2">
                    Learn More &nbsp;{" "}
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={imgSec3} width="100%" />
            </div>
          </div>
        </section>
      </div>

      {/* Section 4 */}

      <div className="sec4">
        <section className="sec4Color text-center text-white d-flex flex-column h-100 justify-content-center align-items-center">
          <h3 className="pb-2">Build your dream website today</h3>
          <p className="pb-2">
            But nothing the copy said could convince her and so it didn’t take
            long until a few <br /> insidious Copy Writers ambushed her.
          </p>
          <div>
            <button className="btn btn-light p-2">View Plan & Pricing</button>
          </div>
        </section>
      </div>

      {/* Section 4 (Pricing) */}

      <div className="container mb-4">
        <section className="pt-5 pb-4 text-center">
          <h2>OUR PRICING</h2>
          <p className="marginB pt-3"></p>
          <p>
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that <br /> have meaning and add
            a value for our clients.
          </p>
        </section>
        <div className="row">
          <div className="col-md-4 text-center pt-5">
            <p>ECONOMY</p>
            <h2>$9.90</h2>
            <p className="pb-2">BILLING PER MONTH</p>
            <p className="border-top border-secondary"></p>
            <p className="pt-2">
              Bandwidth: <span className="text-danger fw-bold">1GB</span>
            </p>
            <p>
              Onlinespace: <span className="text-danger fw-bold">50MD</span>
            </p>
            <p>
              Support: <span className="text-danger fw-bold">No</span>
            </p>
            <p>
              <span className="text-danger fw-bold">1</span> Domain
            </p>
            <p>
              <span className="text-danger fw-bold">No</span> Hidden Fees
            </p>
            <div>
              <button className="btn btn-danger px-3 m-4">Join Now</button>
            </div>
          </div>
          <div className="col-md-4 text-center pt-5">
            <p>ECONOMY</p>
            <h2>$9.90</h2>
            <p className="pb-2">BILLING PER MONTH</p>
            <p className="border-top border-secondary"></p>
            <p className="pt-2">
              Bandwidth: <span className="text-danger fw-bold">1GB</span>
            </p>
            <p>
              Onlinespace: <span className="text-danger fw-bold">50MD</span>
            </p>
            <p>
              Support: <span className="text-danger fw-bold">No</span>
            </p>
            <p>
              <span className="text-danger fw-bold">1</span> Domain
            </p>
            <p>
              <span className="text-danger fw-bold">No</span> Hidden Fees
            </p>
            <div>
              <button className="btn btn-danger px-3 m-4">Join Now</button>
            </div>
          </div>
          <div className="col-md-4 text-center pt-5">
            <p>ECONOMY</p>
            <h2>$9.90</h2>
            <p className="pb-2">BILLING PER MONTH</p>
            <p className="border-top border-secondary"></p>
            <p className="pt-2">
              Bandwidth: <span className="text-danger fw-bold">1GB</span>
            </p>
            <p>
              Onlinespace: <span className="text-danger fw-bold">50MD</span>
            </p>
            <p>
              Support: <span className="text-danger fw-bold">No</span>
            </p>
            <p>
              <span className="text-danger fw-bold">1</span> Domain
            </p>
            <p>
              <span className="text-danger fw-bold">No</span> Hidden Fees
            </p>
            <div>
              <button className="btn btn-danger px-3 m-4">Join Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 (Behind the people) */}

      <div className="container mb-5">
        <section className="pt-5 pb-4 text-center">
          <h2>BEHIND THE PEOPLE</h2>
          <p className="marginB pt-3"></p>
          <p>
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that <br /> have meaning and add
            a value for our clients.
          </p>
        </section>
        <div className="row">
          <div className="col-md-3 text-center pt-5">
            <section>
              <img className="mb-3" src={btp1} width="100%" />
              <h5>Frank Johnson</h5>
              <p>CEO</p>
            </section>
          </div>
          <div className="col-md-3 text-center pt-5">
            <section>
              <img className="mb-3" src={btp2} width="100%" />
              <h5>Frank Johnson</h5>
              <p>CEO</p>
            </section>
          </div>
          <div className="col-md-3 text-center pt-5">
            <section>
              <img className="mb-3" src={btp3} width="100%" />
              <h5>Frank Johnson</h5>
              <p>CEO</p>
            </section>
          </div>
          <div className="col-md-3 text-center pt-5">
            <section>
              <img className="mb-3" src={btp4} width="100%" />
              <h5>Frank Johnson</h5>
              <p>CEO</p>
            </section>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="sec4">
        <section className="sec4Color text-center text-white d-flex flex-column h-100 justify-content-center align-items-center">
          <h3 className="pb-2">Let's Get Started</h3>
          <p className="marginB pt-3"></p>
          <p className="pb-2">
            But nothing the copy said could convince her and so it didn’t take
            long until a few <br /> insidious Copy Writers ambushed her.
          </p>
          <div>
            <button className="btn btn-light mt-2 px-3 py-2">
              Get Started <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </section>
      </div>

      {/* Section 7 (Blog) */}

      <div className="container mb-5">
        <section className="pt-5 pb-4 text-center">
          <h2>BLOG</h2>
          <p className="marginB pt-3"></p>
          <p>
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that <br /> have meaning and add
            a value for our clients.
          </p>
        </section>
        <div className="row">
          <div className="col-md-4 pt-5">
            <section>
              <img className="mb-3" src={blog1} width="100%" />
              <p className="text-body-secondary">UI & UX Design</p>
              <h5>Doing a cross country road trip</h5>
              <p className="text-body-secondary">
                She packed her seven versalia, put her initial into the belt and
                made herself on the way..
              </p>
              <p className="text-danger">
                Read More <i class="fa-solid fa-arrow-right-long"></i>
              </p>
            </section>
          </div>
          <div className="col-md-4 pt-5">
            <section>
              <img className="mb-3" src={blog2} width="100%" />
              <p className="text-body-secondary">UI & UX Design</p>
              <h5>Doing a cross country road trip</h5>
              <p className="text-body-secondary">
                She packed her seven versalia, put her initial into the belt and
                made herself on the way..
              </p>
              <p className="text-danger">
                Read More <i class="fa-solid fa-arrow-right-long"></i>
              </p>
            </section>
          </div>
          <div className="col-md-4 pt-5">
            <section>
              <img className="mb-3" src={blog3} width="100%" />
              <p className="text-body-secondary">UI & UX Design</p>
              <h5>Doing a cross country road trip</h5>
              <p className="text-body-secondary">
                She packed her seven versalia, put her initial into the belt and
                made herself on the way..
              </p>
              <p className="text-danger">
                Read More <i class="fa-solid fa-arrow-right-long"></i>
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Section 8 (Footer) */}

      {/* Footer 1 */}
      <div className="bg-dark pt-5">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-3">
              <h5 className="text-white pb-4">DORSIN</h5>
              <div className="text-secondary">
                <p>Home</p>
                <p>About us</p>
                <p>Careers</p>
                <p>Contact us</p>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="text-white pb-4">Information</h5>
              <div className="text-secondary">
                <p>Terms & Condition</p>
                <p>About us</p>
                <p>Jobs</p>
                <p>Bookmarks</p>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="text-white pb-4">Support</h5>
              <div className="text-secondary">
                <p>About us</p>
                <p>Jobs</p>
                <p>Bookmarks</p>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="text-white pb-4">Subscribe</h5>
              <div className="text-secondary">
                <p>
                  In an ideal world this text wouldn’t exist, a client would
                  acknowledge the importance of having web copy before the
                  design starts.
                </p>
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-secondary text-white px-3 rounded outline-none py-1 footInp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer 2 */}
      <div className="foot2">
        <div className="container d-flex justify-content-between">
          <p className="p-3 text-white">2019 - 2023 © Dorsin - Themesbrand</p>
          <div className="mt-3">
            <img src={payment} width="150px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
