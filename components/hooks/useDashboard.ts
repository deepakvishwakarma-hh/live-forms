import Router from "next/router";

const useDashboard = () => {

    const logout = () => {
        localStorage.removeItem('token');
        Router.replace(Router.asPath)

    }

    return { logout }
}
export default useDashboard;