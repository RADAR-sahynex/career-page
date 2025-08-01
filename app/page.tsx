"use client";
import { useState } from "react";
import SearchSection from "@/components/Search/SearchSection";
import HeaderBar from "@/components/Header/Header";
import JobDetails from "@/components/JobDetail/JobDetail";
import JobPosting from "@/components/JobList/JobList";
import Footer from "@/components/Footer";



{/*
export const metadata = {

  
  // ... other metadata properties like title, description
  title: 'Your Website Title',
  description: 'A description of your website.',

  // This is the important part
  metadataBase: new URL('https://your-domain.com'),
};
*/}


// Define a type for your job object for better type safety
type JobType = {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  postedDate: string;
  jobId: string;
  description: string;
};

export default function HomePage() {
  const [selectedJob, setSelectedJob] = useState<JobType | null>(null);

  const handleBack = () => {
    setSelectedJob(null);
  };

  return (
    <main>
      <HeaderBar />
      <SearchSection />
      
      <div className="px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className={`w-full lg:w-1/2 ${selectedJob ? 'hidden lg:block' : 'block'}`}>
            <JobPosting onJobSelect={setSelectedJob} />
          </div>
          <div className={`w-full lg:w-1/2 ${selectedJob ? 'block' : 'hidden lg:block'}`}>
            <JobDetails selectedJob={selectedJob} onBack={handleBack} />
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}