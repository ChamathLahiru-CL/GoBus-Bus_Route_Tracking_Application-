'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Search, Edit, Trash2, Bus, User } from 'lucide-react';

interface BusData {
    id: number;
    busNumber: string;
    driverName: string;
    driverContact: string;
    capacity: number;
    status: 'active' | 'maintenance' | 'inactive';
    route: string;
    lastService: string;
}

export default function BusManagement() {
    const [buses, setBuses] = useState<BusData[]>([
        { id: 1, busNumber: 'B-234', driverName: 'John Silva', driverContact: '0771234567', capacity: 50, status: 'active', route: 'Route 15', lastService: '2026-01-10' },
        { id: 2, busNumber: 'B-112', driverName: 'Michael Perera', driverContact: '0772345678', capacity: 45, status: 'active', route: 'Route 8', lastService: '2026-01-12' },
        { id: 3, busNumber: 'B-456', driverName: 'Kasun Fernando', driverContact: '0773456789', capacity: 55, status: 'maintenance', route: 'Route 3', lastService: '2026-01-05' },
        { id: 4, busNumber: 'B-789', driverName: 'Saman Kumar', driverContact: '0774567890', capacity: 50, status: 'active', route: 'Route 12', lastService: '2026-01-15' },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [newBus, setNewBus] = useState<Partial<BusData>>({
        busNumber: '',
        driverName: '',
        driverContact: '',
        capacity: 50,
        status: 'active',
        route: '',
        lastService: ''
    });

    const handleAddBus = () => {
        if (newBus.busNumber && newBus.driverName) {
            const bus: BusData = {
                id: buses.length + 1,
                busNumber: newBus.busNumber || '',
                driverName: newBus.driverName || '',
                driverContact: newBus.driverContact || '',
                capacity: newBus.capacity || 50,
                status: newBus.status || 'active',
                route: newBus.route || '',
                lastService: newBus.lastService || new Date().toISOString().split('T')[0]
            };
            setBuses([...buses, bus]);
            setShowAddModal(false);
            setNewBus({
                busNumber: '',
                driverName: '',
                driverContact: '',
                capacity: 50,
                status: 'active',
                route: '',
                lastService: ''
            });
        }
    };

    const handleDeleteBus = (id: number) => {
        if (confirm('Are you sure you want to delete this bus?')) {
            setBuses(buses.filter(bus => bus.id !== id));
        }
    };

    const filteredBuses = buses.filter(bus =>
        bus.busNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.driverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.route.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/depot">
                                <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                    <ArrowLeft size={24} />
                                </button>
                            </Link>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Bus Management</h1>
                                <p className="text-gray-600 mt-1">Manage buses and assign drivers</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                        >
                            <Plus size={20} />
                            Add New Bus
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by bus number, driver, or route..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Bus List */}
                <div className="grid grid-cols-1 gap-6">
                    {filteredBuses.map((bus) => (
                        <div key={bus.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6 flex-1">
                                    <div className="bg-blue-100 p-4 rounded-lg">
                                        <Bus className="text-blue-600" size={32} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1">
                                        <div>
                                            <p className="text-sm text-gray-600">Bus Number</p>
                                            <p className="text-lg font-bold text-gray-900">{bus.busNumber}</p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-600">Driver</p>
                                            <p className="text-lg font-semibold text-gray-900">{bus.driverName}</p>
                                            <p className="text-sm text-gray-500">{bus.driverContact}</p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-600">Route & Capacity</p>
                                            <p className="text-lg font-semibold text-gray-900">{bus.route}</p>
                                            <p className="text-sm text-gray-500">{bus.capacity} seats</p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-600">Status</p>
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${bus.status === 'active' ? 'bg-green-100 text-green-800' :
                                                    bus.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-gray-100 text-gray-800'
                                                }`}>
                                                {bus.status.charAt(0).toUpperCase() + bus.status.slice(1)}
                                            </span>
                                            <p className="text-sm text-gray-500 mt-1">Service: {bus.lastService}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                                        <Edit size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteBus(bus.id)}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Add Bus Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Bus</h2>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Bus Number</label>
                                    <input
                                        type="text"
                                        value={newBus.busNumber}
                                        onChange={(e) => setNewBus({ ...newBus, busNumber: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="B-XXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
                                    <input
                                        type="number"
                                        value={newBus.capacity}
                                        onChange={(e) => setNewBus({ ...newBus, capacity: parseInt(e.target.value) })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Driver Name</label>
                                    <input
                                        type="text"
                                        value={newBus.driverName}
                                        onChange={(e) => setNewBus({ ...newBus, driverName: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Driver name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Driver Contact</label>
                                    <input
                                        type="text"
                                        value={newBus.driverContact}
                                        onChange={(e) => setNewBus({ ...newBus, driverContact: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="07XXXXXXXX"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Route</label>
                                    <input
                                        type="text"
                                        value={newBus.route}
                                        onChange={(e) => setNewBus({ ...newBus, route: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Route 15"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                    <select
                                        value={newBus.status}
                                        onChange={(e) => setNewBus({ ...newBus, status: e.target.value as 'active' | 'maintenance' | 'inactive' })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="active">Active</option>
                                        <option value="maintenance">Maintenance</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Service Date</label>
                                <input
                                    type="date"
                                    value={newBus.lastService}
                                    onChange={(e) => setNewBus({ ...newBus, lastService: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <button
                                onClick={handleAddBus}
                                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Add Bus
                            </button>
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
