const ListOfTransaction=(item)=>{
    const items={
        item1:{
            name:'Item1',
            qauntity:4,
            total:"32.222",
            priceList:["7.2,9.2"],
        },
        item2:{
            name:'Item2',
            qauntity:1,
            total:3.222,
            priceList:["7.2"],
        },
        item3:{
            name:'Item3',
            qauntity:1,
            total:"1.222",
            priceList:["1.2"],
        }
     
    }
    return(
        <div className="border rounded text-center ">
            {Object.entries(items).map(([__,item])=>{
                return(
                    <div className="border-bottom py-3">
                        <p>
                            {item.name}*{item.qauntity}
                        </p>
                        <h1>₹ {parseFloat(item.total).toFixed(2)} </h1>
                        <p>
                            <small>
                                {item.priceList.map((price)=>{
                                    return (
                                        <span className="badge round-pill text-bg-primary me-2">₹{price} </span>
                                    )
                                })}
                            </small>
                        </p>
                    </div>
                )
            })}
        </div>
    )
};
export default ListOfTransaction