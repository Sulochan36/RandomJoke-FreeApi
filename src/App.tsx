import { useEffect, useState } from "react";
import { fetchRandomJoke } from "./services/jokeService";
import type { Joke } from "./types/joke";
import JokeCard from "./components/JokeCard";

function App() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const getJoke = async () => {
    try {
      setLoading(true);
      setError("");
      setCopied(false);

      const data = await fetchRandomJoke();
      console.log(data);
      setJoke(data);
    } catch (err) {
      setError("Failed to load joke 😅");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!joke) return;

    await navigator.clipboard.writeText(joke.content);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="app">
      <h1>😂 Random Joke Viewer</h1>

      <button onClick={getJoke} disabled={loading}>
        {loading ? "Loading..." : "Next Joke"}
      </button>

      {error && <p className="error">{error}</p>}

      {copied && <p className="success">Copied to clipboard!</p>}

      {joke && !loading && (
        <JokeCard joke={joke} onCopy={handleCopy} />
      )}
    </div>
  );
}

export default App;