import React from "react";
import "../../styles/contentStyles/features.css";

export default function Features() {
  return (
    <div id="features" class="desc mt-5 py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 offset-sm-2 text-center">
            <div class="text-muted " data--preset="fadeInOut">
              the package
            </div>
            <h2
              class="display-4 font-weight-bold mb-3 "
              data--preset="fadeInOut"
            >
              What is inside now?
            </h2>
            <p class="lead " data--preset="fadeInOut">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              sed, necessitatibus deserunt magnam voluptatibus tempora incidunt
              odit dolore delectus! Ut autem veritatis!
            </p>
          </div>
        </div>
        <div class="row mt-5 text-center">
          <div class="col-sm-4">
            <i class="fa fa-user"></i>
            <div class="h4">24/7 Support</div>
            <p class="font-weight-light text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              distinctio rerum, adipisci itaque ullam quos libero iusto non ut.
            </p>
          </div>

          <div class="col-sm-4">
            <i class="fa fa-heart"></i>
            <div class="h4">Documentation</div>
            <p class="font-weight-light text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              distinctio rerum, adipisci itaque ullam quos libero iusto non ut.
            </p>
          </div>

          <div class="col-sm-4">
            <i class="fa fa-bullhorn"></i>
            <div class="h4">Future Updates</div>
            <p class="font-weight-light text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              distinctio rerum, adipisci itaque ullam quos libero iusto non ut.
            </p>
          </div>
        </div>
        <div class="row mt-5 text-center">
          <div class="col-sm-4">
            <i class="fa fa-globe"></i>
            <div class="h4">Popular</div>
            <p class="font-weight-light text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              distinctio rerum, adipisci itaque ullam quos libero iusto non ut.
            </p>
          </div>

          <div class="col-sm-4">
            <i class="fa fa-tag"></i>
            <div class="h4">Cross-Platform</div>
            <p class="font-weight-light text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              distinctio rerum, adipisci itaque ullam quos libero iusto non ut.
            </p>
          </div>

          <div class="col-sm-4">
            <i class="fa fa-search"></i>
            <div class="h4">User Friendly</div>
            <p class="font-weight-light text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              distinctio rerum, adipisci itaque ullam quos libero iusto non ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
