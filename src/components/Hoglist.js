import React from 'react'
import Hogcard from'./Hogcard'
import 'semantic-ui-react'




export default class HogList extends React.Component{
    render() {
       return (
           <div>
            { this.props.hogs.map(hog => <Hogcard hog={hog}/>) }
           </div>
       )
    }


}