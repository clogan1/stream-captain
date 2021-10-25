import Search from '../AddEntry/Search'
import AddModal from '../AddEntry/AddModal'
import SearchCard from '../AddEntry/SearchCard'
import { useState } from 'react'

function AddEntry() {
    const [search, setSearch] = useState('')
    const [searchArr, setSearchArr] = useState([])

    function handleSearchSubmit(e){
        e.preventDefault()
        let searchTerm = e.target[0].value
        // console.log("search term:", searchTerm)

        //get rid of any spaces
        searchTerm = searchTerm.split(' ').join('+')

        fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=c9a21004`)
        .then(res => res.json())
        .then(data => setSearchArr(data.Search))
    }

    console.log(searchArr)


    return (
        <div>
            Add Entry
            <Search search={search} setSearch={setSearch} handleSearchSubmit={handleSearchSubmit} />
            {(searchArr.length > 0) ?
                 searchArr.map(item => {
                     return(
                         <p>{item.Title}</p>
                     )
                 })  
                :
                null
            }
        </div>
    )
}

export default AddEntry
