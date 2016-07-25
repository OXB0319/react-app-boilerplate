/**
 * Created by xiaobing on 2016/7/21.
 */
import React, {Component} from 'react';
import Card from './Card'
import {render} from 'react-dom';

class List extends Component {
    render() {

        var cards = this.props.cards.map((card)=> {
            return <Card key={card.id}  id={card.id} title={card.title} color={card.color} description={card.description} tasks={card.tasks}/>
        });

        return (
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

export default List;