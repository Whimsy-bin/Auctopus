import React, { useState } from "react";
import Layout from "@components/common/Layout";
import ItemsList from "@components/common/ItemsList";
import ResultFilter from "@components/result/ResultFilter";
import SearchBar from "@components/search/SearchBar";
import Image1 from "@/assets/detail/dummy.svg";
import Image2 from "@/assets/main/airpodsImg.jpg";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const liveAuction: IAuction[] = [
  {
    img: Image1,
    title: "검색결과",
    price: 450000,
    viewer: 55,
    time: "2023-01-27 12:00",
  },
  {
    img: Image2,
    title: "검색결과2",
    price: 410000,
    viewer: 15,
    time: "2023-01-27 12:05",
  },
];

export default function ResultPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("keyword"); // test
  const [live, setLive] = useState<"live" | "nonLive">("live");

  const changeLive = () => {
    setLive((prev) => (prev === "live" ? "nonLive" : "live"));
  };
  return (
    <Layout leftIcon="none">
      <SearchBar />
      <ResultText>
        &lsquo;<b>{query}</b>&rsquo;에 대한 검색결과입니다.
      </ResultText>
      <ResultFilter live={live} onClick={changeLive} />
      <ItemsList liveAuction={liveAuction} isLive={live === "live"} />
    </Layout>
  );
}

const ResultText = styled.span`
  font-size: 1.8rem;
`;
