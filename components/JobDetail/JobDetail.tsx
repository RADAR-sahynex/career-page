// components/JobDetail/JobDetail.tsx
'use client';
import { FileText, MessageCircle, Bell, X, Globe, Briefcase, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

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

type JobDetailsProps = {
  selectedJob?: JobType | null;
  onBack?: () => void;
};

export default function JobDetail({ selectedJob, onBack }: JobDetailsProps) {
  const [showMission, setShowMission] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false); // New state to control application form visibility

  // If no job is selected, don't display anything.
  if (!selectedJob) {
    return null; // Or return <></>;
  }

  // Conditionally render job details or welcome message
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Header Section for Job Details */}
      <div className="relative bg-gray-50 p-6 border-b">
        {/* X button for PC/laptop (hidden on small screens) */}
        {onBack && (
          <button
            onClick={onBack}
            className="hidden lg:block absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Back button for mobile (hidden on large screens) */}
        {onBack && !showApplicationForm && ( // Hide back button if application form is shown
          <button
            onClick={onBack}
            className="lg:hidden mb-4 flex items-center text-gray-600 hover:text-primary-red transition-colors font-secondary"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Jobs
          </button>
        )}

        <div className="pr-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 font-primary">
            {selectedJob.title}
          </h1>

          {/* Apply button - visible only if application form is not shown */}
          {!showApplicationForm && (
            <button
              onClick={() => setShowApplicationForm(true)}
              className="bg-primary-red hover:bg-primary-red text-white px-6 py-2 rounded border border-primary-red transition-colors font-medium font-secondary"
            >
              Apply
            </button>
          )}
        </div>
      </div>

      {/* Conditional Rendering: Job Details vs. Application Form */}
      {showApplicationForm ? (
        // Application Form Section
        <div className="p-6 space-y-6 bg-white">
          <h2 className="text-xl font-semibold text-primary-red mb-4 font-primary">Complete Your Application</h2>

          {/* Drop off CV card */}
          <div className="bg-blue-50 p-6 rounded-lg border border-primary-blue">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-blue p-2 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-primary">
                  Drop off your CV/Resume
                </h3>
                <p className="text-gray-600 mb-4 font-secondary">
                  Drop off your CV/Resume. We’ll review your submission and get in touch if your profile matches our requirements.
                </p>
                <button className="bg-primary-blue hover:bg-primary-blue text-white px-6 py-2 rounded-lg transition-colors font-medium font-secondary">
                  Upload Resume
                </button>
              </div>
            </div>
          </div>

          {/* Job Alerts card */}
          <div className="bg-green-50 p-6 rounded-lg border border-primary-green">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-green p-2 rounded-lg">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-primary">
                  Sign up for Job Alerts
                </h3>
                <p className="text-gray-600 mb-4 font-secondary">
                  Create your account and then sign up for job alerts. When new jobs become
                  available that meet your criteria, you'll be alerted right away!
                </p>
                <button className="bg-primary-green hover:bg-primary-green text-white px-6 py-2 rounded-lg transition-colors font-medium font-secondary">
                  Create Account
                </button>
              </div>
            </div>
          </div>

          {/* Back to Job Details button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setShowApplicationForm(false)}
              className="text-primary-red hover:text-red-700 font-medium font-secondary transition-colors duration-200 transform hover:scale-105"
            >
              Back to Job Details
            </button>
          </div>
        </div>
      ) : (
        // Original Job Details Section
        <>
          {/* Job Details Grid */}
          <div className="p-6 bg-gray-50 border-b">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Globe className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="font-secondary">{selectedJob.remote ? 'Fully Remote' : 'On-site'}</span>
                </div>

                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="font-secondary">{selectedJob.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Briefcase className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="font-secondary">Full time</span>
                </div>

                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="font-secondary">{selectedJob.postedDate}</span>
                </div>

                <div className="flex items-center text-gray-700">
                  <FileText className="w-5 h-5 mr-3 text-gray-500" />
                  <span className="font-secondary">{selectedJob.jobId}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description and Company Info */}
          <div className="p-6 space-y-6 bg-white">
            <div>
              <h2 className="text-xl font-semibold text-primary-red mb-4 font-primary">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed font-secondary">
                At Sahynex, we design, build, manage and modernize the mission-critical technology
                systems that the world depends on every day. So why work at Sahynex? We are always
                moving forward – always pushing ourselves to go further in our efforts to build a more
                equitable, inclusive world for our employees, our customers and our communities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary-red mb-4 font-primary">The Role</h2>
              <p className="text-gray-700 leading-relaxed font-secondary">
                {selectedJob.description || "Description not available. Every position at Sahynex offers a way forward to grow your career. We have training and upskilling programs that you won't find anywhere else, including hands-on experience, learning directly from experts, and the opportunity to advance your career."}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-primary-red mb-4 font-primary">Your Future</h2>
              <p className="text-gray-700 leading-relaxed font-secondary">
                Join us in shaping the future of technology. This role offers exciting challenges,
                opportunities for growth, and the chance to work with cutting-edge technologies
                while making a real impact on businesses and communities worldwide.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}