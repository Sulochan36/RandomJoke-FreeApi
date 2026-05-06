import type { Joke } from "../types/joke";

interface Props {
    joke: Joke | null;
    loading: boolean;
    onCopy: () => void;
    onNext: () => void;
}

const JokeCard = ({ joke, loading, onCopy, onNext }: Props) => {
    return (
        <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-8 transition">

            {/* cartoon bubble decoration */}
            <div className="absolute -top-6 -left-6 text-4xl">💬</div>
            <div className="absolute -bottom-6 -right-6 text-4xl">😂</div>

            {/* CONTENT */}
            {loading ? (
                <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
                    <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
                </div>
            ) : (
                <>
                    <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                        “{joke?.content}”
                    </p>

                    {/* categories */}
                    {(joke?.categories ?? []).length > 0 && (
                        <div className="flex justify-center gap-2 mt-4 flex-wrap">
                            {joke?.categories?.map((cat, i) => (
                                <span
                                    key={i}
                                    className="bg-yellow-200 text-yellow-800 text-xs px-3 py-1 rounded-full"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>
                    )}
                </>
            )}

            {/* ACTIONS */}
            <div className="flex justify-center gap-3 mt-6">

                <button
                    onClick={onCopy}
                    className="px-4 py-2 text-sm bg-white border rounded-full shadow-sm hover:shadow-md hover:scale-105 transition"
                >
                    📋 Copy
                </button>

                <button
                    onClick={onNext}
                    className="px-5 py-2 text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-md hover:scale-105 transition"
                >
                    😂 Next Joke
                </button>

            </div>
        </div>
    );
};

export default JokeCard;