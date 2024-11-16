import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;

    default:
      return <Footer1 />;
  }
};
const Footer1 = () => {
  return (
    <footer className="footer-section fix section-bg">
      <div className="burger-shape">
        <img src="assets/img/shape/burger-shape-3.png" alt="burger-shape" />
      </div>
      <div className="fry-shape">
        <img src="assets/img/shape/fry-shape-2.png" alt="burger-shape" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="assets/img/logo/logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    We believe it has the power to do <br />
                    amazing things.
                  </p>
                  <span>Interested in working with us?</span> <br />
                  <a href="mailto:info@example.com" className="link">
                    info@example.com
                  </a>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Links</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="/about">Services</Link>
                  </li>
                  <li>
                    <Link href="/about">About company</Link>
                  </li>
                  <li>
                    <Link href="/news-details">latest news</Link>
                  </li>
                  <li>
                    <Link href="/team">team member</Link>
                  </li>
                  <li>
                    <Link href="/testimonial">testimonials</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 ps-lg-4 col-sm-6 col-md-3 col-lg-3 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>My account</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="/shop-single">My Profile</Link>
                  </li>
                  <li>
                    <Link href="/shop-single">My Order History</Link>
                  </li>
                  <li>
                    <Link href="/shop-single">My Wish List</Link>
                  </li>
                  <li>
                    <Link href="/shop-single">Order Tracking</Link>
                  </li>
                  <li>
                    <Link href="/shop-cart">Shopping Cart</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-sm-6 col-md-6 col-lg-3 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Address:</h4>
                </div>
                <div className="footer-address-text">
                  <h6>
                    570 8th Ave, New York,NY <span>10018</span>
                    United States
                  </h6>
                  <h5>Hours:</h5>
                  <h6>
                    9.30am – 6.30pm <br />
                    Monday to Friday
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 ps-xl-5 col-sm-6 col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Install app</h4>
                </div>
                <div className="footer-apps-items">
                  <h5>From App Store or Google Play</h5>
                  <div className="apps-image d-flex align-items-center">
                    <a href="#">
                      <img src="assets/img/app-store.png" alt="store-img" />
                    </a>
                    <a href="#">
                      <img src="assets/img/google-play.png" alt="store-img" />
                    </a>
                  </div>
                  <div className="support-text">
                    <h5>24/7 Support center</h5>
                    <h3>
                      <a href="tel:+1718-904-4450">+1718-904-4450</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © Copyright <span className="theme-color-3">2024</span>{" "}
              <Link href="/">Foodking </Link>. All Rights Reserved.
            </p>
            <div className="card-image wow fadeInRight" data-wow-delay=".5s">
              <img src="assets/img/card.png" alt="card-img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-section section-bg-3 fix">
      <div className="footer-shape">
        <img src="assets/img/shape/footer-shape.png" alt="shape-img" />
      </div>
      <div className="footer-shape-2">
        <img src="assets/img/shape/footer-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper style-2">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 pe-md-2 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget pe-md-5 border-right">
                <div className="widget-head">
                  <Link href="/">
                    <img src="assets/img/logo/logo-2.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Temporibus autem quibusdam officiis debitis aut rerum
                    necessitatibus saepe eveniet voluta repudiandae molestiae
                    recusandae Itaquear rerum hic tenetur sapiente delectus
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-4 col-md-6 ps-xl-5 pe-md-5 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget border-right">
                <div className="widget-head">
                  <h4>popular food</h4>
                </div>
                <div className="list-area d-flex align-items-center">
                  <ul>
                    <li>
                      <Link href="/shop-single">Hamburger</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Chicken pizza</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Vegetable roll</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Sea fish</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Fried chicken</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link href="/shop-single">French fries</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Onion rings</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Chicken nuggets</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Tacos Pizza</Link>
                    </li>
                    <li>
                      <Link href="/shop-single">Hot Dogs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <div className="widget-head">
                    <h4>contact us</h4>
                  </div>
                </div>
                <div className="footer-content">
                  <p>
                    1403 Washington Ave, New Orlea <br />
                    ns, LA 70130, United States
                  </p>
                  <a href="mailto:info@example.com" className="link">
                    info@example.com
                  </a>
                  <a href="tel:+1718-904-4450" className="number">
                    +1718-904-4450
                  </a>
                  <ul className="info-date">
                    <li>
                      Monday – Friday: <span>8am – 4pm</span>
                    </li>
                    <li>
                      Saturday: <span>8am – 12am</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div
          id="scrollUp"
          className="scroll-icon bg-cover"
          style={{ backgroundImage: 'url("assets/img/shop-food/box.png")' }}
        >
          <i className="fas fa-arrow-alt-up" />
        </div>
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © Copyright <span className="theme-color-3">2024</span>{" "}
              <Link href="/">Foodking </Link>. All Rights Reserved.
            </p>
            <ul className="wow fadeInRight" data-wow-delay=".5s">
              <li>
                <Link href="/contact">
                  <span className="text-effect">
                    <span className="effect-1">Privacy Policy</span>
                    <span className="effect-1">Privacy Policy</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-effect">
                    <span className="effect-1">Terms &amp; Condition</span>
                    <span className="effect-1">Terms &amp; Condition</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
