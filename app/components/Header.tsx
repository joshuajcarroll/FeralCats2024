"use client";

import Image from "next/image";

import styles from "./Header.module.css";
import catImage from "@/public/cat_icon.png";
import Link from "next/link";
import NavLink from "./main-header.tsx/nav-link";

export default function Header() {
    return (
        <header className={styles.header}>
        <Link className={styles.logo} href="/" >
          <Image src={catImage} width={40} height={40} alt="Outline of cat" priority />
          Friends of Feral Felines
        </Link>

        <nav className={styles.nav}>
                    <ul>
                        <li>
                           <NavLink href="/cat-care">Cat Care</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Community</NavLink>
                        </li>
                        <li>
                            <NavLink href="/resources">Resources</NavLink>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}