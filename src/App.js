import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'

import Login from './Login'
import Layout from './Layout'
import Board from './Board'
import Article from './Article'
import NotFound from './NotFound'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    {/* 定义二级路由嵌套 */}
                    {/* 类似于vue中的children,用结构上的嵌套代替了数据上的嵌套 */}
                    {/* <Route path='board' element={<Board></Board>}></Route> */}
                    {/* 默认二级路由    添加index属性   并把自身的path属性干掉 */}
                    <Route index element={<Board></Board>}></Route>
                    <Route path='article' element={<Article></Article>}></Route>
                </Route>
                <Route path='/login' element={<Login></Login>}></Route>
                {/* 当所有的路径都没有匹配时    做兜底匹配显示  未找到 */}
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App