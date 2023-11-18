// "use client";
import styles from "./whatwedo.page.module.scss";
import Image from "next/image";
import { Navigation } from "../components/navigation";
import { getAllData } from "../api/getAllData";

export default async function WhatWeDo() {

  const data = await getAllData();

  const textData = data.textarea[0]

  return (
    <div id={styles.whatwedoBackground}>
      <div className={styles.pageContainer}>
        <Navigation />
        <article className={styles.pageArticle}>
          <Image
            src="/images/front-what-we-do-link.png"
            width={220}
            height={500}
            alt="What we do image"
            className={styles.desktop}
          />

              {/* Mobile image */}
            <Image
            src="/images/weba-2-mobil-whatwedo.png"
            width={600}
            height={300}
            alt="What we do site"
            className={styles.mobile}
            />

          <section className="Textarea">
            <h1>{textData.h1.text}<span style={textData.h1.specialStyle}>{textData.h1.specialText}</span></h1>
            <p>{textData.p.text}</p>

            <div className="bottomTitle">What We Do</div>
          </section>
        </article>
      </div>
    </div>
  );
}
