import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState()
  const saveImage = () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'stvzpsmo');
    data.append('cloud_name', 'dwo49uopx');

    axios.post('https://api.cloudinary.com/v1_1/dwo49uopx/image/upload', data)
      .then(response => {
        // Handle success, e.g., update state or show a success message
        console.log(response.data.secure_url);
        setImage(response.data.secure_url);


      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
      <button onClick={saveImage}>Upload</button>
      <img src={image} alt="" />
    </div>
  );
};

export default App;
