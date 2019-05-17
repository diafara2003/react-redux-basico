import React, { Component } from "react";

class Product extends Component {

    selectedProducto = () => {
        if (!this.state.checked) {
            this.setState({
                classSelected: 'productos product-selected',
                checked: true
            });
        } else {
            this.setState({
                classSelected: 'productos',
                checked: false
            });
        }
    }

    state = {
        checked: false,
        classSelected: 'productos'
    }

    render() {
        const { name } = this.props.producto;


        return (

            <div className={this.state.classSelected}

                onClick={()=>{
                    this.selectedProducto();
                }}>
                {name}
            </div>
        )
    }
}

export default Product;