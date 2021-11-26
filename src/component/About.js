import React from "react";
import about from "../assets/ABOUT-01.png";
import fotoKiri from "../assets/Foto cowo-01.png";
import fotoKanan from "../assets/foto cewe.png";

function About() {
  return (
    <div id="about" className="flex flex-col items-center mb-10">
      <img src={about} style={{ width: "70%" }} className="z-0" />
      <div
        style={{ width: "70%" }}
        className="flex flex-1 w-full flex-row relative"
      >
        <div style={{ marginTop: 30, width: 260, height: 320 }}>
          <img src={fotoKiri} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="flex flex-col text-center mt-20 -mx-10 z-20">
          <p className="tracking-tighter font-medium leading-tight">
            Delicakes Bakery & pastry established May 2012
            <br />
            in a warm and casual kitchen room of Dewi Utari and Nessa
            Khalifardi.
            <br />
            Bascally Dewi Utari is a fashion stylist and the owner of
            www.dewiutari.com,
            <br />
            yet she finally find out that she has passion for baking. Nessa
            Khalifardi
            <br />
            background was actually an economic and numerical guy kind of guy,
            <br />
            yet he also love baking pastry and all those delightful foods.
          </p>
          <p className="mt-4 tracking-tighter font-medium leading-tight">
            Delicakes provide you with variety of good foods, from Cupcakes,
            <br />
            Cakes, Pastry, also Pudding from its finest ingrediedients. All of
            <br />
            our speciality always includes one secret ingredient,
            <br />
            the secret is “we bake with our heart”.
          </p>
        </div>
        <div
          style={{ marginTop: -40, width: 260, height: 320 }}
          className="z-10"
        >
          <img
            src={fotoKanan}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
