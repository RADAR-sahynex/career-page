import SearchBar from "@/components/Search/SearchBar";
import FilterPanel from "@/components/Search/FilterPanel";

export default function HomePage() {
  return (
    <main className="p-6">
      <SearchBar />
      <FilterPanel />
      {/* JobList would go here */}
    </main>
  );
}
