import React from "react";
import Header from "./components/Header/Header";
import StickyTable from "./components/Table";
import {Routes, Route} from 'react-router-dom';
import SpringModal from "./components/Modal/Modal";

const App = () => {
    return (
        <div className='App'>
            <main>
                <Header/>
                <Routes>
                    <Route path='/'>
                        <Route index element={<StickyTable/>}/>
                        <Route path=':id' element={<SpringModal/>}/>
                    </Route>
                </Routes>
            </main>
        </div>

    )
}

export default App;