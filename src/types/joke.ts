export interface Joke {
    id: number;
    content: string;
    categories: string[];
}

export interface JokeApiResponse {
    statusCode: number;
    data: Joke;
    message: string;
    success: boolean;
}