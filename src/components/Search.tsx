
type SearchProps ={
    handleClick :()=>void;
    setNewData:(value:string)=>void;
}
const Search = ({handleClick,setNewData}:SearchProps)=>{
    return(
        <div className="search">
        <input type="text" placeholder="Enter the Note" onChange={(e)=> setNewData(e.target.value)}/>
        <button type="button" onClick={handleClick}>Add</button>
        </div>
    )
}

export default Search;