import { Clock, DollarSign, Route } from 'lucide-react';

export default function Features() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Real-Time Schedules
                        </h3>
                        <p className="text-gray-600">
                            Real-time bus schedules to help you plan accurately.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <DollarSign className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Fare Estimates
                        </h3>
                        <p className="text-gray-600">
                            Get estimated ticket prices before you travel.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white rounded-xl shadow-md p-8 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Route className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Optimized Routing
                        </h3>
                        <p className="text-gray-600">
                            Smart routing to reduce travel time and improve efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}