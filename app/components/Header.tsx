"use client";

import Image from "next/image";

import styles from "./Header.module.css";
import catImage from "@/public/cat_icon.png";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
        <Link href="/" >
          <Image src={catImage} width={40} height={40} alt="Outline of cat" priority />
          Friends of Feral Felines
        </Link>
        </header>
    )
}