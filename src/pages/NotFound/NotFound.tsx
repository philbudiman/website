import './NotFound.css';

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p className="text-xl mt-2">Oops! Looks like you're lost in space.</p>
            <p className="mt-4">Let's head <a href="/" className="text-blue-400 underline">home</a>.</p>
        </div>
    );
};

export default NotFound;