'use client';
import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastifyContainer = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        toast.dismiss();
      }
    };
    const handleWindowBlur = () => {
      toast.dismiss();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, []);
  return (
    <>
      <ToastContainer />
    </>
  );
};

export default ToastifyContainer;
