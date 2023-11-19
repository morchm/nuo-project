import Image from "next/image";
import { Navigation } from "../components/navigation";
import styles from "./getintouch.page.module.scss";
import { getAllData } from "../api/getAllData";
import Modal from "../components/modal";
import ImageLinkResponsive from "../components/ImageLinkResponsive";
import getintouchDesktop from "../../../public/images/front-getintouch-link.png";
import getintouchMobile from "../../../public/images/weba-mobil.getintouch.png";
import BottomTitle from "../components/BottomTitle";

export default async function GetInTouch() {
  const data = await getAllData();
  const textData = data.textarea[2];

  return (
    <div id={styles.getintouchBackground}>
      <div className={styles.pageContainer}>
        <Navigation />
        <article className={styles.pageArticle}>

        <ImageLinkResponsive
            alt="whatwedo"
            desktop={getintouchDesktop}
            tablet={getintouchMobile}
            mobile={getintouchMobile}
          />


          <section className="Textarea">
            <h1>{textData.h1.text}<span style={textData.h1.specialStyle}>{textData.h1.specialText}</span></h1>     
            <p>{textData.p.text}</p>

            <Modal />

            <BottomTitle titleText="Get In Touch" logoColor="b"/>
          </section>
        </article>
      </div>
    </div>
  );
}
