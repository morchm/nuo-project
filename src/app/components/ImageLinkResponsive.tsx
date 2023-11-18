import React from "react";
import Link from "next/link";
import style from "./ImageLinkResponsive.module.scss";
import Image, { StaticImageData } from "next/image";

function ImageLinkResponsive(props: {
  href: string;
  alt: string;
  desktop: StaticImageData;
  tablet?: StaticImageData;
  mobile?: StaticImageData;
  className?: string;
}) {
  return (
    <Link
      href={props.href}
      className={`${props.className} ${style.adaptiveLink__link}`}
    >
      <div
        className={`${style.adaptiveLink__image_container__desktop} ${style.adaptiveLink__image_container}`}
      >
        <Image
          src={props.desktop}
          alt={props.alt}
          className={style.adaptiveLink__image}
        />
      </div>

      {/* Create a tablet image if the input exists in props */}
      {props.tablet && (
        <div
          className={`${style.adaptiveLink__image_container__tablet} ${style.adaptiveLink__image_container}`}
        >
          <Image
            src={props.tablet}
            alt={props.alt}
            className={style.adaptiveLink__image}
          />
        </div>
      )}
      
      {/* Create a mobile image if the input exists in props */}
      {props.mobile && (
        <div
          className={`${style.adaptiveLink__image_container__mobile} ${style.adaptiveLink__image_container}`}
        >
          <Image
            src={props.mobile}
            alt={props.alt}
            className={style.adaptiveLink__image}
          />
        </div>
      )}

    </Link>
  );
}

export default ImageLinkResponsive;
