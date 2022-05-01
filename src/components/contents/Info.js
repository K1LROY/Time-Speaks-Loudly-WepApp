import React from "react";
import { Link } from "react-router-dom";
import "../../styles/contentStyles/info.css";

export default function Info() {
  return (
    <div class="mt-5 py-5">
      <div class="info mt-5 py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-6  mb-5 mb-sm-0">
              <div class="text-muted">the fact</div>
              <h2 class="display-4 font-weight-bold mb-3">Why choose us!</h2>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                sed, necessitatibus deserunt magnam voluptatibus tempora
                incidunt odit dolore delectus! Ut autem veritatis!
              </p>
              <Link to="#" class="btn-round btn btn-warning">
                Watch our video <i class="ri-play-line ri-center"></i>
              </Link>
            </div>
            <div class="col-sm-6 mt-5 mt-sm-0 text-right">
              <div class="img-wrapper mt-5 mt-sm-0 d-inline-block">
                <img
                  src="images/product-600x1200-4.png"
                  class="img-fluid max-vh-80 "
                  alt="Product Preview"
                />
                <img
                  src="images/product-600x1200-5.png"
                  class="img-fluid max-vh-80 absolute "
                  alt="Product Preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="info mt-5 py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="img-wrapper">
                <img
                  src="images/product-600x1200-6.png"
                  class="img-fluid max-vh-80 "
                  alt="Product Preview"
                />
                <img
                  src="images/product-600x1200-7.png"
                  class="img-fluid max-vh-80 absolute "
                  alt="Product Preview"
                />
              </div>
            </div>
            <div class="col-sm-6 my-5 my-sm-0 text-right">
              <div class="text-muted">the transcendance</div>
              <h2 class="display-4 font-weight-bold mb-3">
                Is it really different?
              </h2>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                sed, necessitatibus deserunt magnam voluptatibus tempora
                incidunt odit dolore delectus! Ut autem veritatis!
              </p>
              <Link to="#" class="btn-round btn btn-warning">
                Purchase Now <i class="ri-shopping-bag-line ri-center"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
