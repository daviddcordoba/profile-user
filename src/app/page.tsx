
import { Profile } from "@/components/Profile";
import styles from "./page.module.css";
import AboutMe from "@/components/AboutMe";
import Interests from "@/components/Interests";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className={styles.main}>
      <header className={styles.mainContainer}>
            <Profile/>
      </header>

      <main>
        <AboutMe/>
      </main>

      <footer>
        <ContactForm/>
      </footer>
      
    </div>
  );
}


