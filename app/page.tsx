import SearchBar from "@/components/Search/SearchBar";
import FilterPanel from "@/components/Search/FilterPanel";
import HeaderBar from "@/components/Header/Header";
export default function HomePage() {
  return (
    <main className="p-6">
      <HeaderBar />
      <div className="mt-8">
        <SearchBar />
      </div>
      <FilterPanel />
      {/* JobList would go here */}
    </main>
  );
}
