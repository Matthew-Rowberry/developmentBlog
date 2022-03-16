import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Container from "../lib/components/Container";
import Footer from "../lib/components/Footer";
import Header from "../lib/components/Header";
import Section from "../lib/components/Section";
import { getAllPosts } from "../lib/data/posts";
import styles from "../styles/Home.module.css";

const Home: NextPage = (props) => {
  return (
    <div
      //@ts-ignore
      style={{ backgroundColor: props.color }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <Section>
          <Container>
            <h1>Inspire</h1>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const posts = getAllPosts();

  const res = await axios.get(
    "https://random-data-api.com/api/color/random_color"
  );

  return { props: { color: res.data.hex_value } };
};

export default Home;
