// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Bell, MessageSquare, Settings, User, Folder, DollarSign, Menu, X, Calendar, Briefcase, LogOut } from 'lucide-react';
import DashboardContent from './DashboardContent ';
import PortfolioContent from "./PortfolioContent";





export default function ArtistDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Dashboard');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return <DashboardContent />;
            case 'Portfolio':
                return <PortfolioContent />;
            case 'Messages':
                return <p>Your messages appear here.</p>;
            case 'Earnings':
                return <p>Your earnings details are displayed here.</p>;
            case 'Schedule':
                return <p>Your schedule is shown here.</p>;
            case 'Projects':
                return <p>Your projects are listed here.</p>;
            case 'Settings':
                return <p>Manage your settings here.</p>;
            default:
                return <p>Select a tab to see content.</p>;
        }
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-20 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out flex flex-col`}>
                <div className="p-6 flex-1">
                    <nav>
                        <ul className="space-y-2">
                            {[
                                { name: 'Dashboard', icon: <User size={18} /> },
                                { name: 'Portfolio', icon: <Folder size={18} /> },
                                { name: 'Messages', icon: <MessageSquare size={18} /> },
                                { name: 'Earnings', icon: <DollarSign size={18} /> },
                                { name: 'Schedule', icon: <Calendar size={18} /> },
                                { name: 'Projects', icon: <Briefcase size={18} /> },
                                { name: 'Settings', icon: <Settings size={18} /> }
                            ].map(tab => (
                                <li key={tab.name}>
                                    <button onClick={() => setActiveTab(tab.name)} className={`flex w-full items-center space-x-3 p-3 rounded-lg ${activeTab === tab.name ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                                        {tab.icon}
                                        <span>{tab.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="p-6">
                    <button className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-red-500 text-white hover:bg-red-600">
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm p-4 flex justify-between items-center w-full">
                    <button onClick={toggleSidebar} className="md:hidden p-2">
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <h1 className="text-xl font-bold">Artist Studio</h1>
                    <button className="p-2 relative">
                        <Bell size={24} />
                        <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
                    </button>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
