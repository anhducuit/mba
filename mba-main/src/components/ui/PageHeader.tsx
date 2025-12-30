
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Array<{ label: string; path: string }>;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs = [] }) => {
  return (
    <div className="bg-mba-primary/5 py-10 md:py-16">
      <div className="container mx-auto">
        <h1 className="heading-xl mb-4 text-center bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent pb-2 leading-normal">{title}</h1>
        
        {breadcrumbs.length > 0 && (
          <nav className="flex justify-center items-center text-sm">
            <ol className="flex items-center space-x-1">
              <li>
                <Link to="/" className="text-mba-primary hover:text-mba-secondary">
                  Trang chủ
                </Link>
              </li>
              
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.path} className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-mba-secondary font-medium">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.path} className="text-mba-primary hover:text-mba-secondary">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
