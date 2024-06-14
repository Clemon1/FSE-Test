// eslint-disable-next-line react/prop-types
export const MobileStepperIndicator = ({ width }) => {
  return (
    <>
      <div className='stepperIndicatorBody2'>
        <div
          className='stepperIndicator3'
          style={{
            width: width,
          }}></div>
        <div className='stepperIndicator4'></div>
        <div className='stepperCircle'>
          <span className='circle'></span>
        </div>
        <div className='stepperCircle'>
          <span className='circle'></span>
        </div>
        <div className='stepperCircle'>
          <span className='circle'></span>
        </div>
        <div className='stepperCircle'>
          <span className='circle'></span>
        </div>
      </div>
    </>
  );
};
