/* eslint-disable no-undef */
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
  console.log("documents:", form.farmDetails[0].docUploads);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [upload] = useState(100);

  const addProduct = (farmIndex) => {
    setForm((prevForm) => ({
      ...prevForm,
      farmDetails: prevForm.farmDetails.map((farmDetail, index) =>
        index === farmIndex
          ? {
              ...farmDetail,
              crops: [
                ...farmDetail.crops,
                {
                  cropId: "",
                  farmSeasonStart: "",
                  farmSeasonEnd: "",
                },
              ],
            }
          : farmDetail,
      ),
    }));
  };

  return (
    <div className='formInputBody'>
      <h4 className='textTitle2'>Farm Registration</h4>
      {form.farmDetails.map((farmDetails, farmIndex) => (
        <div key={farmIndex}>
          <div className='flex-container'>
            <div className='input-body'>
              <label>Farm Name</label>
              <input
                className='inputElem'
                type='text'
                placeholder='Enter farm name'
                value={farmDetails.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    farmDetails: form.farmDetails.map((fd, index) =>
                      index === farmIndex
                        ? { ...fd, name: e.target.value }
                        : fd,
                    ),
                  })
                }
                required
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
                  value={farmDetails.long}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      farmDetails: form.farmDetails.map((fd, index) =>
                        index === farmIndex
                          ? { ...fd, long: e.target.value }
                          : fd,
                      ),
                    })
                  }
                />
                <input
                  className='inputElem'
                  type='text'
                  placeholder='Latitude'
                  value={farmDetails.lat}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      farmDetails: form.farmDetails.map((fd, index) =>
                        index === farmIndex
                          ? { ...fd, lat: e.target.value }
                          : fd,
                      ),
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
              {farmDetails.crops &&
                farmDetails.crops.map((crop, cropIndex) => (
                  <div key={cropIndex}>
                    <div className='flex-container'>
                      <div className='input-body'>
                        <label>What crop do you cultivate on this farm?</label>
                        <select
                          className='inputElem'
                          placeholder='Select'
                          value={crop.cropId}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              farmDetails: form.farmDetails.map((fd, index) =>
                                index === farmIndex
                                  ? {
                                      ...fd,
                                      crops: fd.crops.map((c, i) =>
                                        i === cropIndex
                                          ? { ...c, cropId: e.target.value }
                                          : c,
                                      ),
                                    }
                                  : fd,
                              ),
                            })
                          }>
                          <option>Select Crop</option>
                          <option>Maize</option>
                          <option>Rice</option>
                          <option>Yam</option>
                          <option>Millet</option>
                        </select>
                      </div>
                    </div>
                    <div className='flex-container'>
                      <div className='input-body'>
                        <label>Start Month</label>
                        <select
                          className='inputElem'
                          placeholder='Select'
                          value={crop.farmSeasonStart}
                          onChange={(e) =>
                            setForm({
                              ...form,
                              farmDetails: form.farmDetails.map((fd, index) =>
                                index === farmIndex
                                  ? {
                                      ...fd,
                                      crops: fd.crops.map((c, i) =>
                                        i === cropIndex
                                          ? {
                                              ...c,
                                              farmSeasonStart: e.target.value,
                                            }
                                          : c,
                                      ),
                                    }
                                  : fd,
                              ),
                            })
                          }>
                          <option>Select Month</option>
                          {months.map((month, i) => (
                            <option value={month} key={i}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='input-body'>
                        <label>End Month</label>
                        <select
                          className='inputElem'
                          value={crop.farmSeasonEnd}
                          placeholder='Select'
                          onChange={(e) =>
                            setForm({
                              ...form,
                              farmDetails: form.farmDetails.map((fd, index) =>
                                index === farmIndex
                                  ? {
                                      ...fd,
                                      crops: fd.crops.map((c, i) =>
                                        i === cropIndex
                                          ? {
                                              ...c,
                                              farmSeasonEnd: e.target.value,
                                            }
                                          : c,
                                      ),
                                    }
                                  : fd,
                              ),
                            })
                          }>
                          <option>Select Month</option>
                          {months.map((month, i) => (
                            <option value={month} key={i}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='addSection'>
            <button type='button' onClick={() => addProduct(farmIndex)}>
              <IoMdAdd /> Add another crop
            </button>
          </div>
          <div className='flex-container'>
            <div className='input-body3'>
              <label>Upload farm documents</label>
              <label className='uploadDiv' htmlFor={`farmUpload-${farmIndex}`}>
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
                id={`farmUpload-${farmIndex}`}
                type='file'
                multiple={true}
                hidden
                onChange={(e) =>
                  setForm({
                    ...form,
                    farmDetails: form.farmDetails.map((fd, index) =>
                      index === farmIndex
                        ? {
                            ...fd,
                            docUploads: [
                              ...fd.docUploads,
                              ...Array.from(e.target.files),
                            ],
                          }
                        : fd,
                    ),
                  })
                }
              />
            </div>
          </div>
          {farmDetails.docUploads &&
            farmDetails.docUploads.map((doc, docIndex) => (
              <div key={docIndex} className='uploadedFiles'>
                <span>
                  <IoMdDocument size={20} color='gray' />
                </span>
                <div className='fileDetails'>
                  <p className='fileName'>{doc.name}</p>
                  <p className='fileSize'>{Math.floor(doc.size / 1024)} KB</p>
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
                          farmDetails: form.farmDetails.map((fd, index) =>
                            index === farmIndex
                              ? {
                                  ...fd,
                                  docUploads: fd.docUploads.filter(
                                    (d) => d !== doc,
                                  ),
                                }
                              : fd,
                          ),
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
      ))}
    </div>
  );
};
