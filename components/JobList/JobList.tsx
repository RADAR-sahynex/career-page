'use client';
import React from 'react';
import { jobs } from '../../data/jobs'
import { Globe, MapPin, Clock } from 'lucide-react';

type JobListProps = {
  onJobSelect?: (job: any) => void;
};

export default function JobList({ onJobSelect }: JobListProps) {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col bg-white shadow-md sm:shadow-lg rounded-lg sm:rounded-xl divide-y divide-gray-200" style={{ backgroundColor: '#ffffff' }}>
      {/* Total jobs found */}
      <div className="p-4 sm:p-6 text-sm sm:text-base font-semibold text-gray-500 font-primary">
        {jobs.length} JOBS FOUND
      </div>

      {/* Job Cards */}
      {jobs.map((job, index) => (
        <div 
          key={index} 
          className="p-4 sm:p-6 bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200"
          onClick={() => onJobSelect && onJobSelect(job)}
        >
          {/* Title */}
          <h2 className="text-base sm:text-lg font-semibold underline text-gray-800 mb-3 sm:mb-4 hover:text-primary-red transition-colors font-primary">
            {job.title}
          </h2>

          {/* Remote Status & Location side-by-side */}
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
      ))}
    </div>
  );
}