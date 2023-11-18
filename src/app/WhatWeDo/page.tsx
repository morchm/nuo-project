// "use client";
import styles from "./whatwedo.page.module.scss";
import Image from "next/image";
import { Navigation } from "../components/navigation";
import { getAllData } from "../api/getAllData";
import ImageLinkResponsive from "../components/ImageLinkResponsive";
import whatwedoDesktop from "../../../public/images/front-what-we-do-link.png";
import whatwedoMobile from "../../../public/images/weba-2-mobil-whatwedo.png";
import BottomTitle from "../components/BottomTitle";

export default async function WhatWeDo() {
  const data = await getAllData();
  const textData = data.textarea[0];

  return (
    <div id={styles.whatwedoBackground}>
      <div className={styles.pageContainer}>
        <Navigation />
        <article className={styles.pageArticle}>
          <ImageLinkResponsive
            alt="whatwedo"
            desktop={whatwedoDesktop}
            tablet={whatwedoMobile}
            mobile={whatwedoMobile}
          />

          <section className="Textarea">
            <h1>
              {textData.h1.text}
              <span style={textData.h1.specialStyle}>
                {textData.h1.specialText}
              </span>
            </h1>
            <p>{textData.p.text}</p>

            <BottomTitle titleText="What We Do"/>

          </section>
        </article>
      </div>
    </div>
  );
}
