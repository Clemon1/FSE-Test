/* eslint-disable react/prop-types */
export const MultiStepFormBody = ({
  backBtnDisabled,
  handleBack,
  continueBtnDisabled,
  handleContinue,
  btnText,
  finished,
  handleSubmit,
  children,
}) => {
  return (
    <>
      <div className='stepperBody'>
        <h2 className='textTitle1'>Create Account</h2>
        <section className='stepperForm'>{children}</section>
        <div className='stepperContainer'>
          <button
            disabled={backBtnDisabled}
            onClick={handleBack}
            className='stepperBTN back'>
            Back
          </button>
          {finished ? (
            <button onClick={handleSubmit} className='stepperBTN continue'>
              Submit
            </button>
          ) : (
            <button
              disabled={continueBtnDisabled}
              onClick={handleContinue}
              className='stepperBTN continue'>
              {btnText}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
