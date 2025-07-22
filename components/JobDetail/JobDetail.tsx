import { FileText, MessageCircle, Bell, X, Globe, Briefcase, MapPin, Clock, ArrowLeft } from 'lucide-react';

type JobDetailsProps = {
  selectedJob?: any;
  onBack?: () => void;
};

export default function JobDetails({ selectedJob, onBack }: JobDetailsProps) {
  // If a job is selected, show job posting details
  if (selectedJob) {
    return (
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="relative bg-gray-50 p-6 border-b">
          {/* Back button for mobile */}
          {onBack && (
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
            
            <button className="bg-primary-red hover:bg-primary-blue text-white px-6 py-2 rounded border border-primary-red hover:border-primary-blue transition-colors font-medium font-secondary">
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

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Who We Are */}
          <div>
            <h2 className="text-xl font-semibold text-primary-red mb-4 font-primary">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed font-secondary">
              At Sahynex, we design, build, manage and modernize the mission-critical technology 
              systems that the world depends on every day. So why work at Sahynex? We are always 
              moving forward – always pushing ourselves to go further in our efforts to build a more 
              equitable, inclusive world for our employees, our customers and our communities.
            </p>
          </div>

          {/* The Role */}
          <div>
            <h2 className="text-xl font-semibold text-primary-red mb-4 font-primary">The Role</h2>
            <p className="text-gray-700 leading-relaxed font-secondary">
              Every position at Sahynex offers a way forward to grow your career. We have training 
              and upskilling programs that you won't find anywhere else, including hands-on experience, 
              learning directly from experts, and the opportunity to advance your career.
            </p>
          </div>

          {/* Your Future */}
          <div>
            <h2 className="text-xl font-semibold text-primary-red mb-4 font-primary">Your Future</h2>
            <p className="text-gray-700 leading-relaxed font-secondary">
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2 font-primary">Welcome!</h1>
        <p className="text-gray-600 font-secondary">We're glad you're here.</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Welcome Message */}
        <div>
          <p className="text-gray-700 leading-relaxed text-lg mb-6 font-secondary">
            Take a look around at the many exciting career opportunities we have available and apply today!
          </p>
        </div>

        {/* Can't find a job section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 font-primary">
            Can't find a suitable job opening?
          </h2>
          
          <div className="space-y-6">
            {/* Drop off CV */}
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
                    Drop off your CV/Resume and a Recruiter will reach out with related career 
                    information that match your experience and expertise.
                  </p>
                  <button className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-primary-red transition-colors font-medium font-secondary">
                    Upload Resume
                  </button>
                </div>
              </div>
            </div>

            {/* Job Alerts */}
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
                  <button className="bg-primary-green text-white px-6 py-2 rounded-lg hover:bg-primary-red transition-colors font-medium font-secondary">
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Mission */}
        <div className="bg-red-50 p-6 rounded-lg border border-primary-red">
          <h2 className="text-xl font-semibold text-primary-red mb-4 font-primary">
            Curiosity is the Core of Innovation
          </h2>
          <p className="text-gray-700 leading-relaxed font-secondary">
            At Sahynex, curiosity is at the core of innovation. It fuels the most vital need inside us—the 
            need to progress. To be a Sahynex means standing up for Progress and going all in, fully 
            committing to our customers and their progress. As we grow, our curiosity opens new worlds, 
            new ways of thinking and solving problems. It helps us in our career and to find joy in our work. 
            What sparks your curiosity?
          </p>
        </div>

        {/* Read Less button */}
        <div className="text-center">
          <button className="text-primary-red hover:text-primary-blue font-medium font-secondary">
            Read Less
          </button>
        </div>
      </div>
    </div>
  );
}