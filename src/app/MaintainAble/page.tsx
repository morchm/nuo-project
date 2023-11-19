import { Navigation } from "../components/navigation";
import Image from "next/image";
import styles from "../WhatWeDo/whatwedo.page.module.scss";
import { getAllData } from "../api/getAllData";
import ImageLinkResponsive from "../components/ImageLinkResponsive";

import maintainableDesktop from "../../../public/images/front-maintainable-link.png";
import maintainableMobile from "../../../public/images/weba-3-mobil-maintainable.png";
import BottomTitle from "../components/BottomTitle";

export default async function MaintainAble() {
  const data = await getAllData();
  const textData = data.textarea[1];

  return (
    <div id={styles.whatwedoBackground}>
      <div className={styles.pageContainer}>
        <Navigation />
        <article className={styles.pageArticle}>
          <ImageLinkResponsive
            alt="whatwedo"
            desktop={maintainableDesktop}
            tablet={maintainableMobile}
            mobile={maintainableMobile}
          />

          <section className="Textarea">
            <h1>
              {textData.h1.text}
              <span style={textData.h1.specialStyle}>
                {textData.h1.specialText}
              </span>
            </h1>
            <p>{textData.p.text}</p>

            <BottomTitle titleText="Maintainable" logoColor="a"/>
          </section>
        </article>
      </div>
    </div>
  );
}
