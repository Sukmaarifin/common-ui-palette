import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@material-ui/core';

import PriusThumbnail from '../PriusThumbnail';

export type PriusCardTemplateProps = {
  imageSource: string;
  title: string;
  description?: string;
};

function PriusCardTemplate({
  imageSource,
  title,
  description,
}: PriusCardTemplateProps) {
  const matchesSmallDisplay = useMediaQuery('(max-width: 1366px)');
  return (
    <ListItem component="div" disableGutters style={{ padding: 0 }}>
      <ListItemIcon>
        <PriusThumbnail
          imageSource={imageSource}
          altText="Image of product variant"
          size="small"
        />
      </ListItemIcon>
      <ListItemText
        style={{
          display: 'block',
          maxWidth: '13.5rem',
          textOverflow: 'ellipsis',
          overflow: matchesSmallDisplay ? 'visible' : 'hidden',
          whiteSpace: matchesSmallDisplay ? 'normal' : 'nowrap',
        }}
        primary={title}
        secondary={description ? description : null}
      />
    </ListItem>
  );
}

export default PriusCardTemplate;
