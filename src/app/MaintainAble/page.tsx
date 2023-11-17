import { Navigation } from "../components/navigation";
import Image from "next/image";
import styles from "../WhatWeDo/whatwedo.page.module.scss";
import { getAllData } from "../api/getAllData";

export default async function MaintainAble() {
  const data = await getAllData();

  const textData = data.textarea[1]

  return (
    <div id={styles.whatwedoBackground}>
      <div className="pageContainer">
        <Navigation />
        <article className="pageArticle">
          <Image
            src="/images/front-maintainable-link.png"
            width={220}
            height={500}
            alt="Maintainable image"
          />

          <section className="Textarea">
            <h1>{textData.h1.text}<span style={textData.h1.specialStyle}>{textData.h1.specialText}</span></h1>
            <p>{textData.p.text}</p>

            <div className="bottomTitle">Maintainable</div>
          </section>
        </article>
      </div>
    </div>
  )
}
