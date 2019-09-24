import React, { Component} from 'react';

import Viewer3D from './Viewer3D';

export default class Field3D extends Component {

    handleResize = (e) => {
        this.refs.Viewer3D.applyResize();
    }
   shouldComponentUpdate =(prop,state)=>{
        if(prop.id===state.id){
            return false
        }

    } 
    componentDidMount = () => window.addEventListener('resize', this.handleResize);

    render = () => (
            <Viewer3D
                {...this.props}
                ref="Viewer3D"/>
        );
}