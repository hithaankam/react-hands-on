import { useState } from "react";
type Synonym ={
  word:string;
  score:number;
};
import { fetchSynonyms } from "../api/fetchSynonyms";
export const useGetSynonyms = () => {
const [synonyms, setSynonyms] = useState<Synonym[]>([]);
const [isLoading, setIsLoading] = useState(false);
const getSynonyms = (word: string) =>{
    setIsLoading(true);

    return fetchSynonyms(word).then(setSynonyms).then(() =>setIsLoading(false) );

}
return {isLoading, synonyms, getSynonyms};
};