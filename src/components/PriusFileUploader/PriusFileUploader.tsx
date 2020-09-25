import React, { useState } from 'react';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';

import uploadIcon from './UploadIcon.svg';
import PriusIndicatorLabel, { StatusUploadType } from '../PriusIndicatorLabel';

import { PriusFileUploaderCss } from './PriusFileUploaderCss';

export type PriusFileUploaderProps = {
  onUploadFile: (files: any) => void;
  statusUpload: StatusUploadType;
  className?: string;
  id?: string;
};

const PriusFileUploader = ({
  onUploadFile,
  statusUpload,
  className,
  id,
}: PriusFileUploaderProps) => {
  const classes = PriusFileUploaderCss();
  const greyBorder = '#ececec';
  const redBorder = '#e02020';
  const blueBorder = '#1c9aea';

  const [isOnDrag, setIsOnDrag] = useState<boolean>(false);
  const [dragCounter, setDragCounter] = useState<number>(0);
  const [iconFile, setIconFile] = useState<string>(uploadIcon);
  const [file, setFile] = useState<File | null>(null);
  const [borderBox, setBorderBox] = useState<string>(greyBorder);

  let boxColor =
    statusUpload === StatusUploadType.FAILED ? redBorder : borderBox;

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter + 1);

    if (
      e.dataTransfer &&
      e.dataTransfer.items &&
      e.dataTransfer.items.length > 0
    ) {
      setIsOnDrag(true);
    }
  };

  const handleDragOut = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter - 1);

    if (dragCounter === 0) {
      setIsOnDrag(false);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOnDrag(false);
    if (e.dataTransfer && e.dataTransfer.files) {
      //only allow one file
      const fileData = e.dataTransfer.files[0];
      if (fileData) {
        onUploadFile(fileData);
        e.dataTransfer.clearData();
        setDragCounter(0);
        setFile(fileData);
        setIconFile('document');
      }
    }
  };

  const handleInputFile = (e: any) => {
    if (e.target.files) {
      const fileData = e.target.files[0];
      onUploadFile(fileData);
      setFile(fileData);
      setIconFile('document');
    }
  };

  const reUploadFile = () => {
    onUploadFile(file);
  };

  return (
    <Grid
      container
      id="divFile"
      className={clsx(classes.box, className ? className : '')}
      draggable={isOnDrag}
      onDragStart={(event: any) => handleDragIn(event)}
      onDragEnd={(event: any) => handleDragOut(event)}
      onDragOver={(event: any) => handleDrag(event)}
      onDrop={(event: any) => handleDrop(event)}
      onMouseEnter={() => setBorderBox(blueBorder)}
      onMouseLeave={() => setBorderBox(greyBorder)}
      style={{ border: `1px dashed ${boxColor}` }}
    >
      <Grid item className={classes.input}>
        {!file ? (
          <>
            {iconFile && (
              <img className={classes.img} alt="upload file" src={iconFile} />
            )}
            <Grid item>
              <label>Tarik dan letakkan file disini atau </label>
              <label htmlFor="files" className={classes.link}>
                klik disini
              </label>
              <input
                className={classes.inputType}
                type="file"
                id="files"
                data-identity={id && `${id}-input-uploadFile`}
                onChange={(event: any) => handleInputFile(event)}
              />
              <label> untuk memilih file</label>
            </Grid>
          </>
        ) : (
          <PriusIndicatorLabel
            id={id}
            status={statusUpload}
            name={file.name}
            size={file.size}
            onRetry={reUploadFile}
            onDelete={() => {
              setIconFile(uploadIcon);
              setFile(null);
              setBorderBox('#ececec');
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default PriusFileUploader;
