import React, { useRef, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';

import PriusThumbnail from '../PriusThumbnail';
import Option from '../Option';
import PriusPaper from '../PriusPaper';
import { camelize } from '../../helpers';

import { useStyles } from './CardDNDCss';

const dndType = {
  CARD: 'card',
};

export type DragItemType = {
  index: number;
  id: string;
  type: string;
};

export type CardPropsDND = {
  /* ID of item */
  ID: string;
  /* First text / title */
  text: string;
  /* Thumbnail of the card */
  thumbnail?: string;
  /* Description text */
  secondaryText?: string;
  /* if published will changed it color to grey */
  published?: boolean;
  /* key in item */
  index: number;
  /* draggable or not */
  isSorted: boolean;
  /* URL for edit item */
  URLEdit?: string;
  /* Actio on moving the card */
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  /* Styling for link */
  linkStyle?: CSSProperties;
  /** list of options available */
  options?: Array<string>;
  /** options action handler */
  handleOption?: (option: string) => void;
  //id for meta attribute
  metaId?: string;
};

const PropsDND: React.FC<CardPropsDND> = ({
  ID,
  text,
  thumbnail,
  index,
  moveCard,
  published = true,
  secondaryText,
  linkStyle,
  URLEdit,
  isSorted = false,
  options = [],
  handleOption,
  metaId,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const classes = useStyles();

  const [, drop] = useDrop({
    accept: dndType.CARD,
    hover(item: DragItemType, monitor: DropTargetMonitor) {
      // Can't drag item if it is not dragable item
      if (!isSorted) {
        return;
      }

      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = clientOffset
        ? clientOffset.y - hoverBoundingRect.top
        : 0;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: dndType.CARD, ID, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const cardOptions = options?.map((option) => {
    return {
      itemId: `${
        metaId +
        (camelize(option).charAt(0).toUpperCase() +
          camelize(option).substr(1)) +
        (camelize(text).charAt(0).toUpperCase() + camelize(text).substr(1))
      }`,
      title: option,
      onClick: () => {
        if (handleOption) handleOption(option);
      },
    };
  });

  return (
    <PriusPaper
      component="li"
      padding="noPadding"
      className={!published ? classes.unpublished : ''}
    >
      <Grid
        container
        justify="space-between"
        alignItems="center"
        ref={ref}
        style={{ opacity }}
        className={clsx(classes.container, isSorted ? classes.dragable : null)}
      >
        {thumbnail && (
          <Grid item>
            <PriusThumbnail
              imageSource={thumbnail}
              altText={text}
              size="small"
            />
          </Grid>
        )}

        <Grid item className={classes.item}>
          <Typography>
            {URLEdit ? (
              <Link
                className={classes.linkText}
                style={linkStyle}
                to={URLEdit}
                data-identity={metaId && `${metaId}-link-${camelize(text)}`}
              >
                {text}
              </Link>
            ) : (
              text
            )}
          </Typography>
          <Typography variant="body2">{secondaryText}</Typography>
        </Grid>
        {cardOptions.length > 0 && (
          <Grid item>
            <Option icon="vertical" items={cardOptions} />
          </Grid>
        )}
      </Grid>
    </PriusPaper>
  );
};

export default PropsDND;
