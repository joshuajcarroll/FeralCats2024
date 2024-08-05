import Image from "next/image";
import styles from "./page.module.css";
import catImage from "@/public/isolated-shot-ginger-kitten-sitting-front-white-looking-right.png"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Friends of Feral Felines</h1>
        <div className={styles.imageContainer}>
          <Image src={catImage} width={60} height={60} alt="Picture of cat"/>
        </div>
        
      </div>
    </main>
  );
}
