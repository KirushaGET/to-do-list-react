import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Test4 from './Test4'

function Home () {
    const company = [
        {

            name:'Test1',
            owner:'Petr'
        },
        {

            name:'Test2',
            owner:'Petr2'
        },
        {

            name:'Test3',
            owner:'Pet3'
        }
    ];

    let history = useHistory();

    const goTo = (index) => {
        history.push(`home/${index}`);
    }
    return (
        <>
        <h1> Home </h1>
        {
            company.map((value,index) => 
                <div key={`${index}`} onClick={() => goTo(index)} >
                    <p>{value.name}</p>
                </div>
            )
        }
        <Switch>
            <Route path='/home/:id'>
                <Test4 />
            </Route>
        </Switch>
        </>
    )
}

export default Home;