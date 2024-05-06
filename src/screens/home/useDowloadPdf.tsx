import {useState} from 'react';

export const useDownloadPdf = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (cvPath, fileName) => {
    setLoading(true);
    try {
      const response = await fetch(cvPath); // Fetch the CV file
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create an anchor element to trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading CV:', error);
    } finally {
      setLoading(false);
    }
  };

  return [loading, handleDownload];
};
