import type { JokeApiResponse } from "../types/joke";

const API_URL = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random";

export const fetchRandomJoke = async () => {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error("Failed to fetch joke");
    }

    const data: JokeApiResponse = await res.json();
    return data.data;
};