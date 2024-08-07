import Image from "next/image";
import styles from "./page.module.css";

import feralCat from "@/public/matt-seymour-mgLloBtUdvE-unsplash.jpg";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <section>
          <h1>About Us</h1>
          <h3>What is Friends of Feral Felines?</h3>
          <p>
            Friends of Feral Felines is a resource to help care for feral cats in the community.
          </p>
          <Image src={feralCat} width={160} height={160} alt="Picture of cat in foliage" />
        </section>
        <section>
          <h1>What Can Friends of Feral Felines Do For You?</h1>
          <ul>
            <Link href="/cat-care"><li>Get Tips On How To Care For Feral Cats</li></Link>
            <Link href="/community"><li>Connect With Other Feral Cat Caretakers</li></Link>
            <Link href="/resources"><li>Find Resources For Feral Cat Care</li></Link>
          </ul>
        </section>
        <div className={styles.footer}>
          <p>&copy;Friends Of Feral Felines</p>
          <ul className={styles.footerList}>
            <li className={styles.listItem}>Privacy Policy </li>
            <li className={styles.listItem}>Terms Of Service </li>
            <li className={styles.listItem}>Contact Us</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
