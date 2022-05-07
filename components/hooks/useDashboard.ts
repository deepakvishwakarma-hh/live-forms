import Router from "next/router";

const useDashboard = () => {

    const logout = () => {
        localStorage.removeItem('token');
        Router.reload()
    }

    return { logout }
}
export default useDashboard;