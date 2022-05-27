import React from "react";
//--------------------IMPORTS------------------------------

export const FileBox = (filelist) => {
  const files = filelist.filelist;
  return (
    <div className="fileBox">
      <p>Files:</p>
      <ul>
        {Object.values(files).map((file, index) => {
          return (
            <li key={index}>
              <a href={file.raw_url} target="_blank" rel="noreferrer">
                {file.filename}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
