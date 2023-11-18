import style from "./page.module.scss";
import React from "react";
import ImageLinkResponsive from "../components/ImageLinkResponsive";
import a from "../../../public/images/front-what-we-do.png";
import b from "../../../public/images/weba-2-mobil-whatwedo.png";

export default function Page() {
  return (
    <div className={style.testBackground}>
      <div className={style.gridContainer}>
        <ImageLinkResponsive
          href="/WhatWeDo"
          alt="whatwedo"
          desktop={a}
          tablet={b}
          mobile={b}
        />
        <ImageLinkResponsive
          href="/WhatWeDo"
          alt="whatwedo"
          desktop={a}
          tablet={b}
          mobile={b}
        />
        <ImageLinkResponsive
          href="/WhatWeDo"
          alt="whatwedo"
          desktop={a}
          tablet={b}
          mobile={b}
        />
      </div>
    </div>
  );
}
