import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './files/DesignUpload.css';

function DesignUpload({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setUploadSuccess(false);
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      await onUpload(selectedFile);
      setUploadSuccess(true);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="design-upload-container">
      <p className="upload-instructions">
        Your creativity has the power to inspire! Please upload your designs and let the world see the beauty through your eyes.
        We are thrilled to provide a platform where your art can shine.
      </p>

      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadSuccess && <p className="upload-success-message">File uploaded successfully!</p>}
    </div>
  );
}

export default DesignUpload;
