import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from "react"
import DatePicker from './Components/DatePicker.jsx';
import TotalWidget from './Components/TotalWidget.jsx';
import ListOfTransaction from './Components/ListOfTransaction.jsx';

function App() {
  const[loading,updateLoadingState]=useState(false);
  const[data,updataData]=useState({
    total:0,
    items:{},
  })

  const fetchTheData=(from,to)=>{
    updateLoadingState(true);
  

  var requestOptions={
    method:"GET",
  };

  fetch(
    // `https://api.frankfurter.app/latest?from=${from}&to=${to}`,//dates not came
    // `http://worldtimeapi.org/api/timezone/Etc/UTC?{from}=${from}&to=${to}`,//dates came but status fail
    `https://api.example.com/data?from=${from}&to=${to}`,//dates came but status fail
    // `https://date.nager.at/Api/v2/PublicHolidays/2023/US?from=${from}&to=${to}`,dates came but status 404
    requestOptions
  ).then((response)=>response.text())
  .then((result)=>{
    const data= result?JSON.parse(result):[];
    if(data &&data.length){
      // console.log(data);
      processTheData(data);
    }
  })
  .catch((error)=>{
    console.log("error",error);
  })
  .finally(()=>{
    updateLoadingState(false);
  })
}

const onDataChangeApp=(from,to)=>{
  fetchTheData(from,to);
}

const processTheData=(data)=>{
  let OverallTotal=0
  let allItems={}
  data.forEach((transaction)=>{
    const{items, total:currentTotal}=transaction
    OverallTotal=OverallTotal+currentTotal;

    items.forEach((item)=>{
      const existedItem=allItems[item.name];
    })

    if(existedItem){
      existedItem.quantity=existedItem.quantity + items.quantity;
      existedItem.total=existedItem.total + items.total;
      if(items.price&&existedItem?.priceList.indexOf(items.price)===-1){
        existedItem.priceList.push(items.price);
      }else{
        let currentItemPrice="";
        if(!items.price){
          currentItemPrice=items.quantity==1?items.total:"";
        }

        allItems[items.name]={
          name:items.name,
          priceList:[currentItemPrice],
          quantity:items.quantity,
          total:items.total,
        }
      }
    }
  })
  updataData({total:OverallTotal,items:allItems})
}
  return(
    <div className='p-3'>
      <DatePicker onDataChange={onDataChangeApp} />
      <br />
      <TotalWidget total={data.total} />
      <br />
      <ListOfTransaction items={data.items} />
    </div>
  )
}

export default App
