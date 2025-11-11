import axios from "axios";
import type { Character } from "../types/character";

export const fetchPerson = async (id: number) => {
  const response = await axios.get<Character>(
    `https://swapi.dev/api/people/${id}`
  );
  return response.data;
};
