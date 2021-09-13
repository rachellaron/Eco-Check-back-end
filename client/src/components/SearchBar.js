import { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'
import './SearchBar.css'

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


class SearchBar extends Component {
    state = {
        selectedOption: null,
    };

    componentDidMount() {
        axios.get('/api/show')
            .then(res => {
                for (var i = 0; i < res.data.data.length; i++) {
                    productoptions[i]["label"] = (res.data.data[i].product_key)
                    productoptions[i]["value"] = (res.data.data[i].product_key)
                }

                for (var j = 0; j < res.data.data.length; j++) {
                    keyoptions[j]["label"] = (res.data.data[j].name_key)
                    keyoptions[j]["value"] = (res.data.data[j].name_key)
                }
            })
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () => {
            console.log(this.state.selectedOption)
            return (this.state.selectedOption)
        }
        );
    };

    DisplayInfo = () => {
        console.log(this.state.selectedOption.value)
        this.setState({checked: this.state.selectedOption.value});
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <div>

                <Select className="search-bar"
                    //value={selectedOption}
                    onChange={this.handleChange}
                    options={productoptions}
                />

                <Select className="search-bar2"
                    //value={selectedOption}
                    onChange={this.handleChange}
                    options={keyoptions}
                />
                
                <input type="checkbox" checked={this.state.checked} onClick={this.DisplayInfo}></input>Show 

                {/* <button onClick={this.DisplayInfo} className="search-btn">Submit</button>
                <h1>{this.setState}</h1> */}

            </div >
        );
    }
}
export default SearchBar