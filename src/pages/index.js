import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './menubar';
import Index from './indexPage';
import { Segment, Grid } from 'semantic-ui-react';

export default () => (
    <Grid as={Segment} raised>
        <Grid.Row centered>
            <Menu />
        </Grid.Row>
        <Grid.Row centered fluid>
            <Switch>
                <Route exact path={'/'} component={Index} />
            </Switch>
        </Grid.Row>
    </Grid>
);
