const { useEffect } = require("react");
const { useLocation } = require("react-router-dom")

const ScrollTo = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);

    return null;
}

export default ScrollTo;