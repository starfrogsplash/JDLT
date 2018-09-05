import React, { Component } from 'react';
import { Query }from 'react-apollo';

import {GET_ALL_STOCK } from './graphql'
import './App.css';

class App extends Component {

  state = {
      currentSupplier : '',
      currentProduct : '',
    }

    handleSelect = (e) => {
      let value = e.target.value
      this.setState({currentSupplier:new RegExp(value)})
    }

    handleChange = (e) => {
      let value = e.target.value
      this.setState({currentProduct:new RegExp(value)})
    }

  render() {
      const {currentSupplier, currentProduct } = this.state;
    return (
        <Query query={GET_ALL_STOCK}>
          {({data, loading, error}) => {
            if (loading) return <div> Loading </div>
            if (error) return <div> error </div>
            const {getAllStock} = data;

             let filteredResults = getAllStock.slice()
             const title = Object.keys(getAllStock[0]).slice(0,3)

             let filteredSuppliers = [];
             let filteredProducts = [];

              if (currentSupplier){
                filteredResults = filteredResults.filter(item => currentSupplier.test(item.Supplier))
              }
            if (currentProduct){
              filteredResults = filteredResults.filter(item => currentProduct.test(item.Product))
            }
            for ( let item of getAllStock) {
              if (!filteredSuppliers.includes(item.Supplier)){
                filteredSuppliers.push(item.Supplier)
              }

              if (!filteredProducts.includes(item.Product)){
                filteredProducts.push(item.Product)
              }
            }
            return (
              <div className="App">
             <h1> Filtering Selection  </h1>
            <label htmlFor="supply" className="supply-drop"> Supplier </label>
              <select id="supply"ref="Supplier-drop" className="supply-drop" onChange={this.handleSelect} defaultValue='.*'>
              <option value= ".*" >Show All</option>
              {filteredSuppliers.map( (stock, i) => (<option key={i}> {stock} </option>))}
            </select>
            <label htmlFor="product" className="product-drop"> Product </label>
              <select testid="product" id="product"ref="product-drop" className="product-drop" onChange={this.handleChange} defaultValue='.*'>
                <option value= ".*"> Show All </option>
                {filteredProducts.map( (stock, i) => (<option key={i} testid={stock}> {stock} </option>))}
            </select>
            <table>
              <tbody>
              <tr>
                  {title.map((title, i) => (
                      <th key={i}> {title}</th>
                    ))
                  }
             </tr>
                  {filteredResults.map((item, i) =>(
                    <tr key={i}> 
                      <td> {item.Supplier} </td>
                      <td> {item.Product} </td>
                      <td> {item.Price} </td>
                    </tr>
                  ))}
              </tbody>
             </table>
             </div>
            )
          }
          }
        </Query>
    );
  }
}

export default App;
