type ShowData ={
    name: string|number
    id:number
}

type FtData = {
    data:ShowData[];
    handleDelete:(id:number)=>void;
}

const Show  = ({data,handleDelete}:FtData)=>{
    const sortData = (a:ShowData,b:ShowData) =>{
        return( b.id - a.id);
    }
    const storeData = [...data].sort(sortData)
    return(
        <div className="show">
            {storeData.map((d:ShowData)=>{
                return (<div key={d.id} className="item">
                    <p>{d.name}</p>
                    <button type="button" onClick={()=>handleDelete(d.id)}>Delete</button>
                </div>)
            })}
        </div>
    )
}
export default Show