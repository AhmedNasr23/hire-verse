import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import bg from '../assets/bg.jpeg';
import interviewImage from '../assets/interview.avif';
import logo from '../assets/logo.png';

export default function PortalLayout() {
  const [interviews, setInterviews] = useState([
    'Microsoft Interview',
    'Apple Interview',
    'HIREVERSE Interview',
    'Google Interview',
    'Riot Games Interview',
    'Meta Interview',
  ]);
  const [selectedTitle, setSelectedTitle] = useState(interviews[0]);

  const handleAddInterview = () => {
    const newTitle = prompt('Enter a new interview title:');
    if (newTitle && newTitle.trim() !== '') {
      const trimmedTitle = newTitle.trim();
      setInterviews((prev) => [...prev, trimmedTitle]);
      setSelectedTitle(trimmedTitle);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative bg-white rounded-xl shadow-2xl flex w-full max-w-[90rem] min-h-[40rem] flex-col overflow-hidden">
        
        {/* Title bar */}
        <div className="w-full bg-gray-200 py-6 rounded-b-xl flex justify-center items-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center">
            {selectedTitle}
          </h2>
        </div>

        {/* Main layout: sidebar + content */}
        <div className="flex flex-1 p-12 gap-x-20 gap-y-16">
          
        {/* Sidebar */}
<aside className="w-[12rem] border-r border-gray-300 bg-gray-50 overflow-y-auto max-h-[80vh] custom-scrollbar relative z-10 pt-8 px-4">
  
 <div className="h-3" />


  {/* List of interviews */}
  <ul className="space-y-2 mb-10">
    {interviews.map((title, idx) => (
      <li
        key={idx}
        onClick={() => setSelectedTitle(title)}
        className={`py-2 px-4 text-center rounded-md cursor-pointer transition ${
          selectedTitle === title
            ? 'bg-gray-300 font-semibold text-gray-800'
            : 'text-gray-600 hover:bg-gray-200'
        }`}
      >
        {title}
      </li>
    ))}
  </ul>

  {/* Add button */}
  <div className="flex justify-center mt-6">
    <button
      onClick={handleAddInterview}
      className="w-10 h-10 rounded-full border border-gray-400 text-2xl leading-none text-gray-600 hover:bg-gray-100"
    >
      +
    </button>
  </div>
</aside>


          {/* Main content area */}
          <div className="flex-1 relative z-10 pt-6">
            <p className="text-md text-gray-600 -mt-6 mb-10 text-2xl">
              <b>Date:</b> <span className="font-medium">5/1/2025</span>
            </p>

            <div className="flex flex-col lg:flex-row gap-x-20 gap-y-16">
              
              {/* Left: dynamic content */}
              <div style={{ marginTop: 40 }} className="flex-1 min-w-0">
                <Outlet />
              </div>

              {/* Right: image/video */}
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

        {/* Floating HIREVERSE + Logo bottom-right */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          <span
            className="font-extrabold tracking-wide"
            style={{ color: '#00d9ff', fontSize: '2.25rem' }} // text-4xl
          >
            &lt;//HIREVERSE//&gt;
          </span>
          <div
            className="w-16 h-16 rounded-full border-4 flex items-center justify-center"
            style={{ borderColor: '#00d9ff' }}
          >
            <img
              src={logo}
              alt="HIREVERSE Logo"
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
