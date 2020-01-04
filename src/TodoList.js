import React,{Component,Fragment} from 'react';

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputVaule:'',
            list:[]
        }
    }
    render() {
        return (
            <Fragment>
                <div><input value={this.state.inputVaule} /><button>提交</button></div>
                <ul>
                    <li>学英语</li>
                    <li>Learning React</li>
                </ul>
            </Fragment>
        )
    }
}

export default TodoList;
