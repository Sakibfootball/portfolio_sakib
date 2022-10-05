import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className=" bg-zinc-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Portfolio de Sakib</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      {/* experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Contact me */}
    </div>
  );
};

export default Home;
