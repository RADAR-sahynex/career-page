'use client';
import React from 'react';
import { jobs } from '../../data/jobs'
import { Globe, MapPin, Clock } from 'lucide-react';

export default function JobDetails() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col bg-white shadow rounded-md divide-y divide-gray-200">
      {/* Total jobs found */}
      <div className="p-3 text-md font-semibold text-gray-500 ml-3">
        {jobs.length} JOBS FOUND
      </div>

      {/* Job Cards */}
      {jobs.map((job, index) => (
        <div key={index} className="p-6">
          {/* Title */}
          <h2 className="text-base font-semibold underline text-gray-800 mb-2">
            {job.title}
          </h2>

          {/* Remote Status & Location side-by-side */}
          <div className="flex flex-wrap gap-6 items-center text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <span>{job.remote ? 'Fully Remote' : 'On-site'}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span>{job.location}</span>
            </div>
          </div>

          {/* Posted Date */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Clock className="w-4 h-4 text-gray-500" />
            <span>{job.postedDate}</span>
          </div>

          {/* Job Code */}
          <div className="text-gray-500 text-sm font-normal">{job.jobId}</div>
        </div>
      ))}
    </div>
  );
}