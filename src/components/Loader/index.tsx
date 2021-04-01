import React, { HTMLAttributes } from 'react';
import Loader from 'react-loader-spinner';

interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode
}

const LoaderComponent = (props: LoaderProps) => {
  return (
    <Loader
      color="#fff"
      height={20}
      secondaryColor="#ffffff"
      timeout={0}
      type="Audio"
      visible={true}
      width={"80px"}
      style={{ color: "red" }}
      {...props}
    />
  );
};
export default LoaderComponent;
