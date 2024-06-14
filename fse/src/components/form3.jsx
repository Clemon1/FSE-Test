/* eslint-disable react/prop-types */
import { FaFingerprint } from "react-icons/fa";
import { IoMdFingerPrint, IoMdInformationCircle } from "react-icons/io";
export const Form3 = ({ skip, setSkip }) => {
  return (
    <div className='formInputBody'>
      <h4 className='textTitle2'>
        Secuiry -Setup Fingerprint{" "}
        <span
          style={{
            fontWeight: "400",
          }}>
          (optional)
        </span>
      </h4>

      <div className='flex-container'>
        <div className='input-body'>
          <label>Capture Fingerprint (Your L-R Index fingers)</label>
          <div className='flex-container4'>
            <span>
              <FaFingerprint size={36} color='#90D0BF' />
              <p> left index</p>
            </span>
            <span>
              <IoMdFingerPrint size={36} color='#90D0BF' />
              <p>Left index</p>
            </span>
            <span>
              <FaFingerprint size={36} color='#90D0BF' />
              <p>Right thub</p>
            </span>
            <span>
              <IoMdFingerPrint size={36} color='#90D0BF' />
              <p>Right index</p>
            </span>
          </div>
        </div>
      </div>
      <div className='warnInfo'>
        <span>
          <IoMdInformationCircle color='#b54708' />
        </span>
        <span>
          <p>
            Place your finger on the fingerprint scanner to capture your
            fingerprint. Ensure your finger covers the entire scanner.
          </p>
        </span>
      </div>
      <div className='skipSection'>
        <label className='skipBtn'>
          <input
            type='checkbox'
            checked={skip}
            onChange={() => setSkip(!skip)}
          />
          <p>Skip for now</p>
        </label>
      </div>
    </div>
  );
};
