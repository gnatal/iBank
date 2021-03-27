import React, { HTMLAttributes } from 'react';
import Loader from 'react-loader-spinner';

interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode
}

const LoaderComponent = (props: LoaderProps) => {
    return (
        <Loader
            color="#00ff73"
            height={20}
            secondaryColor="#ffffff"
            timeout={3000}
            type="Audio"
            visible={true}
            width={20}
            style={{ color: "red" }}
            {...props}
        />
    );
};
export default LoaderComponent;
