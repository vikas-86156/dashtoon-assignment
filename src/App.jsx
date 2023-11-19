import React, { useState } from 'react';
import './App.css';
import Gallery from './gallery';
import MyComic from './my-comic';
import AddImage from './add-image';

function App() {
  const [add, setAdd] = useState(false);
  const [slides, setSlides] = useState([]);
  const [selected, setSelected] = useState([]);

  const [apiBusy, setApiBusy] = useState(false);
  const [pending, setPending] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <div className="heading-container">
      <h2 className='heading'>Make My Comic</h2>
      </div>
     
      <Gallery slides={slides} setSelected={setSelected} selected={selected} />
      <br />
      <div className='buttons' >
        <button className='image-generator' onClick={() => setAdd(true)} style={{ marginRight: '1%' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width = "12" height = "12" className="w-6 h-6" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="bt1">Image Generator</span>
        </button>
        <button className='image-generator' onClick={() => setAdd(false)} disabled={apiBusy}> <span className="bt2">My Comic</span></button>
      </div>
      <div style={{ marginTop: '10px', marginBottom: '10px' }}>
        {add ? <AddImage
          setSlides={setSlides}
          slides={slides}
          apiBusy={apiBusy}
          setApiBusy={setApiBusy}
          pending={pending}
          setPending={setPending}
          imageURL={imageURL}
          setImageURL={setImageURL}
          description={description}
          setDescription={setDescription}

        /> : <MyComic selected={selected} setSelected={setSelected} />}
      </div>
    </div>
  );
}

export default App;
