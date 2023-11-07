import { Navigation } from "../components/navigation";
import Image from "next/image";
import styles from "../WhatWeDo/whatwedo.page.module.scss";
import { getAllData } from "../Data/getAllData";

export default async function MaintainAble() {
  const data = await getAllData();


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
            <h1>{data.textarea[1].h1}</h1>
            <p>{data.textarea[1].text}</p>

            <div className="bottomTitle">Maintainable</div>
          </section>
        </article>
      </div>
    </div>
  )
}
