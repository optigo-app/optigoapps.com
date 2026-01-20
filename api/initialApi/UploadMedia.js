import axios from 'axios';

export const UploadMedia = async ({ attachments, uniqueNo }) => {
  const isLocal = ["localhost", "nzen"]?.includes(
    window.location.hostname
  );

  const formData = new FormData();

  attachments?.forEach((item) => {
    if (item.file) {
      formData.append('fileType', item.file); // File
    } else if (item.url) {
      formData.append('urls', item.url); // Optional: URL
    }
  });

  formData.append('folderName', "applicant-resumes");
  formData.append('uKey', "orail25TNBVD0LO2UFPRZ4MD_demo");
  formData.append('uniqueNo', uniqueNo);

  let APIURL = isLocal ? 'http://newnextjs.web/api/upload' : 'https://livenx.optigoapps.com/api/upload';

  try {
    const response = await axios.post(APIURL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('File upload failed:', error);
    throw error;
  }
};