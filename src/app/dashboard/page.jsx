"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

function Dashboard() {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const result = await res.json();
  //     setData(result);
  //     setIsLoading(false);
  //     console.log(result);
  //   }

  //   getData();
  // }, []);

  const session = useSession();

  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/posts`,
    fetcher
  );

  return <div className={styles.container}>Dashboard</div>;
}

export default Dashboard;
