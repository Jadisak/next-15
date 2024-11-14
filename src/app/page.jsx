import Image from "next/image";
import styles from "./page.module.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import FuturedSection from "./components/FuturedSection";
import BookSection from "./components/BookSection";
import ScrollSection from "./components/ScrollSection";
import AuthorSection from "./components/AuthorSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Main>
        <Nav />
        <HeroSection />
        <FuturedSection />
        <section className="py-lg-4"></section>
        <BookSection />
        <ScrollSection />
        <AuthorSection />
        <ReviewsSection />
        <ContactSection />
      </Main>
    </>
  );
}
