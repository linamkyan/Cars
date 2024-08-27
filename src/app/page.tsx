import styles from "./page.module.css";
import Products from "@/app/products/page";

export default function Home() {
  return (
    <main className={styles.main}>
       <Products/>
    </main>
  );
}
