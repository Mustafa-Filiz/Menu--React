import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);


    const filterItems = (e) => {
        setMenuItems(items.filter((item) => item.category === e.target.value))
    }

    const showAll = () => {
        setMenuItems(items)
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories filterItems={filterItems} showAll={showAll}  />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
