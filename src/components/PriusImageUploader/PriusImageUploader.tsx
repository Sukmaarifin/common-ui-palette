import React, { useRef } from 'react';
import clsx from 'clsx';

import CircularProgress from '../CircularProgress';
import { TrashBinOutlinedIcon } from '../../icons';
import { useSnackbar } from '../PriusSnackbar';
import PriusThumbnail, {
  PriusThumbnailProps,
  ThumbnailSize,
} from '../PriusThumbnail';

import { useStyles } from './PriusImageUploaderCss';

export type FileType = {
  file: File;
  contentType: string;
};

export type ImageUploaderProps = Pick<PriusThumbnailProps, 'defaultSource'> & {
  altText: string;
  source: string;
  customSize?: ThumbnailSize;
  id?: string;
  isError?: boolean;
  fileContent?: (file: FileType) => void;
  onError?: () => void;
  onDelete?: () => void;
  onSubmit?: (event: Event) => void;
  isLoading?: boolean;
};

const PriusImageUploader = ({
  altText,
  defaultSource,
  source,
  customSize = 'big',
  fileContent,
  id,
  isError,
  onError,
  onDelete,
  onSubmit,
  isLoading,
}: ImageUploaderProps) => {
  const classes = useStyles();

  const snackbar = useSnackbar();

  const fileInput = useRef<HTMLInputElement>(null);

  const uploadProductImage = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (file?.type.indexOf('image') !== -1) {
      try {
        if (fileContent && file.type) {
          fileContent({
            file: file,
            contentType: file.type,
          });
        }

        if (onSubmit) onSubmit(event);
      } catch (e) {
        snackbar.show(`Error: ${e.message}`, 'error');
      }
    } else if (file.size > 2.5e6) {
      snackbar.show(
        'Unggah Gambar Gagal',
        'error',
        true,
        'Ukuran file gambar yang ingin Anda unggah terlalu besar.'
      );
    } else {
      snackbar.show('Invalid data type: limited to image only.', 'error');
    }
  };

  const handlerKeyPress = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key === 'Enter' && fileInput.current) {
      fileInput.current.click();
    }
  };

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : source ? (
        <React.Fragment>
          <div className={classes.deleteContainer}>
            <TrashBinOutlinedIcon
              data-identity={id && `${id}-delete`}
              className={classes.deleteButton}
              fontSize="small"
              onClick={onDelete}
            />
          </div>
          <PriusThumbnail
            altText={altText}
            imageSource={source}
            size={customSize}
            onError={onError}
            className={isError ? classes.error : ''}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <label
            tabIndex={0}
            onKeyPress={(event: React.KeyboardEvent<HTMLLabelElement>) => {
              handlerKeyPress(event);
            }}
            htmlFor={id}
          >
            <PriusThumbnail
              defaultSource={defaultSource}
              altText={altText}
              className={clsx(
                classes.thumbnail,
                defaultSource && classes.container,
                isError ? classes.error : ''
              )}
              imageSource={''}
              size={customSize}
            />
          </label>
          <input
            ref={fileInput}
            className={classes.uploader}
            data-identity={id && `${id}-upload`}
            id={id}
            type="file"
            accept="image/*"
            onChange={(event: any) => uploadProductImage(event)}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default PriusImageUploader;
