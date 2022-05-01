import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div class="pt-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-sm-4 text-white">
            <h4>Masonic</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 text-white">
            <p class="small font-weight-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis error accusantium enim, maxime nihil sequi!
            </p>
            <button to="#" class="app-btn btn btn-dark">
              <i class="ri-android-line ri-lg"></i>
              <div>
                <div class="small text-uppercase">Get it on</div>
                <div class="font-weight-bold">Google Play</div>
              </div>
            </button>
            <button to="#" class="app-btn btn btn-warning ml-2">
              <i class="ri-apple-line ri-lg"></i>
              <div>
                <div class="small text-uppercase">Get it on</div>
                <div class="font-weight-bold">App Store</div>
              </div>
            </button>
          </div>
          <div class="col-sm-2 mt-4 mt-sm-0">
            <ul class="list-unstyled small">
              <li>
                <Link to="#">Order Now</Link>
              </li>
              <li>
                <Link to="#">Get Help</Link>
              </li>
            </ul>
          </div>
          <div class="col-sm-2 mt-4 mt-sm-0">
            <ul class="list-unstyled small">
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div class="col-sm-4 mt-4 mt-sm-0 text-white">
            <div class="small">
              <address class="d-inline-block mb-0">Thailand</address>
            </div>
            <div class="small">
              <Link to="kwandee1992@gmail.com">kwandee1992@gmail.com</Link>
            </div>
            <div class="social-media mt-2">
              <Link to="#" target="_blank" class="mr-1">
                <i class="ri-facebook-line"></i>
              </Link>
              <Link to="#" target="_blank" class="mr-1">
                <i class="ri-twitter-line"></i>
              </Link>
              <Link to="#" target="_blank" class="mr-1">
                <i class="ri-instagram-line"></i>
              </Link>
              <Link to="#" target="_blank" class="mr-1">
                <i class="ri-linkedin-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="cp py-4 small text-white">
        <div class="container">
          <div class="row text-center text-sm-left">
            <div class="col-sm-6">Copyright ©2022</div>
            <div class="col-sm-6 text-sm-right mt-2 mt-sm-0">
              <i class="ri-heart-2-fill primary-color"></i> Retro web
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
