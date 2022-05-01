import React from "react";
import "../../styles/contentStyles/isSpace.css";

export default function IsSpace() {
  return (
    <div id="specs" class="specs mt-5 py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2 text-center">
            <div class="text-muted">Get it now</div>
            <h2 class="display-4 font-weight-bold mb-3 ">
              70% Discount til April 2022!
            </h2>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              sed, necessitatibus deserunt magnam voluptatibus tempora incidunt
              odit dolore delectus! Ut autem veritatis!
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-3 text-right">
            <div class="info ">
              <div class="text-muted">Performance Speed:</div>
              <div class="display-4 font-weight-bold text-white">4x</div>
              <p class="font-italic font-weight-light text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero!
              </p>
            </div>

            <div class="info mt-5">
              <div class="text-muted">Available Icons:</div>
              <div class="display-4 font-weight-bold text-white">1976</div>
              <p class="font-italic font-weight-light text-white">
                Including line and flat icons, all at one place in RemixIcon.
              </p>
            </div>

            <div class="info mt-5">
              <div class="text-muted">Downloaded:</div>
              <div class="display-4 font-weight-bold text-white">+300K</div>
              <p class="font-italic font-weight-light text-white">
                It's been one of the most downloaded apps on app store!.
              </p>
            </div>
          </div>
          <div class="col-sm-6 mb-sm-large">
            <div class="img-wrapper">
              <img
                src="images/usecase-900x465-3.png"
                class="img-fluid"
                alt="Product Preview"
              />
              <img
                src="images/usecase-900x465-4.png"
                class="img-fluid absolute "
                alt="Product Preview"
              />
            </div>
          </div>
          <div class="col-sm-3">
            <div class="info ">
              <div class="text-muted">Bootstrap:</div>
              <div class="display-4 font-weight-bold text-white">4.x</div>
              <p class="font-italic font-weight-light text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero!
              </p>
            </div>

            <div class="info mt-5">
              <div class="text-muted">RemixIcon:</div>
              <div class="display-4 font-weight-bold text-white">2.2.0</div>
              <p class="font-italic font-weight-light text-white">
                Including line and flat icons, all at one place in RemixIcon.
              </p>
            </div>

            <div class="info mt-5">
              <div class="text-muted">Active Installs:</div>
              <div class="display-4 font-weight-bold text-white">500K</div>
              <p class="font-italic font-weight-light text-white">
                It's been one of the most downloaded apps on app store!.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
