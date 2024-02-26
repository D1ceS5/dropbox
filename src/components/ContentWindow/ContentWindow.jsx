import './contentWindow.scss'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { listFiles } from '../../API/GetList'

function ContentWindow() {
    const [files, setFiles] = useState([])

    useEffect(() => {
        listFiles("").then(r => {
            console.log(r);
            setFiles(r)
        })
    }, [])
    return <div className='contentWindow'>

        <ItemList items={files}></ItemList>
    </div>
}

export default ContentWindow