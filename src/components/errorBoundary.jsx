import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Flower, AlertTriangle } from "lucide-react";
import loveLogo from "../assets/love-logo-2-2.png";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error details (optional: send to an error-tracking service)
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex flex-col items-center justify-center bg-red-50 text-center">
          <div className="max-w-md text-center">
            <AlertTriangle className="mx-auto w-24 h-24 mb-6 text-accent" />
            <h1 className="text-6xl font-bold text-red-600">
              Something went wrong.
            </h1>
            <p className="text-lg mt-4 text-gray-600">
              We apologize for the inconvenience. Our team has been notified.
              Please try again later.
            </p>
            <Link
              to="/"
              className="bg-accent text-primary px-6 py-3 rounded-full hover:bg-accent/80 transition-colors"
            >
              <Flower className="inline-block w-6 h-6 mr-2" />
              Go to Home
            </Link>
            <div className="mt-12">
              <img
                src={loveLogo}
                alt="Ewura Skin Care Logo"
                className="w-48 h-auto"
              />
            </div>
          </div>
        </div>
      );
    }

    // Render children if no error
    return this.props.children;
  }
}

export default ErrorBoundary;
