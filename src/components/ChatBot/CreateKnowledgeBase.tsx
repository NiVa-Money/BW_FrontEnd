'use client';

import { createKnowledgebaseAction } from '@/redux/actions/knowledgebaseActions';
import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/configureStore';

const CreateKnowledgeBase: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [docName, setDocName] = useState('');
  const [docType] = useState('pdf');
  const userIdRedux = useSelector(
    (state: RootState) => state.root?.userData?.user_id
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file: any = event.target.files?.[0];

    setDocName(file?.name ?? '');
    if (
      file &&
      file.size <= 10 * 1024 * 1024 &&
      file.type === 'application/pdf'
    ) {
      setSelectedFile(file);
    } else {
      alert('File must be a PDF and less than 10MB');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (
      file &&
      file.size <= 10 * 1024 * 1024 &&
      file.type === 'application/pdf'
    ) {
      setSelectedFile(file);
    } else {
      alert('File must be a PDF and less than 10MB');
    }
  };

  const handleUpload = async () => {
    if (selectedFile && docName && docType && userIdRedux) {
      const formData = new FormData();
      formData.append('docName', docName);
      formData.append('docType', docType);
      // formData.append('docId', docId);
      formData.append('userId', userIdRedux);
      formData.append('file', selectedFile);

      formData.forEach((value, key) => {
        console.log(key, value);
      });

      dispatch(createKnowledgebaseAction(formData));
      router.push('/knowledgebase');
    } else {
      alert('Please select a file');
    }
  };

  return (
    <div className="flex flex-col content-start self-stretch bg-[#0B031E]">
      <div className="flex gap-5 px-5 w-full text-3xl font-bold leading-6 text-white max-md:flex-wrap max-md:max-w-full">
        <div className="flex-1 pt-10 max-md:max-w-full">Knowledge Base</div>
      </div>
      <div
        className="flex justify-center items-center px-16 py-5 mt-12 w-full text-xl rounded-xl border border-solid border-zinc-600 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center max-w-full w-[432px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fdc897821e0f9ef3a45cd43a45c0a2646c6fb3a66d51fb8aa86e7b8052ea1ee?"
            className="aspect-square w-[50px]"
            alt="Upload Icon"
          />
          <div className="mt-2.5 text-white">Select a file or drag here</div>
          <div className="mt-2.5 text-base text-zinc-400">
            File accepted: PDFs, max: 10MB
          </div>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="justify-center items-center self-stretch px-8 py-4 mt-5 text-gray-100 whitespace-nowrap text-center bg-indigo-900 rounded-[99px] max-md:px-5 max-md:max-w-full cursor-pointer"
          >
            {selectedFile ? selectedFile.name : 'Upload'}
          </label>
          <button
            className="justify-center items-center self-stretch px-8 py-4 mt-5 text-gray-100 whitespace-nowrap text-center bg-indigo-900 rounded-[99px] max-md:px-5 max-md:max-w-full cursor-pointer"
            onClick={handleUpload}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateKnowledgeBase;
