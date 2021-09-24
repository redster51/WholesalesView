import React from 'react';
import { Route, Switch } from 'react-router-dom';

const SwitchRouter = ({ routes }) => (
    <Switch>
        {routes.map(({ id, ...rest }) =>
            <Route key={id} {...rest} />
        )}
    </Switch>
);

export default SwitchRouter;
