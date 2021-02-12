import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, Grid } from '@material-ui/core';

import { TrashBinOutlinedIcon } from '../../icons';
import DraggableImage from '../DraggableImage';
import { ThumbnailSize } from '../Thumbnail';

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    display: 'block',
    objectFit: 'cover',
  },
  small: {
    width: '2.5rem',
    height: '2.5rem',
  },
  medium: {
    width: '4rem',
    height: '4rem',
  },
  big: {
    width: '5rem',
    height: '5rem',
  },
  deleteContainer: {
    position: 'absolute',
    zIndex: 5,
    transform: 'translate(460%, 20%)',
    backgroundColor: theme.colors.white,
    width: '0.92rem',
    borderRadius: '50%',
  },
  deleteButton: {
    cursor: 'pointer',
    marginLeft: '0.13rem',
    padding: '0.06rem',
  },
  error: {
    borderColor: theme.colors.failed,
  },
  middle: {
    transition: '.5s ease',
    opacity: 0,
    zIndex: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  onHover: {
    transform: 'translate(0, 60%)',
    zIndex: 999,
    position: 'absolute',
    width: 'min-content',
    fontWeight: 'bold',
    paddingLeft: '1.3rem',
    textAlign: 'center',
  },
}));

export type GridSize =
  | boolean
  | 'auto'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | undefined;

export type MultipleImageProps = {
  className?: string;
  images: Array<string>;
  size?: ThumbnailSize;
  md?: GridSize;
  sm?: GridSize;
  isError?: boolean;
  onError?: () => void;
  isDeletable?: boolean;
  handleChange: (imgs: Array<string>) => void;
  handleDelete?: (img: string) => void;
};

const MultipleImage = ({
  className,
  isDeletable = false,
  images,
  onError,
  handleChange,
  handleDelete,
  size = 'medium',
  md,
  sm,
  isError,
}: MultipleImageProps) => {
  const classes = useStyles();

  const moveImage = (dragIndex: number, hoverIndex: number) => {
    if (images) {
      const temp = images;
      [temp[dragIndex], temp[hoverIndex]] = [temp[hoverIndex], temp[dragIndex]];
      handleChange(temp);
    }
  };

  //given any, because the original type is JSX.Element[] and it needs some requirement
  const displayedImages: any = images.map((image, index: number) => (
    <Grid
      item
      md={md}
      sm={sm}
      style={{
        marginBottom: '1em',
        marginRight: '0.5rem',
      }}
      key={index}
    >
      {isDeletable && (
        <div className={classes.deleteContainer}>
          <TrashBinOutlinedIcon
            className={classes.deleteButton}
            fontSize="small"
            onClick={() => {
              if (handleDelete) handleDelete(image);
            }}
          />
        </div>
      )}

      <div className={clsx(classes[size], className && className)}>
        <DraggableImage
          altText={`image of products`}
          imageSource={image}
          size={size}
          onError={onError}
          className={isError ? classes.error : ''}
          index={index}
          moveImage={moveImage}
        />
      </div>
    </Grid>
  ));

  return displayedImages;
};

export default MultipleImage;
