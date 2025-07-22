
'use client';
import React, { useState } from 'react';
import { FileText, MessageCircle, Bell } from 'lucide-react';

export default function JobDetails() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Header */}
      <div className="bg-gray-50 p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome!</h1>
        <p className="text-gray-600">We're glad you're here.</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8 bg-white">
        {/* Welcome Message */}
        <div className="bg-white">
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Take a look around at the many exciting career opportunities we have available and apply today!
          </p>
        </div>

        {/* Collapsible Content */}
        {isExpanded && (
          <>
            {/* Can't find a job section */}
            <div className="bg-white">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Can't find a suitable job opening?
              </h2>
              
              <div className="space-y-6">
                {/* Drop off CV */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Drop off your CV/Resume
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Drop off your CV/Resume and a Recruiter will reach out with related career 
                        information that match your experience and expertise.
                      </p>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Upload Resume
                      </button>
                    </div>
                  </div>
                </div>

                {/* Job Alerts */}
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-2 rounded-lg">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Sign up for Job Alerts
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Create your account and then sign up for job alerts. When new jobs become 
                        available that meet your criteria, you'll be alerted right away!
                      </p>
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                        Create Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Mission */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <h2 className="text-xl font-semibold text-orange-600 mb-4">
                Curiosity is the Core of Innovation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Sahynex, curiosity is at the core of innovation. It fuels the most vital need inside us—the 
                need to progress. To be a Sahynex means standing up for Progress and going all in, fully 
                committing to our customers and their progress. As we grow, our curiosity opens new worlds, 
                new ways of thinking and solving problems. It helps us in our career and to find joy in our work. 
                What sparks your curiosity?
              </p>
            </div>
          </>
        )}

        {/* Read Less/More button */}
        <div className="text-center bg-white">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
} 