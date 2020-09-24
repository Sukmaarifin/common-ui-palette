import * as React from 'react';
import { Drawer, List, ListItem, Typography } from '@material-ui/core';

import './NotificationList.css';

export type NotificationListProps = {
  items: any;
  notif: boolean;
};

class NotificationList extends React.Component<NotificationListProps> {
  render() {
    const { items, notif } = this.props;

    return (
      <Drawer open={notif} anchor="right">
        <List className="prius__side-modal">
          <ListItem className="header-container">
            <Typography className="header-text">Notifikasi</Typography>
          </ListItem>
          {items.length !== 0 ? (
            items
          ) : (
            <>
              <div className="notification-item">
                <em>Belum ada notifikasi.</em>
              </div>
              <hr className="no-margin" />
            </>
          )}
        </List>
      </Drawer>
    );
  }
}

export default NotificationList;
