/**
 * Created by xiaobing on 2016/7/25.
 */
import React, {Component,PropTypes} from 'react';

class SearchBar extends Component {
    handleChange(event){
        this.props.onUserInput(event.target.value)
    }

    render() {
        return (<div><label>搜索</label><input type="search"  placeholder="search" value={this.props.filterText} onChange={this.handleChange.bind(this)} /></div>);
    }
}

SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
}

export default SearchBar;
