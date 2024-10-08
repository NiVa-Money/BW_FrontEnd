// 'use client';
// import React, { useState } from 'react';

// const RatingComponent: React.FC = () => {
//   const [rating, setRating] = useState<number | null>(null);
//   const [comment, setComment] = useState('');

//   const handleRating = (value: number) => {
//     setRating(value);
//   };

//   const handleCommentChange = (
//     event: React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     setComment(event.target.value);
//   };

//   const handleSubmit = () => {
//     if (rating !== null) {
//       const mailtoLink = `mailto:support@botwot.io?subject=App%20Feedback&body=Rating:%20${rating}%0AComment:%20${encodeURIComponent(
//         comment
//       )}`;
//       window.location.href = mailtoLink;
//     } else {
//       alert('Please select a rating before submitting.');
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col justify-center items-left  ml-5 mt-20">
//         <h1 className="mt-5 text-5xl font-bold tracking-tighter text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
//           Rate Us !
//         </h1>
//         <h2 className="mt-4 text-xl text-[#AEB9E1] text-left max-md:max-w-full max-md:text-lg">
//           Your input is super important in helping us understand your needs
//           better,
//           <br />
//           so we can customize our services to suit you perfectly.
//         </h2>
//       </div>
//       <div className="flex justify-center space-x-4 mt-5 mb-4">
//         {[1, 2, 3, 4, 5].map((value) => (
//           <button
//             key={value}
//             className={`text-3xl ${
//               rating === value ? 'text-yellow-500' : 'text-[#AEB9E1]'
//             }`}
//             onClick={() => handleRating(value)}
//           >
//             {value === 1
//               ? '😡'
//               : value === 2
//               ? '😞'
//               : value === 3
//               ? '😐'
//               : value === 4
//               ? '😊'
//               : '😁'}
//           </button>
//         ))}

//       </div>
//       <textarea
//           className="w-[200px] justify-center p-4 border border-[#AEB9E1] bg-[#1E1935] rounded-lg text-white"
//           placeholder="Add a comment..."
//           value={comment}
//           onChange={handleCommentChange}
//         />
//         <button
//           className="flex justify-center text-xl font-medium text-gray-100 bg-[#3F2181] rounded-md"
//           onClick={handleSubmit}
//         >
//           Send now
//         </button>
//     </>
//   );
// };

// export default RatingComponent;

'use client';
import React, { useState } from 'react';

const RatingComponent: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');

  const handleRating = (value: number) => {
    setRating(value);
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    if (rating !== null) {
      const mailtoLink = `mailto:support@botwot.io?subject=App%20Feedback&body=Rating:%20${rating}%0AComment:%20${encodeURIComponent(
        comment
      )}`;
      window.location.href = mailtoLink;
    } else {
      alert('Please select a rating before submitting.');
    }
  };

  return (
    <div className="flex flex-col bg-[#0B031E] text-white">
      <div className="flex flex-col justify-center items-left  ml-5 mt-20">
        <h1 className="mt-5 text-5xl font-bold tracking-tighter text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Rate Us !
        </h1>
        <h2 className="mt-4 text-xl text-[#AEB9E1] text-left max-md:max-w-full max-md:text-lg">
          Your input is super important in helping us understand your needs
          better,
          <br />
          so we can customize our services to suit you perfectly.
        </h2>
      </div>
      <div className="mt-10 max-w-md px-4 justify-center items-center">
        <div className="flex justify-center space-x-4 mb-6">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`text-4xl ${
                rating === value ? 'text-yellow-500' : 'text-[#AEB9E1]'
              }`}
              onClick={() => handleRating(value)}
            >
              {value === 1
                ? '😡'
                : value === 2
                ? '😞'
                : value === 3
                ? '😐'
                : value === 4
                ? '😊'
                : '😁'}
            </button>
          ))}
        </div>
        <textarea
          className="w-full p-4 border border-[#AEB9E1] bg-[#1E1935] rounded-lg text-white mb-6"
          placeholder="Add a comment..."
          rows={4}
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          className="w-full py-3 text-xl font-medium text-white bg-[#3F2181] rounded-md hover:bg-[#4F2991] transition-colors"
          onClick={handleSubmit}
        >
          Send now
        </button>
      </div>
    </div>
  );
};

export default RatingComponent;
