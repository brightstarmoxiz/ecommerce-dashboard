import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { Ecommerce, Orders, Calendar, Employees,Stacked,Pyramid,Customers,Kanban,Area,Bar, Pie, Financial,ColorPicker,ColorMapping,Editor,Line} from './pages';
import {useStateContext} from './contexts/ContextProvider';
import './App.css';


function App() {
  const {activeMenu} = useStateContext();
 
  return (                   
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{zIndex:'1000'}}>
        <TooltipComponent content="Settings" position="Top">
            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl
            hover:bg-light-gray text-white" style={{background:'blue', borderRadius:'50%'}}>
              <FiSettings/>
            </button>
        </TooltipComponent>
      </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg 
          bg-white">
            <Sidebar/>
          </div>
):(
  <div className="w-0 dark:bg-secondary-dark-bg">
     <Sidebar/>
  </div>
        )}
        <div className={
          `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72 ':
           'flex-2'}`
        
        }>
    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          <Navbar/>
    </div>
        </div>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Ecommerce/>}/>
          <Route path="/ecommerce" element={<Ecommerce/>}/>

          {/* pages */}
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/customers" element={<Customers/>}/>

          {/* Apps */}
          <Route path="/kanban" element={<Kanban/>}/>
          <Route path="/editor" element={<Editor/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/color-picker" element={<ColorPicker/>}/>

          {/* Charts */}
          <Route path="/line" element={<Line/>}/>
          <Route path="/area" element={<Area/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/pie" element={<Pie/>}/>
          <Route path="/financial" element={<Financial/>}/>
          <Route path="/color-mapping" element={<ColorMapping/>}/>
          <Route path="/pyramid" element={<Pyramid/>}/>
          <Route path="/stacked" element={<Stacked/>}/>

          

        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App












// import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
// import './App.css';
// function App() {
//     const data = [
//         {
//             OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
//             ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
//             ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
//         },
//         {
//             OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
//             ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
//             ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
//         },
//         {
//             OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
//             ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
//             ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
//         }
//     ];
//     return (<GridComponent dataSource={data}>
//       <ColumnsDirective>
//           <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
//           <ColumnDirective field='CustomerID' width='100'/>
//           <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
//           <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
//           <ColumnDirective field='ShipCountry' width='100'/>
//       </ColumnsDirective>
//     </GridComponent>);
// }
// export default App;