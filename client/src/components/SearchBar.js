import { Component } from 'react';

import Select from 'react-select';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './SearchBar.css'
import binimage from './images/all-bins-imgs.png'
import React, { useState } from 'react'
import _ from 'underscore'

// const productoptions = [
//     { value: '', label: '' },
//     { value: '', label: '' },
//     { value: '', label: '' },
// ];

// const keyoptions = [
//     { value: '', label: '' },
//     { value: '', label: '' },
//     { value: '', label: '' },
// ];

const productoptions = []
const keyoptions = []
const allInfo = []
const unique = []
console.log(keyoptions)
// console.log(unique)

class SearchBar extends Component {
    state = {
        selectedOption: null,
    };



    componentDidMount() {
        axios.get('/api/show')
            .then(res => {
                for (var i = 0; i < res.data.data.length; i++) {

                    productoptions.push({ value: res.data.data[i].product_name, label: res.data.data[i].product_name })
                    allInfo.push(res.data.data[i])

                    let isAlreadyAnOption = false;
                    for (var a = 0; a < keyoptions.length; a++) {
                        if (keyoptions[a].value == res.data.data[i].recycle_number) {
                            isAlreadyAnOption = true;
                        }
                    }
                    if (!isAlreadyAnOption) {
                        keyoptions.push({ value: res.data.data[i].recycle_number, label: res.data.data[i].recycle_number })
                    }
                }


                // for (var j = 0; j < res.data.data.length; j++) {
                //     let isAlreadyAnOption = false;
                //     for (var a = 0; a < keyoptions.length; a++) {
                //         if (keyoptions[a].value == res.data.data[j].recycle_number) {
                //             isAlreadyAnOption = true;
                //         }
                //     }
                //     if (!isAlreadyAnOption) {
                //         keyoptions.push({ value: res.data.data[j].recycle_number, label: res.data.data[j].recycle_number })
                //     }

                        // if (!keyoptions.includes({ value: res.data.data[j].recycle_number, label: res.data.data[j].recycle_number })) {
                        //     keyoptions.push({ value: res.data.data[j].recycle_number, label: res.data.data[j].recycle_number })
                        // }
                

                // for (var j = 0; j < res.data.data.length; j++) {
                //     if (!unique.includes({ value: res.data.data[j].recycle_number, label: res.data.data[j].recycle_number })) {
                //         unique.push({ value: res.data.data[j].recycle_number, label: res.data.data[j].recycle_number })
                //     }


                //     //console.log(res.data.data[j].recycle_number)
                // }



                // for (var j = 0; j < res.data.data.length; j++) {
                //     keyoptions.filter((key, index) => {
                //         if (keyoptions.indexOf(key) == index)
                //         unique.push(keyoptions)
                //         // return keyoptions.indexOf(key) == index;
                //       }); console.log(unique)

                // if keyoptions.indexOf(key) == index not in unique:
                // unique.push(keyoptions.indexOf(key) == index)




                // console.log(res.data.data[j].recycle_number)
                // if (_.findWhere(keyoptions, res.data.data[j].recycle_number) == null) {
                //     console.log(_.findWhere(keyoptions, res.data.data[j].recycle_number) == null)
                //     keyoptions.push({ value: res.data.data[j].recycle_number, label: res.data.data[j].recycle_number })

                //         res.data.data[j].recycle_number);

                // keyoptions[j]["label"] = (res.data.data[j].recycle_number)
                // keyoptions[j]["value"] = (res.data.data[j].recycle_number)
            }

                //console.log(allInfo)
            )
    }





    handleClick = (event) => {
        //console.log(event.value)
        this.setState({ selectedOption: event.value })
    };

    ProductKeyDisplayInfo = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].product_name) {
                return `Your Product goes in the ${allInfo[i].info} Bin`
            }
        }
    }

    ProductKeyImage = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].product_name) {
                return allInfo[i].image
            }
        }
    }

    ProductKeyCommonForm = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].product_name) {
                return `Common Forms: ${allInfo[i].common_form}`
            }
        }
    }

    RecycleKeyDisplayInfo = () => {
        for (var i = 0; i < allInfo.length; i++) {
            // console.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].recycle_number) {
                return `Your Product goes in the ${allInfo[i].info} Bin`
            }
        }
    }

    RecycleKeyImage = () => {
        for (var i = 0; i < allInfo.length; i++) {
            // console.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].recycle_number) {
                return allInfo[i].image
            }
        }
    }

    RecycleKeyCommonForm = () => {
        for (var i = 0; i < allInfo.length; i++) {
            //.log(allInfo[i].product_key)
            if (this.state.selectedOption == allInfo[i].recycle_number) {
                return `Common Forms: ${allInfo[i].common_form}`
            }
        }
    }

    render() {
        const { selectedOption } = this.state;
        const isProductRecycable = this.ProductKeyDisplayInfo()
        const productCommonForms = this.ProductKeyCommonForm()
        const isReycleKeyRecycable = this.RecycleKeyDisplayInfo()
        const recycleKeyCommonForms = this.RecycleKeyCommonForm()
        const ProductKeyImage = this.ProductKeyImage()
        const RecycleKeyImage = this.RecycleKeyImage()


        return (
            <div className="search">
                <h1> Let’s Check Your Product </h1>
                <p>Search here by the <Link to='/'>Recycle Number</Link> on your product or choose from one of the <Link to='/'>Product Dropdowns</Link> listed.</p>
                <Select className="search-bar"
                    //value={this.state.selectedOption}
                    onChange={this.handleClick}
                    options={productoptions}
                />

                <Select className="search-bar2"
                    //value={selectedOption}
                    onChange={this.handleClick}
                    options={keyoptions}
                />

                <div className="info-container">
                    <h1 style={{ visibility: this.state.selectedOption ? 'hidden' : 'visible' }}>Waiting for your chosen product...</h1>
                    <p style={{ visibility: this.state.selectedOption ? 'hidden' : 'visible' }}><i className="fas fa-recycle fa-spin "></i></p>
                    <img className="allbin-img" src={binimage} style={{ visibility: this.state.selectedOption ? 'hidden' : 'visible' }} alt="this is car image" />

                    <div className="display-info">
                        <h2 style={{ visibility: this.state.selectedOption ? 'visible' : 'hidden' }}>Your Chosen Product is: {this.state.selectedOption}</h2>

                        <img className="product-img" src={ProductKeyImage}></img>
                        <img className="product-img" src={RecycleKeyImage}></img>

                        <h2>{isProductRecycable}</h2>
                        <p>{productCommonForms}</p>
                        <h2>{isReycleKeyRecycable}</h2>
                        <p>{recycleKeyCommonForms}</p>

                    </div>
                </div>

                <div className="label-tips">
                    <label>Label Tips</label><button className="label-tips-open"><i className="fas fa-chevron-down fa-2x"></i></button>

                    {/* <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div> */}

                </div>

            </div >
        );
    }
}
export default SearchBar