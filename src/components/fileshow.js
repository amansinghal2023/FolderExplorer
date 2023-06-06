import React from "react";

const Fileshow =({selectedFolder, setSelectedFolder})=>{

//////////////////////////////////

    const formatFileSize = (size) => {
        if (size < 1024) {
          return `${size} bytes`;
        } else if (size < 1024 * 1024) {
          return `${(size / 1024).toFixed(2)} kB`;
        } else if (size < 1024 * 1024 * 1024) {
          return `${(size / (1024 * 1024)).toFixed(2)} MB`;
        } else if (size < 1024 * 1024 * 1024 * 1024) {
          return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
        } else {
          return `${(size / (1024 * 1024 * 1024 * 1024)).toFixed(2)} TB`;
        }
      };

///////////////////////////////////////////////

      const showFileDetails = (file) => {
        console.log("the file informations is ",file)
        alert(`
          File Name: ${file.name.replace(/\.[^/.]+$/, '')}
          File Extension: ${file.name.split('.').pop()}
          File Size: ${formatFileSize(file.size)}
        `);
      };

///////////////////////////////////////////////

    const renderTable = () => {
        if (selectedFolder) {
          return (
            <table className="table">
              <thead>
                <tr>
                  <th>File name</th>
                  <th>File size</th>
                  <th>File Extension</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                {selectedFolder.map((file, index) => (
                  
                  
                  <tr key={index}>
                    <td>{file.name.replace(/\.[^/.]+$/, '')}</td>
                    <td>{formatFileSize(file.size)}</td>
                    <td>{file.name.split('.').pop()}</td>
                    <td>
                      <button className="info-button" onClick={() => showFileDetails(file)}>Info</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        }
        // console.log("the filee issssss ",file);
        return null;
      };
/////////////////////////////////////////////////


    return(
       <div className="file-show">
      {renderTable()}
    </div>
    );
};

export default Fileshow;