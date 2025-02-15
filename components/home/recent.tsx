import React from 'react';

const Recent = () => {
  const posts = [
    {
      id: 1,
      title: "How to reduce the divorce rate?",
      user: "4 min",
      date: "13 February 2025"
    },
    {
      id: 2,
      title: "How to reduce the divorce rate?",
      user: "4 min",
      date: "13 February 2025"
    },
  ];

  return (
    <div className="px-6 p-6">
      <h1 className="font-poppins text-[1.5rem] text-white">Recent</h1>
      <div className="mt-6 space-y-6">
        {posts.map(post => (
          <div key={post.id} className="p-6 bg-[#717171] bg-opacity-50 rounded-xl text-[12px]">
            <h2 className="font-poppins text-">{post.title}</h2>
            <div className="mt-2 text-gray-600">
              <div className='flex gap-3 text-white'>
                <div className='h-10 w-10 bg-[#3E4EA5] bg-opacity-60 rounded-full flex place-items-center justify-center'>
                  AA
                </div>
                <div className='flex flex-col'>
                  <p>{post.user}</p>
                  <p>{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;