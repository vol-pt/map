import React from 'react';
import { Header, List, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const results = ({ results, handleLinkClick }) => (
    <>
        <Segment raised id="search_res">
            <List divided>
                {results.length === 0 ? (
                    <Header as="h3">No results found.</Header>
                ) : (
                    results.map(place => (
                        <List.Item key={place.name} id="search_item">
                            <List.Content className="search_content">
                                <List.Header>
                                    <Header style={{ cursor: 'pointer' }} onClick={() => handleLinkClick(place)}>
                                        {place.name}
                                    </Header>
                                </List.Header>
                            </List.Content>
                        </List.Item>
                    ))
                )}
            </List>
        </Segment>
    </>
);

results.propTypes = {
    results: PropTypes.array.isRequired,
};

export default results;
