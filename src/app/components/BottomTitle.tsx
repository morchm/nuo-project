import styles from "./bottomT.page.module.scss";
import Image from "next/image";

export default function BottomTitle(props: {
  titleText: string;
}) {
  return (
    <div>
      <p className={styles.bottomTitleDesktop}>{props.titleText}</p>
    </div>
  );
}
