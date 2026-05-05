import type { Joke } from "../types/joke";

interface Props {
    joke: Joke;
    onCopy: () => void;
}

const JokeCard = ({ joke, onCopy }: Props) => {
    return (
        <div className="card">
            <p className="joke-text">"{joke.content}"</p>

            {(joke.categories ?? []).length > 0 && (
                <div className="tags">
                    {joke.categories.map((cat, index) => (
                        <span key={index}>{cat}</span>
                    ))}
                </div>
            )}

            <div className="actions">
                <button onClick={onCopy}>📋 Copy</button>
            </div>
        </div>
    );
};

export default JokeCard;