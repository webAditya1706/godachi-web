const CircularProgress = ({ className }) => (
   <div className={`loader ${className}`}>
      <img src="/images/loader.gif" alt="loader" style={{ height: 30 }} />
      <div className="pt-2">Fetching Results</div>
   </div>
);
export default CircularProgress;
CircularProgress.defaultProps = {
   className: "",
};
