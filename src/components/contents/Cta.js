import React from "react";
import { Link } from "react-router-dom";
import "../../styles/contentStyles/cta.css";

export default function Cta() {
  return (
    <div class="cta mt-5 py-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <div class="text-muted">order now</div>
            <h2 class="display-4 font-weight-bold mb-3">
              Hurry up, it's limited!
            </h2>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              sed, necessitatibus deserunt magnam voluptatibus tempora incidunt
              odit dolore delectus! Ut autem veritatis!
            </p>
            <Link to="#" class="btn-round btn btn-danger">
              Register Now <i class="ri-check-double-line ri-center"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
