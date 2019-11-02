import React ,{Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
//import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

//import '../SEGA.wolf'



class App extends Component{
    constructor(){
        super();
        this.state ={
            robots:[],
            searchField:'',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({robots:users})
        })
    }

    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})
       
    }

    render (){
        const robotFilter=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        if(this.state.robots.length===0){
            return <h1>Loading . . . . .</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                              
                                    <CardList robots={robotFilter} />
                                
                        </Scroll>
                 </div>
                 );
        }

        
    }
    
 
}
export default App