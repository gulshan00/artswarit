export default function DashboardContent() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome back, Alex!</h1>
      <p className="text-gray-600 mt-2">Here’s your activity overview.</p>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Total Earnings</h2>
          <p className="text-2xl font-bold text-green-600">$3,200</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">New Messages</h2>
          <p className="text-2xl font-bold text-blue-600">5</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <p className="text-2xl font-bold text-purple-600">2</p>
        </div>
      </div>
      
      {/* Recent Activities */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Recent Activities</h2>
        <ul className="mt-2 space-y-2">
          <li className="p-3 bg-white shadow-md rounded-lg">Uploaded new artwork</li>
          <li className="p-3 bg-white shadow-md rounded-lg">Received a new message from a client</li>
          <li className="p-3 bg-white shadow-md rounded-lg">Scheduled a new exhibition for next month</li>
        </ul>
      </div>
    </div>
  );
}
