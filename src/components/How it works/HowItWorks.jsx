import React from "react";

export default function HowItWorks() {
  return (
    <section className="py-20 overflow-hidden bg-white dark:bg-gray-800 mb-6">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center -mx-5">
            <div className="w-full lg:w-1/2 px-5 mb-20 lg:mb-0">
              <div className="max-w-md">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  How it Works
                </span>
                <h2 className="mt-12 mb-10 text-5xl font-extrabold leading-tight text-gray-800 dark:text-gray-200">
                Find Your Perfect Match, Seamlessly
                </h2>
                <p className="mb-16 text-lg text-gray-600 dark:text-gray-400">
                Join our community today and start your journey toward lifelong happiness!
                </p>
                <a
                  className="inline-block px-12 py-4 text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition duration-200"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-5">
              <ul>
                <li className="flex pb-10 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-blue-200/50 dark:bg-blue-600/30 text-lg font-bold rounded-full text-blue-600 dark:text-blue-300">
                      1
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-300">
                      Create Your Account
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      Sign up quickly and easily to access our full range of
                      features.
                    </p>
                  </div>
                </li>
                <li className="flex pb-10 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-blue-200/50 dark:bg-blue-600/30 text-lg font-bold rounded-full text-blue-600 dark:text-blue-300">
                      2
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-300">
                      Personalize Your Experience
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      Tailor tools and settings to fit your needs and
                      preferences.
                    </p>
                  </div>
                </li>
                <li className="flex pb-10 border-b border-gray-200 dark:border-gray-700">
                  <div className="mr-8">
                    <span className="flex justify-center items-center w-14 h-14 bg-blue-200/50 dark:bg-blue-600/30 text-lg font-bold rounded-full text-blue-600 dark:text-blue-300">
                      3
                    </span>
                  </div>
                  <div className="max-w-xs">
                    <h3 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-300">
                      Collaborate with Your Team
                    </h3>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      Seamlessly work together, sharing insights and tools for
                      better productivity.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
