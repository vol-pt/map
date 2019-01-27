import styled from 'styled-components';
import { List } from 'semantic-ui-react';

const colors = {
    success: 'limegreen',
    info: '#356fce',
    error: 'red',
};

export const ListOfNotifications = styled(List)`
    position: fixed;
    right: 2em;
    z-index: 99999999;

    & > div.item {
        font-size: larger;
        position: relative;
        text-align: center;
    }
`;

export const Notification = styled(List.Item)`
    & > .ui.message {
        background: ${props => colors[props.kind]};
        color: white;
        opacity: 0.7;
        -webkit-box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 11px -2px rgba(0, 0, 0, 0.75);
    }
`;
