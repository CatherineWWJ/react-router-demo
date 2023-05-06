import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div>
            layout
            {/* 二级路由出口 */}
            {/* 当匹配上二级路由时，就会在此处对应渲染二级路由对应的组件element */}
            <Outlet></Outlet>
        </div>
    )
}

export default Layout