import React from 'react'
import { Switch, Route, useHistory} from 'react-router-dom'
import Test4 from './Test4'

function Post () {
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

    return (
        <>
        <h1> Post </h1>
        {
            company.map((value, index) => 
            <div key={`comp-${index}`} onClick={function () {
                history.push(`post/${index}`);
            }}>
              <h3>{value.name}</h3>  
            </div>
            )
        }
        <Switch>
            <Route path='/post/:id'> 
                <Test4 />
            </Route>
        </Switch>
        </>
    )
}

export default Post;