/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Footer from "@/component/footer/footer";
import ImageComponent from "./component/headerImage";
import MissionVisionComponent from "./component/body/MissionVisionComponent";


export default function AboutUsComponent() {
 

  return (
    <div className="w-screen">
        <ImageComponent/>
        <MissionVisionComponent/>
        <Footer/>
    </div>
  );
}
