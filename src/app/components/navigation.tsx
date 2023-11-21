"use client";

import styles from "./navigation.page.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.navBar}>
      {/* Back to home */}
      <li className={styles.navBackBtn}>
        <Link href="/" className={styles.navBtn}>
          <Image
            src="/navigation/svg/back.svg"
            width={42}
            height={60}
            alt="back button"
          />
        </Link>
      </li>
      <menu className={styles.navMenu}>
        {/* Links til de andre sider */}
        <li>
          <Link href="/WhatWeDo" className={styles.navBtn}>
            <Image
              src="/navigation/nav-1.png"
              width={60}
              height={60}
              alt="what we do button"
            />
            {path === "/WhatWeDo" && (
              <ButtonUnderline src="/navigation/nav-1-where.png" />
            )}
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
            {path === "/MaintainAble" && (
              <ButtonUnderline src="/navigation/nav-2-where.png" />
            )}
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
            {path === "/GetInTouch" && (
              <ButtonUnderline src="/navigation/nav-3-where.png" />
            )}
          </Link>
        </li>
      </menu>
    </nav>
  );
}

function ButtonUnderline(props: { src: string }) {
  return (
    <Image
      src={props.src}
      width={60}
      height={15}
      alt="back"
      className={styles.navUnderline}
    />
  );
}
