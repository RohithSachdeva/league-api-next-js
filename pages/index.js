import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ champions }) {
  return <div></div>;
}

export async function getServerSideProps(context) {
  const champions = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/11.12.1/data/en_US/champion.json"
  ).then((res) => res.json());
  return {
    props: {
      champions,
    },
  };
}
