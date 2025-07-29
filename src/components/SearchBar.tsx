import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function SearchBar() {
  return (
    <div className="relative w-11/12 max-w-xl">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        placeholder="Search by title, actor, or genre..."
        className="w-full pl-12 pr-4 py-3 rounded-md bg-white text-black placeholder-gray-600 shadow-lg"
      />
    </div>
  );
}
