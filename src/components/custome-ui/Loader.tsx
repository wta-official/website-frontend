"use client"

import { Triangle } from "react-loader-spinner";

interface TriangleLoaderProps {
  visible?: boolean;
  height?: string | number;
  width?: string | number;
  color?: string;
  wrapperStyle?: React.CSSProperties;
  wrapperClass?: string;
}

const TriangleLoader: React.FC<TriangleLoaderProps> = ({
  visible = true,
  height = 80,
  width = 80,
  color = "#FFFFF",
  wrapperStyle = {},
  wrapperClass = "",
}) => {
  if (!visible) return null;

  return (
    <div className={wrapperClass} style={wrapperStyle}>
      <Triangle height={height} width={width} color={color} aria-label="triangle-loading" />
    </div>
  );
};

export default TriangleLoader;
