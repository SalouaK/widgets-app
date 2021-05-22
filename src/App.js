/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Search from './components/Search';
import 'semantic-ui-css/semantic.min.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
}
    from 'react-router-dom';
import Header from './components/Header';


const items = [
    {
        title: 'What is React ?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React ?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React ?',
        content: 'You use React by creating components'
    },
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Accordion items={items} />
                    </Route>
                    <Route path='/list'>
                        <Search />
                    </Route>
                    <Route path='/dropdown'>
                        <Dropdown
                            label='Select a color'
                            options={options}
                            selected={selected}
                            onSelectedChange={setSelected}
                        />
                    </Route>
                    <Route path='/translate'>
                        <Translate />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};