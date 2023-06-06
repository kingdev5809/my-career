import { MultiSelect } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeDoteAction } from 'reduxToolkit/jobsSlice/JobsSlice';
import './DescribeJob.scss';
function DescribeJob() {
  const [inputChange, setInputChange] = useState(false);
  const [fileSelected, setFileSelected] = useState();
  var selectedFile = [];
  const inputRef = useRef();
  var dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 3, label: 'About the talant' },
        { id: 3, type: 'About the talant' },
      ]),
    );
  };

  const backPage = e => {
    e.preventDefault();
    dispatch(
      activeDoteAction([
        { id: 1, label: 'Title' },
        { id: 1, type: 'Title' },
      ]),
    );
  };
  const onClickFile = () => {
    inputRef.current.click();
  };
  useEffect(() => {
    if (fileSelected) {
      setInputChange(true);
      selectedFile.push(fileSelected.name);
      console.log(selectedFile);
    }
  }, [fileSelected, selectedFile]);
  return (
    <div className='describe_main'>
      <h2 style={{ marginBottom: '15px' }}>Describe the job</h2>
      <form onSubmit={handleSubmit}>
        <p>Describe the job</p>
        <textarea className='textArea' type='text' placeholder='Description' />
        <p>Upload the picture if </p>
        {!inputChange ? (
          <div className='inputFile' placeholder='Drag and drop or'>
            <p>
              Drag and drop or
              <span className='inpSpan' onClick={onClickFile}>
                Browse
              </span>
            </p>
            <input
              ref={inputRef}
              type='file'
              className='inputFileUpload'
              onChange={e => setFileSelected(e.target.files[0])}
            />
          </div>
        ) : (
          <MultiSelect
            value={selectedFile}
            data={selectedFile}
            searchable
            creatable
          />
        )}
        <div className='buttons'>
          <button className='backBtn' onClick={backPage}>
            Back
          </button>
          <button type='submit' className='nextBtn'>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default DescribeJob;
