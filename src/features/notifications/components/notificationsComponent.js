import React from 'react';
import { Message, Transition } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListOfNotifications, Notification } from '../styled';

const notificationsComponent = ({ notifications }) => (
    <Transition.Group as={ListOfNotifications} animation="fly left" duration={350}>
        {notifications.map(notification => (
            <Notification key={notification.id} kind={notification.kind}>
                <Message content={notification.text} />
            </Notification>
        ))}
    </Transition.Group>
);

notificationsComponent.propTypes = {
    notifications: PropTypes.array,
};

const mapStateToProps = state => ({
    notifications: state.notificationReducer,
});

export default connect(mapStateToProps)(notificationsComponent);
