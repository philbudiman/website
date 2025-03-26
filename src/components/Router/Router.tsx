import { Route, Switch, useLocation } from "wouter";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import Blog from "../../pages/Blog/Blog";
import NotFound from "../../pages/NotFound/NotFound";
import BlogPost from "../BlogPost/BlogPost";

const Router = () => {
    const [, setLocation] = useLocation();
    const redirectNotFound = () => {
        setLocation('/404');
        return null;
    };
    return (
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={BlogPost} />
            <Route path='/404' component={NotFound} />
            <Route path='*' component={redirectNotFound} />
        </Switch>
    );
};

export default Router;