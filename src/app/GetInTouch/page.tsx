import Image from "next/image";
import { Navigation } from "../components/navigation";
import styles from "./getintouch.page.module.scss";
import { getAllData } from "../api/getAllData";
import Modal from "../components/modal";

export default async function GetInTouch() {

  const data = await getAllData();

  const textData = data.textarea[2];

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
            <h1>{textData.h1.text}<span style={textData.h1.specialStyle}>{textData.h1.specialText}</span></h1>     
            <p>{textData.p.text}</p>

            <Modal />

            <div className="bottomTitle">Get In Touch</div>
          </section>
        </article>
      </div>
    </div>
  );
}
