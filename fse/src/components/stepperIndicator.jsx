// eslint-disable-next-line react/prop-types
export const StepperIndicator = ({ height }) => {
  return (
    <>
      <div className='stepperIndicatorBody'>
        <div
          className='stepperIndicator '
          style={{
            height: height,
          }}></div>
        <div className='stepperIndicator2'></div>
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
