// import React from 'react';
// import Modal from 'react-modal';

// interface ExportModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   exportResponse: { success: boolean; url: string } | null;
// }

// const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, exportResponse }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       className="fixed inset-0 flex items-center justify-center"
//       overlayClassName="fixed inset-0 bg-black bg-opacity-75"
//     >
//       <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-lg w-full">
//         <h2 className="text-2xl font-bold mb-4">Export Bot Profile</h2>
//         {exportResponse && exportResponse.success ? (
//           <div>
//             <p className="mb-2">Your bot has been successfully exported. You can access it at:</p>
//             <a 
//               href={exportResponse.url} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="text-blue-400 hover:text-blue-300 break-all"
//             >
//               {exportResponse.url}
//             </a>
//           </div>
//         ) : (
//           <p className="text-red-400">Failed to export bot profile.</p>
//         )}
//         <button 
//           onClick={onClose} 
//           className="mt-6 px-4 py-2 bg-[#0B031E] text-white rounded-md"
//         >
//           Close
//         </button>
//       </div>
//     </Modal>
//   );
// };

// export default ExportModal;


import React from 'react';
import Modal from 'react-modal';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  exportResponse: { success: boolean; url: string } | null;
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, exportResponse }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
    >
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-xl max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Export Bot Profile</h2>
        {exportResponse && exportResponse.success ? (
          <div>
            <p className="mb-2">Your bot has been successfully exported. Include the following script in your HTML:</p>
            <pre className="bg-gray-900 p-2 rounded whitespace-pre-wrap break-words">
              <code>{`<script src="${exportResponse.url}"></script>`}</code>
            </pre>
          </div>
        ) : (
          <p className="text-red-400">Failed to export bot profile.</p>
        )}
        <button 
          onClick={onClose} 
          className="mt-6 px-4 py-2 bg-[#0B031E] text-white rounded-md"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ExportModal;
