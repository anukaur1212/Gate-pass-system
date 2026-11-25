import React from 'react';

const CloudGetImg = ({fileUrl}) => {
    // const fileUrl = localStorage.getItem("fileUrl");

    return (
        <>
            {/* {fileUrl && ( */}
                <iframe
                    src={fileUrl}
                    width="100%"
                    height="500px"
                    title="PDF Viewer"
                />
            {/* )} */}
        </>
    );
};

export default CloudGetImg;