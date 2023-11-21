"use client";
import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import { useForm, Resolver } from "react-hook-form";

import Image from "next/image";
import styles from "../GetInTouch/getintouch.page.module.scss";
import modalStyle from "./modal.module.scss";

import { yupResolver } from "@hookform/resolvers/yup"; //Valider data via skema
import * as yup from "yup";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const schema = yup.object().shape({
    name: yup.string().required("Navn er påkrævet").min(2),
    email: yup.string().email().required("Email er påkrævet"),
    subject: yup.string().required("Emne er påkrævet"),
    textarea: yup.string().required("Besked er påkrævet"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
    {/* ---- CONTACTS ---- */}
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

      {/* ---- MODAL ---- */}
      <ReactModal className={modalStyle.modal} isOpen={isOpen}>
        <button
          className={modalStyle.modalCloseBtn}
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Send en besked</h1>
          <div className={modalStyle.modalInputContainer}>
            <div className={modalStyle.modalInput}>
              <label>Navn</label>
              <input
                type="text"
                placeholder="Indtast navn"
                {...register("name")}
              />
              <h6>{errors.name?.message}</h6>
            </div>
            <div className={modalStyle.modalInput}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Indtast email"
                {...register("email")}
              />
              <h6>{errors.email?.message}</h6>
            </div>

            <div className={modalStyle.modalInput}>
              <label>Emne</label>
              <input
                type="text"
                placeholder="Indtast emne"
                {...register("subject")}
              />
              <h6>{errors.subject?.message}</h6>
            </div>

            <div className={modalStyle.modalInput}>
              <label>Besked</label>
              <textarea
                placeholder="Indtast besked"
                rows="10"
                {...register("textarea")}
              />
              <h6>{errors.textarea?.message}</h6>
            </div>
            <input type="submit" className={modalStyle.submitBtn}/>
          </div>
        </form>
      </ReactModal>
    </>
  );
}