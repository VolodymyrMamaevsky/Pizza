import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <div className="pizza-block-wrapper">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="140" cy="130" r="130" />
      <rect x="0" y="286" rx="10" ry="10" width="280" height="23" />
      <rect x="0" y="321" rx="10" ry="10" width="280" height="88" />
      <rect x="157" y="419" rx="20" ry="20" width="119" height="45" />
      <rect x="1" y="431" rx="10" ry="10" width="95" height="30" />
    </ContentLoader>
  </div>
);

export default Skeleton;
