import React, {Component,PropTypes} from 'react';
import CheckList  from './CheckList';
import marked from 'marked';
/**
 * Created by xiaobing on 2016/7/21.
 */

let titlePropType = (props, propName, componentName) => {
    if (props[propName]) {
        let value = props[propName];
        if (typeof value !== 'string' || value.length > 80) {
            return new Error(
                `${propName} in ${componentName} is longer than 80 characters`
            );
        }
    }
}

class Card extends Component {
    constructor(name) {
        super(...arguments);
        this.state = {
            showDetail: true
        }
    }

    onToggleDetail(){
        this.setState({showDetail:!this.state.showDetail});
        this.render();
    }

    render() {
        let cardDetail;

        let sideColor = {
            position: 'absolute',
            zIndex: -1,
            top: 0,
            bottom: 0,
            left: 0,
            width: 7,
            backgroundColor: this.props.color
        };

        if (this.state.showDetail) {
            if(this.refs.sideColor){
                this.refs.sideColor.style.backgroundColor = '#BD8D31';
            }
            cardDetail = (
                <div className="card_detail">
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                    <CheckList key={this.props.id} cardId={this.props.id} color ={this.props.color} tasks={this.props.tasks}/>
                </div>
            );
        }
        else{
            cardDetail =null;
            if(this.refs.sideColor) {
                this.refs.sideColor.style.backgroundColor = 'red';
            }

        }

        return (
            <div className="card">
                <div ref="sideColor" style={sideColor}></div>
                <div className={this.state.showDetail? "divArrowRight" : "divArrowDown"}  style={{float:'left'}} onClick={this.onToggleDetail.bind(this)}></div>
                <div ref="showDetails" className= {this.state.showDetail? "card__title--is-open" : "card__title"} onClick={this.onToggleDetail.bind(this)}>{this.props.title}</div>
                {cardDetail}
            </div>
        );

    }
};

Card.propTypes = {
    id: PropTypes.number,
    title: titlePropType,
    description: PropTypes.string,
    color: PropTypes.string,
    tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Card;