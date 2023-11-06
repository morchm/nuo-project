import styles from "./whatwedo.page.module.scss"

export default function WhatWeDo() {
    return(
        <section id={styles.whatwedoBackground}>
            <div className={styles.whatwedoContainer}>
                <div>header</div>
                <div>
                    <div>image</div>
                    <p>text</p>
                </div>

            </div>
        </section>
    )
}