import Link from 'next/link';
import { User, Settings, History, LogOut } from 'lucide-react';

export default function PassengerNavbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">GoBus</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/passenger" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Dashboard
            </Link>
            <Link href="/passenger#bookings" className="text-gray-700 hover:text-blue-600 font-medium transition">
              My Bookings
            </Link>
            <Link href="/passenger#profile" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Profile
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <User className="w-4 h-4" />
              <span>Welcome, John</span>
            </div>

            {/* Dropdown Menu */}
            <div className="relative group">
              <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
                <User className="w-5 h-5 text-gray-600" />
                <span className="hidden md:inline text-gray-700 font-medium">Account</span>
              </button>

              {/* Dropdown Content */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/passenger#profile" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition">
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <Link href="/passenger#bookings" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition">
                    <History className="w-4 h-4" />
                    My Bookings
                  </Link>
                  <Link href="/passenger#settings" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition">
                    <Settings className="w-4 h-4" />
                    Settings
                  </Link>
                  <hr className="my-2 border-gray-200" />
                  <button className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 transition w-full text-left">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}