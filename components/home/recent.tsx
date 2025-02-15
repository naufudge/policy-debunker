import React from 'react';

const Recent = () => {
  const posts = [
    {
      id: 1,
      title: "How to reduce the divorce rate?",
      time: "4 min",
      week: "1/4 of 6th week"
    }
  ];

  return (
    <div className="p-10">
      <h1 className="font-poppins text-[1.5rem] text-white">Recent</h1>
      <div className="mt-6 space-y-4">
        {posts.map(post => (
          <div key={post.id} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="font-poppins text-xl font-semibold">{post.title}</h2>
            <div className="mt-2 text-gray-600">
              <p>{post.time}</p>
              <p>{post.week}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;