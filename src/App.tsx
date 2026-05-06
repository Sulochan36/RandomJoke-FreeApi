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
      setJoke(data);
    } catch {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 px-4">

      <div className=" flex flex-col justify-center items-center w-full max-w-xl text-center">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          😂 Joke Machine
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          New jokes, one click at a time
        </p>

        {/* STATUS */}
        {error && (
          <p className="text-red-500 mb-4 text-sm">{error}</p>
        )}

        

        {/* CARD */}
        <JokeCard
          joke={joke}
          loading={loading}
          onCopy={handleCopy}
          onNext={getJoke}
        />

        {copied && (
          <p className="text-green-600 text-bold border-2 border-green-500 shadow-2xl mb-4 text-sm w-fit mt-4 px-3 py-1 rounded-2xl animate-pulse">
            Copied to clipboard 🎉
          </p>
        )}

      </div>
    </div>
  );
}

export default App;