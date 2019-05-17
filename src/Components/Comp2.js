import React, { Component } from 'react';

import { connect } from 'react-redux';
import { mostrar_productos } from '../actions/productosActions';

import Product   from "./Product";

class Comp2 extends Component {

    componentDidMount() {
        this.props.mostrar_productos();
    }

    render() {
        const { productos } = this.props;


        return (
            <div className="comp">

                <h4>Desde componente 2</h4>
                <div>
                    {Object.keys(productos).map(p => {
                        return (
                            <Product key={p}  producto={productos[p]}/>
                            
                        )
                    })}
                </div>

            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    productos: state.productos
})

export default connect(mapStateToProps, { mostrar_productos })(Comp2);