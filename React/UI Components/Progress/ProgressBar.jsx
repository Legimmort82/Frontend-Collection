const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full bg-Neutral-300 rounded-full h-2">
        <div
          className="bg-Primary-600 h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;