import { Link } from 'gatsby';
import React from 'react';

const Tags = ({ tags }) => {
  return (
    <div className="flex">
      { tags.map((tag) => (
        <div className="mr-1 last:mr-0">
          <Link key={tag} to={`/blog/tag/${tag}`}>
            <div className="py-0.5 px-1 text-xs 
              border-accent text-accent
              hover:bg-accent hover:text-gray-300
              border rounded-md">
              {tag}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Tags;