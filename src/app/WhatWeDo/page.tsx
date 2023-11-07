"use client";
import styles from "./whatwedo.page.module.scss";
import Image from "next/image";
import { Navigation } from "../components/navigation";
import { getAllData } from "../Data/getAllData";

export default async function WhatWeDo() {

  const data = await getAllData();

  return (
    <div id={styles.whatwedoBackground}>
      <div className="pageContainer">
        <Navigation />
        <article className="pageArticle">
          <Image
            src="/images/front-what-we-do-link.png"
            width={220}
            height={500}
            alt="What we do image"
          />

          <section className="Textarea">
            <h1>{data.textarea[0].h1}</h1>
            <p>{data.textarea[0].text}</p>

            <div className="bottomTitle">What We Do</div>
          </section>
        </article>
      </div>
    </div>
  );
}
