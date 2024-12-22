import React, { createContext, useContext, useState } from 'react';
import { ImagePreview } from '../components/common/ImagePreview';

const ImagePreviewContext = createContext();

export const useImagePreview = () => {
  const context = useContext(ImagePreviewContext);
  if (!context) {
    throw new Error('useImagePreview must be used within an ImagePreviewProvider');
  }
  return context;
};

export const ImagePreviewProvider = ({ children }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const showPreview = (src, alt) => {
    setPreviewImage({ src, alt });
  };

  const hidePreview = () => {
    setPreviewImage(null);
  };

  return (
    <ImagePreviewContext.Provider value={{ showPreview, hidePreview }}>
      {children}
      {previewImage && (
        <ImagePreview
          src={previewImage.src}
          alt={previewImage.alt}
          onClose={hidePreview}
        />
      )}
    </ImagePreviewContext.Provider>
  );
};
