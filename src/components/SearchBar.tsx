import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState} from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholderValue?: string;
}

export default function SearchBar({ onSearch, placeholderValue }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value.trim());
  };

  return (
    <form onSubmit={handleSearch} className="relative w-11/12 max-w-xl">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholderValue}
        className="w-full pl-12 pr-4 py-3 rounded-md bg-white text-black placeholder-gray-600 shadow-lg"
      />
    </form>
  );
}
