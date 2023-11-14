import React, { useState } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

const App = () => {
    const [data, setData] = useState([
        { name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
    ]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    let maxId = 4;

    const deleteItem = (id) => {
        setData(prevData => prevData.filter(item => item.id !== id));
    }

    const addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: maxId++
        }
        setData(prevData => [...prevData, newItem]);
    }

    const onToggleProp = (id, prop) => {
        setData(prevData => {
            return prevData.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            });
        });
    }

    const searchEmp = (items, searchTerm) => {
        if (searchTerm.length === 0) {
            return items;
        }
        return items.filter(item => item.name.indexOf(searchTerm) > -1);
    }

    const onUpdateSearch = (searchTerm) => {
        setTerm(searchTerm);
    }

    const filterPost = (items, filterOption) => {
        switch (filterOption) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    const onFilterSelect = (filterOption) => {
        setFilter(filterOption);
    }

    const employees = data.length;
    const increased = data.filter(item => item.increase).length;
    const visibleData = filterPost(searchEmp(data, term), filter);

    return (
        <div className="app">
            <AppInfo employees={employees} increased={increased} />
            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
                <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
            </div>
            <EmployeesList
                data={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp} />
            <EmployeesAddForm onAdd={addItem} />
        </div>
    );
}

export default App;
