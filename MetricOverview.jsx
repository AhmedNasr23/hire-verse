import { Link } from 'react-router-dom';

const metrics = [
  { label: 'Spacing', color: 'text-red-500', value: 90 },
  { label: 'Structure', color: 'text-purple-500', value: 95 },
  { label: 'Confidence', color: 'text-green-500', value: 80 },
  { label: 'Social Skills', color: 'text-orange-500', value: 60 },
  { label: 'Hireability', color: 'text-blue-500', value: 30 },
];

export default function MetricOverview() {
  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6">
      {metrics.map(({ label, color, value }) => {
        const radius = 36;
        const circumference = 2 * Math.PI * radius;
        const progress = circumference * (1 - value / 100);

        return (
          <Link key={label} to={`/portal/${label}`}>
            <div className="flex flex-col items-center text-center">
              <svg width="100" height="100" className="mb-2">
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="#e5e7eb" // Tailwind gray-200
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={progress}
                  className={color + ' transition-all duration-500'}
                  strokeLinecap="round"
                />
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  className={`${color} font-bold text-lg`}
                >
                  {value}
                </text>
              </svg>
              <p className={`text-sm ${color} font-medium`}>{label}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
