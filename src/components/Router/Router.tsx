import { Route, Switch, useLocation } from "wouter";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";

const Router = () => {
    const [_, setLocation] = useLocation();
    const redirectNotFound = () => {
        setLocation('/ohno');
        return null;
    };
    return (
        <Switch>
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
            <Route path='/ohno' component={NotFound} />
            <Route path='*' component={redirectNotFound} />
        </Switch>
    );
};

export default Router;