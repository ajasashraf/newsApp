import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import Card from "../Card/Card";
import { json } from "react-router-dom";

const API_KEY = "pjcAWyAdnmYc1Le8js0Z6UyesqoPDX3x";
const POPULAR_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";

const Home = () => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error,setError]=useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${POPULAR_URL}+${API_KEY}`);
        const json = await res.json();
        setNewsData(json.results);
      } catch(err) {
        setError(err.message) || "Error, could not fetch Data"
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <Container>
        <h1>Data Loading</h1>
      </Container>
    );
  }
  if(error){
    return(
      <Container>
        <h1>{error}</h1>
      </Container>
    )
  }

  return (
    <Container>
      {newsData?.map((news) => (
        <Card key={news.id} news={news} />
      ))}
    </Container>
  );
};

export default Home;
