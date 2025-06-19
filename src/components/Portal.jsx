import React from 'react';
import bg from '../assets/bg.jpeg';
import logo from '../assets/logo.png';

const interviews = [
  'Microsoft Interview',
  'Apple Interview',
  'HIREVERSE Interview',
  'Google Interview',
  'Riot Games Interview',
  'Meta Interview',
  'Netflix Interview',
  'Tesla Interview',
  'Amazon Interview',
  'SpaceX Interview',
  'ByteDance Interview',
  'OpenAI Interview',
];

const metrics = [
  { label: 'Spacing', color: 'text-red-600', ring: 'ring-red-400', value: 95 },
  {
    label: 'Structure',
    color: 'text-purple-600',
    ring: 'ring-purple-400',
    value: 95,
  },
  {
    label: 'Confidence',
    color: 'text-green-600',
    ring: 'ring-green-400',
    value: 95,
  },
  {
    label: 'Social Skills',
    color: 'text-orange-500',
    ring: 'ring-orange-300',
    value: 95,
  },
  {
    label: 'Hireability',
    color: 'text-blue-600',
    ring: 'ring-blue-400',
    value: 95,
  },
];

export default function Portal() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative bg-white rounded-xl shadow-2xl flex w-full max-w-[90rem] min-h-[40rem] p-12 gap-x-20 gap-y-16 overflow-hidden">
        {/* Title Background Bar */}

        {/* Sidebar */}
        <aside className="w-1/5 border-r border-gray-300 pr-4 bg-gray-50 overflow-y-auto max-h-[80vh] w-[12rem] custom-scrollbar relative z-10">
          <div className="mb-6 text-center pt-4">
            <img
              src={logo}
              alt="HIREVERSE Logo"
              className="w-20 h-20 mx-auto"
            />
          </div>

          <div className="pl-2">
            <ul className="space-y-2">
              {interviews.map((title, idx) => (
                <li
                  key={idx}
                  className={`px-3 py-2 rounded-md cursor-pointer ${
                    idx === 0
                      ? 'bg-gray-300 font-semibold text-gray-800'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {title}
                </li>
              ))}
            </ul>
            <div className="mt-3 pl-1">
              <button className="w-8 h-8 rounded-full border border-gray-400 text-xl leading-none text-gray-600 hover:bg-gray-100">
                +
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 relative z-10 pt-6">
          {/* Title */}
          {/* Title with large gray pill background */}
          <div className="w-full flex justify-center mb-12">
            <h2 className="bg-gray-200 text-3xl lg:text-4xl font-bold text-gray-800 px-10 py-5 rounded-full shadow-sm">
              Microsoft Interview
            </h2>
          </div>

          <p className="text-md text-gray-600 -mt-6 mb-10 text-2xl">
            <b>Date:</b> <span className="font-medium">5/1/2025</span>
          </p>

          <div className="flex flex-col lg:flex-row gap-x-20 gap-y-16 mt-20">
            {/* Metrics (Left) */}
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-x-1 gap-y-4">
                {metrics.map(({ label, color, ring, value }) => (
                  <div key={label} className="text-left">
                    <div
                      className={`w-14 h-14 rounded-full ring-4 ${ring} flex items-center justify-center`}
                    >
                      <span className={`text-sm font-bold ${color}`}>
                        {value}
                      </span>
                    </div>
                    <p className={`mt-2 text-sm ${color} font-medium`}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Feedback Button */}
              {/* <div className="flex justify-start mt-10">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-lg">
                  <span>Feedback</span>
                  <span className="text-xl">→</span>
                </button>
              </div> */}
            </div>

            {/* Video (Right) */}
            <div className="flex flex-col items-center justify-start">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/420x250"
                  alt="Interview Video"
                  className="w-[420px] h-[250px] object-cover rounded-md"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 bg-white bg-opacity-70 rounded-full text-xl text-gray-800 shadow">
                    ▶
                  </button>
                </div>
              </div>
              {/* Duration */}
              <p className="text-gray-700 text-lg mt-4">
                Duration: <span className="font-semibold">6:08</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
