"use client";
import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { useState } from "react";
import Image from "next/image";
import styles from "../GetInTouch/getintouch.page.module.scss";
import modalStyle from "./modal.module.scss";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.contactContainer}>
        <figure onClick={() => setIsOpen(true)} className={styles.contactBtn}>
          <Image
            src="/images/whatwedo-small.png"
            width={120}
            height={120}
            alt="Contact "
          />
          <figcaption>It@coolish.com</figcaption>
        </figure>

        <figure onClick={() => setIsOpen(true)} className={styles.contactBtn}>
          <Image
            src="/images/maintainable-small.png"
            width={120}
            height={120}
            alt="Contact "
          />
          <figcaption>pr@coolish.com</figcaption>
        </figure>

        <figure onClick={() => setIsOpen(true)} className={styles.contactBtn}>
          <Image
            src="/images/getintouch-small.png"
            width={120}
            height={120}
            alt="Contact "
          />
          <figcaption>mn@coolish.com</figcaption>
        </figure>
      </div>

      <ReactModal className={modalStyle.modal} isOpen={isOpen}>
        <h1>Content</h1>
        <div className={modalStyle.modalInputContainer}>
          <div className={modalStyle.modalInput}>
            <label>Navn</label>
            <input type="text" name="navn" placeholder="Indtast navn" />
          </div>
          <div className={modalStyle.modalInput}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Indtast email" />
          </div>

          <div className={modalStyle.modalInput}>
            <label>Emne</label>
            <input type="text" name="about" placeholder="Indtast emne" />
          </div>


          <div className={modalStyle.modalInput}>
            <label>Besked</label>
            <textarea name="message" cols="30" rows="10" placeholder="Indtast besked"/>
          </div>
        </div>

        <button onClick={() => setIsOpen(false)}>Close modal</button>
      </ReactModal>
    </>
  );
}
