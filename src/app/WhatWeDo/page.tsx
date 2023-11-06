import styles from "./whatwedo.page.module.scss";
import Image from "next/image";
import { Navigation } from "../components/navigation";
import { getAllData } from "../query/getAllData";

export default async function WhatWeDo() {

  const data = await getAllData();

  return (
    <div id={styles.whatwedoBackground}>
      <div className={styles.whatwedoContainer}>
        <Navigation />
        <article className={styles.whatwedoArticle}>
          <Image
            src="/images/front-what-we-do-link.png"
            width={220}
            height={500}
            alt="What we do image"
          />

          <section className={styles.whatwedoTextarea}>
            <h1>{data.textarea[0].h1}</h1>
            <p>{data.textarea[0].text}</p>

            <div className={styles.bottomTitle}>What We Do</div>
          </section>
        </article>
      </div>
    </div>
  );
}
