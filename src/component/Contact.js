import React from "react";
import miniLogo from "../assets/DELICAKES LOGO KECIL-01.png";
import order from "../assets/ORDER-01.png";

function Contact() {
  return (
    <div id="contact" style={{ width: "70%" }} className="mx-auto pb-12">
      <div className="foot flex flex-col items-center pb-12">
        <img src={miniLogo} className="w-1/6 my-6" />
        <img src={order} />
      </div>
      <div className="w-11/12 mx-auto -mt-8 flex justify-between">
        <div>
          <p className="mb-3 font-serif font-semibold">EMAIL</p>
          <p className="font-medium tracking-tight">info@shopdelicakes.com</p>
        </div>
        <div className="text-center">
          <p className="mb-3 font-serif font-semibold">WHATSAPP</p>
          <p className="font-medium tracking-tight">081311203080</p>
        </div>
        <div className="text-right">
          <p className="mb-3 font-serif font-semibold">INSTAGRAM</p>
          <p className="font-medium tracking-tight">@shopdalicakes</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
