const Image = ({ src, width = "40px", height = "40px", alt, style }) => {
  return (
    src &&
    src !== "undefined" && (
      <img src={src} alt={alt} height={height} width={width} style={style} />
    )
  );
};

export default Image;
