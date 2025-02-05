import React, {useCallback, useState} from "react";
import Select from "react-select";
import {searchLocations} from "../services/weatherService";
import {Location} from "../types";

interface Props {
  onSelect: (location: Location) => void;
}

const SearchBar = ({onSelect}: Props) => {
  const [options, setOptions] = useState<{ value: Location; label: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(async (searchTerm: string) => {
      if (!searchTerm) return;
      setLoading(true);
      const locations = await searchLocations(searchTerm);
      setOptions(
        locations.map((loc: Location) => ({
          value: loc,
          label: `${loc.name}, ${loc.country}`,
        }))
      );
      setLoading(false);
    }, 300),
    []
  );

  const handleInputChange = (newValue: string) => {
    debouncedSearch(newValue);
  };

  return (
    <Select
      options={options}
      onInputChange={handleInputChange}
      onChange={(selected: any) => selected && onSelect(selected.value)}
      isLoading={loading}
      placeholder="Search by city..."
    />
  );
};

// Debounce utility function
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export default SearchBar;
