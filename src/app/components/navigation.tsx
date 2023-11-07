import styles from "./navigation.page.module.scss";
import Link from "next/link";
import Image from "next/image";

export function Navigation() {
  return (
    <nav>
      <menu>
        {/* Back to home */}
        <li>
          <Link href="/" className={styles.navBtn}>
            <Image
              src="/navigation/svg/back.svg"
              width={42}
              height={60}
              alt="back button"
            />
          </Link>
        </li>

        {/* Links til de andre sider */}
        <li>
          <Link href="/WhatWeDo" className={styles.navBtn}>
            <Image
              src="/navigation/nav-1.png"
              width={60}
              height={60}
              alt="what we do button"
            />
          </Link>
        </li>

        <li>
          <Link href="/MaintainAble" className={styles.navBtn}>
            <Image
              src="/navigation/nav-2.png"
              width={60}
              height={60}
              alt="maintain able button"
            />
          </Link>
        </li>

        <li>
          <Link href="/GetInTouch" className={styles.navBtn}>
            <Image
              src="/navigation/nav-3.png"
              width={60}
              height={60}
              alt="get in touch button"
            />
          </Link>
        </li>
      </menu>
    </nav>
  );
}
