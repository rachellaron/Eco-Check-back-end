import { Component } from 'react';
import Select from 'react-select';
import axios from 'axios'

const options = [
  { value: 'Bread', label: 'Bread' },
  { value: 'Milk', label: 'Milk' },
  { value: 'Plastic Bag', label: 'Plastic Bag' },
];

class DropDown extends Component {
  state = {
    selectedOption: null,
    test: ''
  };

  componentDidMount() {
    axios.get('/api/show')
        .then(res => {
            for (var i =0; i < res.data.data.length; i++) {
                console.log(res.data.data[i].product_key)
            }
        //    console.log(res.data.data[0].product_key)
        //     this.setState({
        //     test: res.data.data[0].product_key
            
    })
}

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      /> 
      // if options.value == res.data.data[i].product_key
    );
  }
}
export default DropDown