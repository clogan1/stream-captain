import Search from '../AddEntry/Search'
import AddModal from '../AddEntry/AddModal'
import SearchCard from '../AddEntry/SearchCard'
import { useState } from 'react'
import nextId from "react-id-generator";


function AddEntry() {
    const [search, setSearch] = useState('')
    const [searchArr, setSearchArr] = useState([])
    const [openModel, setOpenModal] = useState(false)

    // console.log(searchArr)
    let newArr = []

    function handleSearchSubmit(e){
        e.preventDefault()
        let searchTerm = e.target[0].value
        // console.log("search term:", searchTerm)

        //get rid of any spaces
        searchTerm = searchTerm.toLowerCase().split(' ').join('+')

        fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c9a21004`)
        .then(res => res.json())
        .then(data => setSearchArr(data.Search))
    }

    function handleOpenModal(){
        setOpenModal(true)
    }

    return (
        <div>
            Add Entry
            <Search search={search} setSearch={setSearch} handleSearchSubmit={handleSearchSubmit} />
            {(searchArr.length > 0) ?
                 searchArr.map(item => <SearchCard key={nextId()}item={item}/>)  
                :
                null
            }
        </div>
    )
}

export default AddEntry
