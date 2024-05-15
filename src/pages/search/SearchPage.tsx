import { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;
  console.log(searchResults);

  return <div>Search Page</div>;
}
