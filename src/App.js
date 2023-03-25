import './App.css';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import MainContext from './MainContext';
import BrandsData from './brand.json';
import { useEffect, useState } from 'react'; 
import Copied from './component/Copied';

function App() {

   //çekilen json dosyasını burda array haline getirdik.
   const brandsArray = []
   Object.keys(BrandsData).map(key => (
       brandsArray.push(BrandsData[key])
   ))
  

   //state oluşturma
   const [brands,setBrands] = useState(brandsArray)
   const [selectedBrands, setSelectedBrand] = useState(brandsArray)
   const [copied, setCopied] = useState(false)

    const data ={
      brands,
      selectedBrands,
      setSelectedBrand,
      setCopied,

    }

    useEffect(()=>{
      console.log(selectedBrands)
      
    }, [selectedBrands])

    useEffect(() => {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 800)
      return () => {
        clearTimeout(timeout)
      }
    }, [copied])


  return (
    //boş açıp kapatmanın adı fragment, bu birden fazla js dosyasını çalıştırmak içindir.
    <>
     <MainContext.Provider value={data}>
     {copied && <Copied color={copied}/>}
     <Sidebar />
      <Content />
     
     </MainContext.Provider>
    </>
  )
}

export default App;
