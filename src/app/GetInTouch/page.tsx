import Image from "next/image";
import { Navigation } from "../components/navigation";
import styles from "./getintouch.page.module.scss";
import { getAllData } from "../Data/getAllData";
import Modal from "../components/modal";

export default async function GetInTouch() {
  const data = await getAllData();

  return (
    <div id={styles.getintouchBackground}>
      <div className="pageContainer">
        <Navigation />
        <article className="pageArticle">
          <Image
            src="/images/front-getintouch-link.png"
            width={220}
            height={500}
            alt="Get in Touch"
          />

          <section className="Textarea">
            <h1>{data.textarea[2].h1}</h1>
            <p>{data.textarea[2].text}</p>

            <Modal/>

            <div className="bottomTitle">Get In Touch</div>
          </section>

        </article>
      </div>
    </div>
  );
}
