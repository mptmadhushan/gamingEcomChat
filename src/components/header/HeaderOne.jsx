import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import $ from "jquery";
import ScrollToTop from "react-scroll-to-top";

function HeaderOne() {
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .push-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );

      $(".menu-backdrop, .mobile-menu .close-btn").click(() => {
        $("body").removeClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });
    }
  }, []);

  useEffect(() => {
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $(".scroll-to-target").removeClass("open");
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $(".scroll-to-target").addClass("open");
      }
    });
  }, []);

  return (
    <header>
      <ScrollToTop smooth top="500" color="#000" />
      <div className="header-top-area d-none d-lg-block">
        <div className="container-fluid container-full-padding">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="header-top-offer">
                <p>Exclusive Black Friday ! Offer</p>
                <span className="coming-time" data-countdown="2022/6/20" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="header-top-right">
                <div className="header-social">
                  <ul>
                    <li>
                      <a href="/index-2">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="/index-2">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/index-2">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="/index-2">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-top-action">
                  <ul>
                    <li>
                      <div className="header-top-mail">
                        <p>
                          <span>|</span>
                          <i className="far fa-envelope" />
                          <Link to="/contact">info@gameinfo.com</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="header-user-login">
                        <a href="/index-2">
                          <i className="fas fa-user" />
                          Login
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="main-header menu-area">
        <div className="container-fluid container-full-padding">
          <div className="row">
            <div className="col-12">
              <div className="mobile-nav-toggler">
                <i className="fas fa-bars" />
              </div>
              <div className="main-menu">
                <nav>
                  <div className="logo">
                    <Link to="/index-2">
                      {/* <img src="assets/img/logo/logo.png" alt="Logo" /> */}
                    </Link>
                  </div>

                  <div className="navbar-wrap push-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className=" menu-item-has-children">
                        <NavLink to="/index-2">Home</NavLink>
                        {/* <ul className="submenu ">
                              <li ><Link to="/">Home One</Link></li>
                              <li><Link to="/index-2">Home Two</Link></li>
                              <li><Link to="/index-3">Home Three</Link></li>
                              <li ><Link to="/index-4">Home Four</Link></li>
                              <li><Link to="/index-5">Home Five</Link></li>
                              <li><Link to="/index-6">Home Six</Link></li>
                              <li><Link to="/index-7">Home Seven</Link></li>
                          </ul> */}
                      </li>
                      {/* <li className=" menu-item-has-children"><NavLink to="/about-us" >Pages</NavLink>
                          <ul className="submenu">
                            <li><NavLink to="/about-us">About Story</NavLink></li>
                            <li><NavLink to="/upcoming-games">Upcoming Games</NavLink></li>
                            <li><NavLink to="/game-single">Game Single</NavLink></li>
                          </ul>
                        </li> */}
                      {/* <li>
                        <NavLink to="/overview">Overview</NavLink>
                      </li> */}
                      {/* <li>
                        <NavLink to="/community">Community</NavLink>
                      </li> */}
                      <li>
                        <NavLink to="/index-2">Store</NavLink>
                        {/* <NavLink to="/shop">Store</NavLink> */}
                      </li>
                      {/* <li className=" menu-item-has-children">
                        <NavLink to="/blogs">Blogs</NavLink>
                        <ul className="submenu">
                          <li>
                            <NavLink to="/blogs">News Page</NavLink>
                          </li>
                          <li>
                            <NavLink to="/blog-details">News Details</NavLink>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <NavLink to="/index-2">contact</NavLink>
                        {/* <NavLink to="/contact">contact</NavLink> */}
                      </li>
                    </ul>
                  </div>

                  <div className="header-action">
                    <ul>
                      <li className="header-shop-cart">
                        <a href="/index-2">
                          <i className="fas fa-shopping-basket" />
                          <span>0</span>
                        </a>
                        <ul className="minicart">
                          <li className="d-flex align-items-start">
                            <div className="cart-img">
                              <a href="/index-2">
                                <img
                                  src="assets/img/product/cart_p01.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="cart-content">
                              <h4>
                                <a href="/index-2">Xbox One Controller</a>
                              </h4>
                              <div className="cart-price">
                                <span className="new">$229.9</span>
                                <span>
                                  <del>$229.9</del>
                                </span>
                              </div>
                            </div>
                            <div className="del-icon">
                              <a href="/index-2">
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="total-price">
                              <span className="f-left">Total:</span>
                              <span className="f-right">$239.9</span>
                            </div>
                          </li>
                          <li>
                            <div className="checkout-link">
                              <Link to="/index-2">Shopping Cart</Link>
                              <a className="red-color" href="/index-2">
                                Checkout
                              </a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="header-search">
                        <a
                          href="/index-2"
                          data-toggle="modal"
                          data-target="#search-modal"
                        >
                          <i className="fas fa-search" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <i className="fas fa-times" />
                  </div>
                  <div className="nav-logo">
                    <Link to="/index-2">
                      <img src="assets/img/logo/logo.png" alt="" title="true" />
                    </Link>
                  </div>
                  <div className="menu-outer"></div>
                  <div className="social-links">
                    <ul className="clearfix">
                      <li>
                        <a href="/index-2">
                          <span className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/index-2">
                          <span className="fab fa-facebook-square" />
                        </a>
                      </li>
                      <li>
                        <a href="/index-2">
                          <span className="fab fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="/index-2">
                          <span className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="/index-2">
                          <span className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop" />
            </div>
            {/* Modal Search */}
            <div
              className="modal fade"
              id="search-modal"
              tabIndex={-1}
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form>
                    <input type="text" placeholder="Search here..." />
                    <button>
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default HeaderOne;
