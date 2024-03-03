const Cross = ({ className }: { className?: string }): JSX.Element => (
  <svg className={className} viewBox="2 2 16.5 16.5">
    <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
  </svg>
);

export default Cross;
