import { useState } from "react";
import {
  IoMdAdd,
  IoMdCheckmarkCircle,
  IoMdDocument,
  IoMdTrash,
} from "react-icons/io";
import { LuUploadCloud } from "react-icons/lu";
/* eslint-disable react/prop-types */
export const Form4 = ({ form, setForm }) => {
  console.log("documents:", form.document);
  const [upload] = useState(100);

  return (
    <div className='formInputBody'>
      <h4 className='textTitle2'>Farm Registration</h4>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Farm Name</label>
          <input
            className='inputElem'
            type='text'
            placeholder='Enter farm name'
            value={form.farmDetails.name}
            onChange={(e) =>
              setForm({
                ...form,
                farmDetails: { ...form.farmDetails, name: e.target.value },
              })
            }
          />
        </div>
      </div>
      <div className='flex-container'>
        <div className='input-body'>
          <label>Farm Coordinates (Optional)</label>
          <div className='flex-container'>
            <input
              className='inputElem'
              type='text'
              placeholder='Longitude'
              value={form.farmDetails.long}
              onChange={(e) =>
                setForm({
                  ...form,
                  farmDetails: { ...form.farmDetails, long: e.target.value },
                })
              }
            />
            <input
              className='inputElem'
              type='text'
              placeholder='Latitude'
              value={form.farmDetails.lat}
              onChange={(e) =>
                setForm({
                  ...form,
                  farmDetails: { ...form.farmDetails, lat: e.target.value },
                })
              }
            />
          </div>
          <span className='spExample'>
            Ex: Longitude: 8.6753° E. Latitude: 9.0820° N
          </span>
        </div>
      </div>
      <div className='flex-container5'>
        <label className='titleLabel'>
          Crops cultivated and planting season
        </label>
        <div className='container5'>
          <div className='flex-container'>
            <div className='input-body'>
              <label>What crop do you cultivate on this farm?</label>
              <select className='inputElem' placeholder='Select'>
                <option>Select Crop</option>
                <option>Maize</option>
                <option>Rice</option>
              </select>
            </div>
          </div>
          <div className='flex-container'>
            <div className='input-body'>
              <label>Start Month</label>
              <select className='inputElem' placeholder='Select'>
                <option>Select Crop</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>
            <div className='input-body'>
              <label>End Month</label>
              <select className='inputElem' placeholder='Select'>
                <option>Select Crop</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='addSection'>
        <button>
          <IoMdAdd /> Add another crop
        </button>
      </div>
      <div className='flex-container'>
        <div className='input-body3'>
          <label>Upload farm documents</label>
          <label className='uploadDiv' htmlFor='farmUpload'>
            <span className='spanIcon'>
              <LuUploadCloud />
            </span>
            <p>
              <span className='uP1'> Click to upload</span> or drag and drop
              <br />
              <span className='uP2'>PNG, JPG or PDF (max. 10MB)</span>
            </p>
          </label>
          <input
            className='inputElem'
            id='farmUpload'
            type='file'
            multiple={true}
            hidden
            placeholder='Enter farm name'
            onChange={(e) =>
              setForm({ ...form, document: [...e.target.files] })
            }
          />
        </div>
      </div>
      {form?.document &&
        form?.document.map((doc) => (
          <div key={doc.name} className='uploadedFiles'>
            <span>
              <IoMdDocument size={20} color='gray' />
            </span>
            <div className='fileDetails'>
              <p className='fileName'>{doc.name}</p>
              <p className='fileSize'>{Math.floor(doc.size / 1000)} MB</p>
              <div className='progressContainer'>
                <span className='progressBar'></span>
                <span className='progressNumber'>{upload}%</span>
              </div>
              {upload === 100 ? (
                <button
                  type='button'
                  onClick={() =>
                    setForm({
                      ...form,
                      document: form.document.filter((e) => e !== doc),
                    })
                  }>
                  <IoMdTrash size={20} />
                </button>
              ) : (
                <button type='button'>
                  <IoMdCheckmarkCircle size={20} color='#0e9874' />
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
