import bg from '../assets/bg.jpeg';
import interviewImage from '../assets/interview.avif';
import logo from '../assets/logo.png';
import { Outlet } from 'react-router-dom';

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

export default function PortalLayout() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative bg-white rounded-xl shadow-2xl flex w-full max-w-[90rem] min-h-[40rem] p-12 gap-x-20 gap-y-16 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[12rem] border-r border-gray-300 pr-4 bg-gray-50 overflow-y-auto max-h-[80vh] custom-scrollbar relative z-10">
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

        {/* Main Content Area */}
        <div className="flex-1 relative z-10 pt-6">
          {/* Title */}
          <div className="w-full flex justify-center mb-12">
            <h2 className="bg-gray-200 text-3xl lg:text-4xl font-bold text-gray-800 px-10 py-5 rounded-full shadow-sm">
              Microsoft Interview
            </h2>
          </div>

          <p className="text-md text-gray-600 -mt-6 mb-10 text-2xl">
            <b>Date:</b> <span className="font-medium">5/1/2025</span>
          </p>

          <div className="flex flex-col lg:flex-row gap-x-20 gap-y-16">
            {/* Left = Route Outlet */}
            <div style={{ marginTop: 40 }} className="flex-1 min-w-0">
              <Outlet />
            </div>

            {/* Right = Video */}
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="relative">
                <img
                  src={interviewImage}
                  alt="Interview Video"
                  className="w-full max-w-[420px] h-[250px] object-cover rounded-md"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 bg-white bg-opacity-70 rounded-full text-xl text-gray-800 shadow">
                    ▶
                  </button>
                </div>
              </div>
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
