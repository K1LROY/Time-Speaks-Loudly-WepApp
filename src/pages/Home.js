import React from "react";
import Desc from "../components/contents/Desc";
import Features from "../components/contents/Features";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Desc />
      <Features />
    </div>
  );
}
