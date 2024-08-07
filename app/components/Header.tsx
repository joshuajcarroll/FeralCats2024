"use client";

import Image from "next/image";

import styles from "./Header.module.css";
import catImage from "@/public/cat_icon.png";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>Friends of Feral Felines</h1>
        <div>
          <Image src={catImage} width={40} height={40} alt="Outline of cat" />
        </div>
        </header>
    )
}