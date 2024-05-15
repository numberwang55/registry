import PackageListItem from "../../components/PackageListItem";
import { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderedResults = searchResults.map((result) => {
    return <PackageListItem _package={result} key={result.name} />;
  });

  return (
    <div className="">
      <h1 className="text-2xl font-bold my-6 ml-6">Search Results</h1>
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  );
}
