import SearchBar from "@/components/Search/SearchBar";
import FilterPanel from "@/components/Search/FilterPanel";
import HeaderBar from "@/components/Header/Header";
export default function HomePage() {
  return (
    <main>
      <HeaderBar />
      <div className="px-6 mt-8">
        <SearchBar />
      </div>
      <div className="px-6">
        <FilterPanel />
      </div>
      {/* JobList would go here */}
    </main>
  );
}
