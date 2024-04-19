import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './files/DesignUpload.css';

function DesignUpload({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false); // State to track upload success
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    // Reset upload success state when a new file is selected
    setUploadSuccess(false);
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      // Attempt to upload the file
      await onUpload(selectedFile);
      // If the upload is successful, set the success state to true
      setUploadSuccess(true);
      // Navigate to the next page after a slight delay to allow the user to see the success message
      
    } catch (error) {
      // Handle any errors during upload
      console.error('Upload failed:', error);
      // Optionally, you can set an error state here to display an error message
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
