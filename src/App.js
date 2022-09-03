
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component';

import AddEditSalary from './component/addeditSalary/addeditsalary.component'
import ViewSalary from './component/viewsalary/viewsalary.component';
import AddProjectPage from './routes/addprojectpage/addprojectpage.component';
import AddWorkerPage from './routes/addworkerpage/addworkerpage.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<ViewSalary />} />
        <Route path='/addeditsalary' element={<AddEditSalary />} />
        <Route path='/addproject' element={<AddProjectPage />} />
        <Route path='/addworker' element={<AddWorkerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
