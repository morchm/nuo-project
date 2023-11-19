import styles from "./bottomT.page.module.scss";
import Image from "next/image";

export default function BottomTitle(props: {
  titleText: string;
  logoColor: string;
}) {
  return (
    <>
      <p className={styles.bottomTitleDesktop}>{props.titleText}</p>
      <Image
        src={"/logo/logo-" + props.logoColor + ".png"}
        alt=""
        width={80}
        height={40}
        className={styles.bottomTitleMobile}
      />
    </>
  );
}
