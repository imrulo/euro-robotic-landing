import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-amber-400 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
          <p className="text-xl text-slate-300 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-6 h-6 mr-3" />
            Back to Home
          </Link>
          
          <div className="text-slate-400 text-sm">
            <p>Looking for the EuroRobotic.com domain sale?</p>
            <p>Return to our main page to make an offer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
