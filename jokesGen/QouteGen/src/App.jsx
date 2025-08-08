import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteBox() {
  const [joke, setJoke] = useState("");
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://dad-jokes.p.rapidapi.com/random/joke',
      headers: {
        'x-rapidapi-key': 'c6866bbb4dmshe325accf21e925dp1b54aajsn45e59a8ea677',
        'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const jokeData = response.data.body[0]; // The API returns an array with one joke object
      setSetup(jokeData.setup);
      setPunchline(jokeData.punchline);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div id="quote-box">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p id="text">{setup}</p>
          <p id="punchline">{punchline}</p>
        </>
      )}
      <button id="new-quote" onClick={fetchJoke}>
        Get New Joke
      </button>
    </div>
  );
}

export default QuoteBox;