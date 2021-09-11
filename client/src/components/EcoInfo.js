import { Component } from 'react';
import axios from 'axios'

class EcoInfo extends Component {
    state = {
        test: ''
    }

    // Run this function at the start
    componentDidMount() {
        axios.get('/api/show')
            .then(res => {
               console.log(res.data.data[0].product_key)
                this.setState({
                test: res.data.data[0].product_key
                
            })
        })
    }
    render() {
        return (
            <div>
                <h1>hello</h1>
                <p>{this.state.test}</p>
            </div>
        )

    }
}

export default EcoInfo



