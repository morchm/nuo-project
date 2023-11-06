import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <section id={styles.background}>
      <div className={styles.container}>
        <Image src="/logo/logo-final.png" width={100} height={40} alt="Logo" />


        <div className={styles.imageContainer}>
          <Link href="/WhatWeDo" className={styles.links}>
            <Image
              src="/images/front-what-we-do.png"
              width={230}
              height={500}
              alt="What we do site"
            />
          </Link>

          <Link href="/MaintainAble" className={styles.links}>
            <Image 
              src="/images/front-maintainable.png"
              width={230}
              height={500}
              alt="Maintainable site"
            />
          </Link>

          <Link href="/GetInTouch" className={styles.links}>
            <Image
              src="/images/front-get-in-touch.png"
              width={230}
              height={500}
              alt="Get in touch site"
            />
          </Link>
        </div>


        <div className={styles.moreBtn}>And more yet to come..</div>
      </div>
    </section>
  );
}
