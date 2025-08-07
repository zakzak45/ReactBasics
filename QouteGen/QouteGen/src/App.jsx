import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [quote, setQuote] = useState('')

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://zenquotes.io/api/random');
      // ZenQuotes returns an array, so we need to access the first element
      setQuote(response.data[0].name);
      setName(response.data[0].quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to load quote");
      setName("");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p><strong>Author:</strong> {name}</p>
          <p><strong>Quote:</strong> {quote}</p>
          <button onClick={fetchQuote}>Get New Quote</button>
        </>
      )}
    </div>
  )
}

export default App