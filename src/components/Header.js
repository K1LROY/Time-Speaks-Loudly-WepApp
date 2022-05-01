import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <div>
      <input type="checkbox" id="trigger" />
      <nav>
        <ul class="menu01">
          <li>
            <label for="trigger" class="trigger">
              <i class="fa fa-bars"></i>
            </label>
          </li>
          <li>
            <i class="fa fa-home"></i>
          </li>
          <li>
            <i class="fa fa-bell"></i>
          </li>
          <li>
            <i class="fa fa-envelope"></i>
          </li>
          <li>
            <i class="fa fa-cog"></i>
          </li>
          <li>
            <i class="fa fa-laptop"></i>
          </li>
          <li>
            <i class="fa fa-edit"></i>
          </li>
          <li>
            <i class="fa fa-user"></i>
          </li>
          <li>
            <i class="fa fa-map"></i>
          </li>
        </ul>

        <ul class="menu02">
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
          <li>About</li>
          <li>Faq</li>
          <li>Terms</li>
          <li>Service</li>
          <li>Locate</li>
        </ul>
      </nav>
      <div class="intro mt-5 py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <h1 class="">Time Speaks Loudly</h1>
              <p class="lead">Lorem ipsum dolor sit amet odor lemo</p>
              <Link to="#" class="btn-link">
                Watch Our Video <i class="fa fa-play"></i>
              </Link>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-sm-12 text-center">
              <div class="product-wrapper">
                <img
                  src="images/product-600x1200-3.png"
                  class="scroll-move"
                  alt="Product Preview"
                />

                <img
                  src="images/product-600x1200-1.png"
                  class="scroll-stable"
                  alt="Product Preview"
                />

                <img
                  src="images/product-600x1200-2.png"
                  class="scroll-move"
                  alt="Product Preview"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
