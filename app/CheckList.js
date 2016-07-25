import React, {Component} from 'react';
/**
 * Created by xiaobing on 2016/7/21.
 */
class CheckList extends Component {
   

    render() {


        let tasks = this.props.tasks.map((task)=>(
            <li key={task.name} className="checklist_task">
                <input type="checkbox" defaultChecked={task.done}/>
                {task.name}
                <a href="#" className="checklist__task--remove"/>
            </li>
        ));

        return (
            <div>
                <div className="checklist">
                    <ul>{tasks}</ul>
                </div>
            </div>
        );
    }
}

export default CheckList;