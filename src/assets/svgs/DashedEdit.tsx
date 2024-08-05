const DashedEdit = ({ className }: { className?: string }): JSX.Element => (
  <svg className={className} viewBox="0 0 24 24" width="14">
    <path d="M5.354 18.462h-4.431c-0.51 0-0.923-0.413-0.923-0.923v0-4.431c0.002-0.253 0.106-0.481 0.272-0.646l12.189-12.189c0.167-0.166 0.397-0.268 0.651-0.268s0.484 0.103 0.651 0.268l4.431 4.431c0.166 0.167 0.268 0.397 0.268 0.651s-0.103 0.484-0.268 0.651l-12.194 12.185c-0.165 0.166-0.393 0.27-0.646 0.272h-0zM1.846 16.615h3.125l11.262-11.262-3.125-3.125-11.262 11.262z"></path>
    <path d="M23.077 24h-22.154c-0.51 0-0.923-0.413-0.923-0.923s0.413-0.923 0.923-0.923v0h22.154c0.51 0 0.923 0.413 0.923 0.923s-0.413 0.923-0.923 0.923v0z"></path>
  </svg>
);

export default DashedEdit;