import SearchSection from "@/components/Search/SearchSection";
import HeaderBar from "@/components/Header/Header";
import JobDetails from "@/components/JobDetail/JobDetail";

export default function HomePage() {
  return (
    <main>
      <HeaderBar />
      <SearchSection />
      
      <div className="px-6 py-8">
        <JobDetails />
      </div>
    </main>
  );
}
