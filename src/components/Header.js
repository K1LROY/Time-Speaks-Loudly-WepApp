import React from "react";
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
    </div>
  );
}
