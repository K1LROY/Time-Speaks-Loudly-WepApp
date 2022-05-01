import React from "react";
import Cta from "../components/contents/Cta";
import Desc from "../components/contents/Desc";
import Features from "../components/contents/Features";
import Info from "../components/contents/Info";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Desc />
      <Features />
      <Info />
      <Cta />
    </div>
  );
}
