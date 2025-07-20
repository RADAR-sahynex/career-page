import { FileText, MessageCircle, Bell, X, Globe, Briefcase, MapPin, Clock } from 'lucide-react';

type JobDetailsProps = {
  selectedJob?: any;
};

export default function JobDetails({ selectedJob }: JobDetailsProps) {
  // If a job is selected, show job posting details
  if (selectedJob) {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative bg-gray-50 p-6 border-b">
          <div className="pr-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedJob.title}
            </h1>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded border border-orange-500 hover:border-orange-600 transition-colors font-medium">
              Apply
            </button>
          </div>
        </div>

        {/* Job Details Grid */}
        <div className="p-6 bg-gray-50 border-b">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Globe className="w-5 h-5 mr-3 text-gray-500" />
                <span>{selectedJob.remote ? 'Fully Remote' : 'On-site'}</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-gray-500" />
                <span>{selectedJob.location}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Briefcase className="w-5 h-5 mr-3 text-gray-500" />
                <span>Full time</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-3 text-gray-500" />
                <span>{selectedJob.postedDate}</span>
              </div>
              
              <div className="flex items-center text-gray-700">
                <FileText className="w-5 h-5 mr-3 text-gray-500" />
                <span>{selectedJob.jobId}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Who We Are */}
          <div>
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              At Sahynex, we design, build, manage and modernize the mission-critical technology 
              systems that the world depends on every day. So why work at Sahynex? We are always 
              moving forward – always pushing ourselves to go further in our efforts to build a more 
              equitable, inclusive world for our employees, our customers and our communities.
            </p>
          </div>

          {/* The Role */}
          <div>
            <h2 className="text-xl font-semibold text-orange-600 mb-4">The Role</h2>
            <p className="text-gray-700 leading-relaxed">
              Every position at Sahynex offers a way forward to grow your career. We have training 
              and upskilling programs that you won't find anywhere else, including hands-on experience, 
              learning directly from experts, and the opportunity to advance your career.
            </p>
          </div>

          {/* Your Future */}
          <div>
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Your Future</h2>
            <p className="text-gray-700 leading-relaxed">
              Join us in shaping the future of technology. This role offers exciting challenges, 
              opportunities for growth, and the chance to work with cutting-edge technologies 
              while making a real impact on businesses and communities worldwide.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default welcome message when no job is selected
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome!</h1>
        <p className="text-gray-600">We're glad you're here.</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Welcome Message */}
        <div>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Take a look around at the many exciting career opportunities we have available and apply today!
          </p>
        </div>

        {/* Can't find a job section */}
        <div>
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

        {/* Read Less button */}
        <div className="text-center">
          <button className="text-orange-600 hover:text-orange-700 font-medium">
            Read Less
          </button>
        </div>
      </div>
    </div>
  );
}