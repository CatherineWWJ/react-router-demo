import { useSearchParams, useParams } from "react-router-dom"

function About() {
    // const [params] = useSearchParams()
    // params是一个对象  其中有一个get方法  专门用来获取对应的参数
    // 把参数的名称作为get方法的实参传过来
    // const id = params.get('id')
    const params = useParams()
    const id = params.id
    return (
        <div>about：得到的参数id值为：{id}</div>
    )
}

export default About 