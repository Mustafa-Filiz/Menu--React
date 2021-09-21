import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);


    const filterItems = (e) => {
        if (e.target.value === "all") {
            setMenuItems(items);
            return;
        }
        setMenuItems(items.filter((item) => item.category === e.target.value))
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default App;
