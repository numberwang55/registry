import type { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";

interface PackageListItemProps {
  _package: PackageSummary;
}

export default function PackageListItem({ _package }: PackageListItemProps) {
  const renderedKeywords = _package.keywords?.map((keyword) => {
    return (
      <div
        key={keyword}
        className="border py-0.5 px-1 text-xs bg-slate-200 rounded"
      >
        {keyword}
      </div>
    );
  });

  return (
    <div className="border p-4 rounded flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <Link to={`/packages/${_package.name}`}>{_package.name}</Link>
        <p className="text-sm text-gray-500">{_package.description}</p>
        <div className="flex gap-1">{renderedKeywords}</div>
      </div>
      <div className="mr-6">
        <Link
          to={`/packages/${_package.name}`}
          className="py-2 px-3 rounded bg-black text-white text-lg"
        >View</Link>
      </div>
    </div>
  );
}
