import React,{Component} from 'react'
import Axios from 'axios'
class Male extends Component {
    render(){
        return <div>
           Male
        </div>
    }
    componentWillMount(){
        Axios.get("/rank/publish/list/data.json?sortType=day&type=sell").then(res => {
            console.log(res.data)

        })
    }
}
export default Male
