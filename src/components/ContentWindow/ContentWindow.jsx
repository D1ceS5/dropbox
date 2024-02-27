import './contentWindow.scss'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { listFiles } from '../../API/dropbox'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Header from '../Header/Header'

function ContentWindow() {
    const [files, setFiles] = useState([])

    useEffect(() => {
        let params = new URLSearchParams(window.location.search);
        let pathParam = params.get("path"); 
        let path = (pathParam && pathParam.length) > 1 ? decodeURIComponent(pathParam) : "/Public"
        console.log("Path", path)
        listFiles(path).then(r => {
            console.log(r);
            setFiles(r)
        })
    }, [])
    return <div className='contentWindow'>
        <Header />
        <Breadcrumbs />
        <ItemList items={files}></ItemList>
    </div>
}

export default ContentWindow