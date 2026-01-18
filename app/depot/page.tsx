'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Bus,
    Route,
    Calendar,
    Users,
    PlusCircle,
    Clock,
    MapPin,
    Activity
} from 'lucide-react';

export default function DepotDashboard() {
    const [stats] = useState({
        totalBuses: 45,
        activeBuses: 38,
        totalRoutes: 12,
        todayBookings: 342,
        driversOnDuty: 35
    });

    const [recentActivity] = useState([
        { id: 1, type: 'bus', message: 'Bus #B-234 assigned to Route 15', time: '10 mins ago' },
        { id: 2, type: 'booking', message: '25 new bookings for Route 8', time: '25 mins ago' },
        { id: 3, type: 'driver', message: 'Driver John assigned to Bus #B-112', time: '1 hour ago' },
        { id: 4, type: 'route', message: 'Route 3 timetable updated', time: '2 hours ago' }
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Depot Management</h1>
                            <p className="text-gray-600 mt-1">Manage buses, routes, and operations</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                                <PlusCircle size={20} />
                                Quick Add
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Buses</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalBuses}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Bus className="text-blue-600" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Active Buses</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.activeBuses}</p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-lg">
                                <Activity className="text-green-600" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Total Routes</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalRoutes}</p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <Route className="text-purple-600" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Today Bookings</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.todayBookings}</p>
                            </div>
                            <div className="bg-orange-100 p-3 rounded-lg">
                                <Users className="text-orange-600" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm">Drivers on Duty</p>
                                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.driversOnDuty}</p>
                            </div>
                            <div className="bg-indigo-100 p-3 rounded-lg">
                                <Users className="text-indigo-600" size={24} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Link href="/depot/bus-management">
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-t-4 border-blue-500">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-100 p-4 rounded-lg">
                                    <Bus className="text-blue-600" size={32} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Bus Management</h3>
                                    <p className="text-gray-600 text-sm">Manage buses & drivers</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="/depot/route-management">
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-t-4 border-green-500">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 p-4 rounded-lg">
                                    <MapPin className="text-green-600" size={32} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Route Management</h3>
                                    <p className="text-gray-600 text-sm">Assign buses to routes</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="/depot/timetable">
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-t-4 border-purple-500">
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-100 p-4 rounded-lg">
                                    <Clock className="text-purple-600" size={32} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Timetable</h3>
                                    <p className="text-gray-600 text-sm">Manage schedules</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link href="/depot/bookings">
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer border-t-4 border-orange-500">
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 p-4 rounded-lg">
                                    <Calendar className="text-orange-600" size={32} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900">Bookings</h3>
                                    <p className="text-gray-600 text-sm">View seat bookings</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                                <div className={`p-2 rounded-lg ${activity.type === 'bus' ? 'bg-blue-100' :
                                        activity.type === 'booking' ? 'bg-orange-100' :
                                            activity.type === 'driver' ? 'bg-green-100' :
                                                'bg-purple-100'
                                    }`}>
                                    {activity.type === 'bus' && <Bus className="text-blue-600" size={20} />}
                                    {activity.type === 'booking' && <Users className="text-orange-600" size={20} />}
                                    {activity.type === 'driver' && <Users className="text-green-600" size={20} />}
                                    {activity.type === 'route' && <MapPin className="text-purple-600" size={20} />}
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-900">{activity.message}</p>
                                    <p className="text-sm text-gray-500">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
