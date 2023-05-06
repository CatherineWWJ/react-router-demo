import { useNavigate } from "react-router-dom"

function Login() {
    // 实现跳转到关于页
    const navigate = useNavigate()
    function goToAbout() {
        // 以replace的形式进行路由跳转（即不能回退）默认的replace为false(叠加跳转可回退)
        navigate('/about?id=1001')
        // navigate('/about?id=1001', {replace: true})
    }
    function goToAbout1() {
        navigate('/about/1001')
    }
    return (
        <div>
            login
            <button onClick={goToAbout}>go to about page</button>
            <button onClick={goToAbout1}>click to about page</button>
        </div>
    )
}

export default Login 