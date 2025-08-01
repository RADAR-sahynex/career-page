// components/JobDetail/Job.tsx
'use client';
import React from 'react';
import { Globe, MapPin, Clock } from 'lucide-react';

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

type JobProps = {
  job: JobType;
  onJobSelect: (job: JobType) => void;
};

export default function Job({ job, onJobSelect }: JobProps) {
  return (
    <div
      key={job.id} 
      className="p-4 sm:p-6 bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200"
      onClick={() => onJobSelect(job)} // Passes the job object when clicked
    >
      {/* Job Title */}
      <h2 className="text-base sm:text-lg font-semibold underline text-gray-800 mb-3 sm:mb-4 hover:text-primary-red transition-colors font-primary">
        {job.title}
      </h2>

      {/* Remote Status & Location */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 items-start sm:items-center text-sm text-gray-600 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <span className="font-secondary">{job.remote ? 'Fully Remote' : 'On-site'}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <span className="font-secondary">{job.location}</span>
        </div>
      </div>

      {/* Posted Date */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 sm:mb-4">
        <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
        <span className="font-secondary">{job.postedDate}</span>
      </div>

      {/* Job Code */}
      <div className="text-gray-500 text-xs sm:text-sm font-normal font-secondary">{job.jobId}</div>
    </div>
  );
}