import React, { useRef } from 'react';
import { useDrop, DropTargetMonitor, useDrag } from 'react-dnd';
import { Grid, Typography } from '@material-ui/core';

import Thumbnail, { ThumbnailProps } from '../Thumbnail';
import { DragItemType } from '../CardDND';

import { useStyles } from './DraggableImageCss';

const dndType = {
  IMAGE: 'image',
};

type DraggableImageProps = ThumbnailProps & {
  /* key in item */
  index: number;
  /* action on moving the image */
  moveImage: (dragIndex: number, hoverIndex: number) => void;
};

const DraggableImage = ({
  altText,
  imageSource,
  size,
  onError,
  className,
  index,
  moveImage,
}: DraggableImageProps) => {
  const classes = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: dndType.IMAGE,
    hover(item: DragItemType, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();

      // Get horizontal middle
      const hoverMiddleX =
        (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the left
      const hoverClientX = clientOffset
        ? clientOffset.x - hoverBoundingRect.left
        : 0;

      // Only perform the move when the mouse has crossed half of the items width

      // dragging to the right
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      // dragging to the left
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      // Perform the action
      moveImage(dragIndex, hoverIndex);

      // mutating the monitor item
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: dndType.IMAGE, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <Grid ref={ref} style={{ opacity }} className={classes.container}>
      <Grid id="imageHover">
        <Thumbnail
          altText={altText}
          imageSource={imageSource}
          size={size}
          onError={onError}
          className={className}
        />
      </Grid>
      <Typography
        id={'hoverContent'}
        variant="body2"
        className={classes.onHover}
      >
        Geser dan Urutkan
      </Typography>
    </Grid>
  );
};

export default DraggableImage;
