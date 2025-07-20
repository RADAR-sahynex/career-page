import SearchSection from "@/components/Search/SearchSection";
import HeaderBar from "@/components/Header/Header";
import JobDetails from "@/components/JobDetail/JobDetail";
import JobPosting from "@/components/JobList/JobList";

export default function HomePage() {
  return (
    <main>
      <HeaderBar />
      <SearchSection />
      
      <div className="px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <JobPosting />
          </div>
          <div className="hidden lg:block w-full lg:w-1/2">
            <JobDetails />
          </div>
        </div>
      </div>
    </main>
  );
}
