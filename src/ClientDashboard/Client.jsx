// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import FindArtist from './FindArtist';
import MyProject from './MyProject';
import Message from './Message';
import Payment from './Payment';
import { Bell, MessageSquare, User, Folder, DollarSign, Menu, X, LogOut } from 'lucide-react';

export default function ClientDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Find Artists');

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };
    const handleLogout = () => {
        window.location.href = '/login';
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Find Artists':
                return <FindArtist />;
            case 'My Projects':
                return <MyProject />;
            case 'Messages':
                return <Message />;
            case 'Payments':
                return <Payment />;
            default:
                return <p>Select a tab to see content.</p>;
        }
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-20 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out flex flex-col`}>
                {/* Close button on small screens */}
                <div className="md:hidden flex justify-between p-4">
                    <div> <h1 className='text-xl font-bold text-purple-700'>Artswarit</h1></div>
                    <div>
                        <button onClick={toggleSidebar}>
                            <X size={24} />
                        </button>
                    </div>

                </div>

                <div className="p-6 flex-1 overflow-y-auto">
                    <nav>
                        <ul className="space-y-2">
                            {[
                                { name: 'Find Artists', icon: <User size={18} /> },
                                { name: 'My Projects', icon: <Folder size={18} /> },
                                { name: 'Messages', icon: <MessageSquare size={18} /> },
                                { name: 'Payments', icon: <DollarSign size={18} /> },
                            ].map(tab => (
                                <li key={tab.name}>
                                    <button
                                        onClick={() => handleTabClick(tab.name)}
                                        className={`flex w-full items-center space-x-3 p-3 rounded-lg ${activeTab === tab.name
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                            : 'hover:bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        {tab.icon}
                                        <span>{tab.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="p-6">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-red-500 text-white hover:bg-red-600"
                    >
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
                    <h1 className="text-xl font-bold text-purple-700">Client Dashboard</h1>
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



