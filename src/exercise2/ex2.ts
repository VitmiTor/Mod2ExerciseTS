import { getJokes } from "./apiCaller/jokeApi";
import { Joke } from "./class/Joke";
import { jokeSortPunchline } from "./utilities/jokeSort";

const writePunchline = (arrayJokes: Joke[]): void => {
  jokeSortPunchline(arrayJokes);
  console.log(arrayJokes[2].showInfo());
};

const main = async (): Promise<void> => {
  const arrayJokes = await getJokes();
  writePunchline(arrayJokes);
};

main();
