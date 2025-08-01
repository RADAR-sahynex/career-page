// components/JobList/JobList.tsx
'use client';
import React from 'react';
import { jobs } from '../../data/jobs'; // Adjust path if necessary
import Job from '../JobDetail/Job';     // Import the individual Job card component

// Define a type for your job structure for type safety
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

type JobListProps = {
  onJobSelect?: (job: JobType) => void;
};

export default function JobList({ onJobSelect }: JobListProps) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col bg-white shadow-md sm:shadow-lg rounded-lg sm:rounded-xl divide-y divide-gray-200" style={{ backgroundColor: '#ffffff' }}>
      {/* Total jobs found display */}
      <div className="p-4 sm:p-6 text-sm sm:text-base font-semibold text-gray-500 font-primary">
        {jobs.length} JOBS FOUND
      </div>

      {/* Map through jobs data and render each as a Job card */}
      {jobs.map((job) => (
        <Job 
          key={job.id} // Essential for list performance and stability
          job={job} 
          onJobSelect={onJobSelect || (() => {})} // Pass the click handler down to the Job card
        />
      ))}
    </div>
  );
}