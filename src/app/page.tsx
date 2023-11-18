import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import ImageLinkResponsive from "./components/ImageLinkResponsive";
//What we do photos
import whatwedoDeskstop from "../../public/images/front-what-we-do.png";
import whatwedoMobile from "../../public/images/weba-2-mobil-whatwedo.png";
//Maintainable photos
import maintainableDesktop from "../../public/images/front-maintainable.png";
import maintainableMobile from "../../public/images/weba-3-mobil-maintainable.png";
//Get in touch photos
import getintouchDesktop from "../../public/images/front-get-in-touch.png";
import getintouchMobile from "../../public/images/weba-mobil.getintouch.png";

export default function Home() {
  return (
    <div id={styles.background}>
      <div className={styles.container}>
        <Image src="/logo/logo-final.png" width={120} height={60} alt="Logo" />

        <div className={styles.imageContainer}>
          <ImageLinkResponsive
            href="/WhatWeDo"
            alt="whatwedo"
            desktop={whatwedoDeskstop}
            tablet={whatwedoMobile}
            mobile={whatwedoMobile}
          />

          <ImageLinkResponsive
            href="/MaintainAble"
            alt="maintainable"
            desktop={maintainableDesktop}
            tablet={maintainableMobile}
            mobile={maintainableMobile}
          />

          <ImageLinkResponsive
            href="/GetInTouch"
            alt="getintouch"
            desktop={getintouchDesktop}
            tablet={getintouchMobile}
            mobile={getintouchMobile}
          />
        </div>

        <div className={styles.moreBtn}>And more yet to come..</div>
      </div>
    </div>
  );
}
