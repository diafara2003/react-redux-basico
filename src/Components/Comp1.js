import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { mostrar_productos, agregar_producto } from '../actions/productosActions';


import Product from "./Product";

class Comp1 extends Component {

    state = {
        name: ''
    }

    componentDidMount() {
        this.props.mostrar_productos();
    }

    agregar_nuevo_producto = () => {
        if (this.state.name == '') return;
        this.props.agregar_producto({
            name: this.state.name,
            id: 3,
            quality: 'algo mas',
            description: 'nuevo prodcto'
        });

        this.setState({
            name: ''
        })
    }

    render() {
        const { productos } = this.props;

        return (

            <div className="comp">

                <h4>Desde componente 1</h4>

                {Object.keys(productos).map(p => {
                    return (
                        <Product key={p} producto={productos[p]} />
                    )
                })
                }

                <span>Producto</span>
                <input type="text"
                    onChange={(e) => {
                        this.setState({
                            name: e.target.value
                        })
                    }} value={this.state.name} />
                <input type="button" value="nuevo"
                    onClick={(e) => {
                        e.preventDefault();
                        this.agregar_nuevo_producto();
                    }} />
                <div>
                    <label>{this.state.name}</label>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    productos: state.productos
})

export default connect(mapStateToProps, { mostrar_productos, agregar_producto })(Comp1);