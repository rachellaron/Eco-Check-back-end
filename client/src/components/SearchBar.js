import { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './SearchBar.css'
import binimage from './images/all-bins-imgs.png'

const productoptions = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
];

const keyoptions = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
];

const allInfo = []

class SearchBar extends Component {
    state = {
        selectedOption: null,
    };

    componentDidMount() {
        axios.get('/api/show')
            .then(res => {
                for (var i = 0; i < res.data.data.length; i++) {
                    // This Works Fine calling it
                    console.log(res.data.data[i])

                    // I am getting the undefined issue when I call this when i didn't before I added new data into the database
                    productoptions[i]["label"] = (res.data.data[i].product_name)
                    productoptions[i]["value"] = (res.data.data[i].product_name)
                    allInfo.push(res.data.data[i])
                }

                for (var j = 0; j < res.data.data.length; j++) {
                    keyoptions[j]["label"] = (res.data.data[j].recycle_number)
                    keyoptions[j]["value"] = (res.data.data[j].recycle_number)
                }
            })
        //console.log(allInfo)
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

                        <h2>{isProductRecycable}</h2>
                        <p>{productCommonForms}</p>
                        <h2>{isReycleKeyRecycable}</h2>
                        <p>{recycleKeyCommonForms}</p>
                        



                    </div>
                </div>

            </div >
        );
    }
}
export default SearchBar