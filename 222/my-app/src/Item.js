import React from 'react';
import  classnames from 'classnames';
export default class Item extends React.Component{
	handlerDel(){
		this.props.removeItem(this.props.item.key);
	}
	
	render(){
    //debugger;
    console.dir("Item"+this.props.item);
		return (
			  <tr style={{'cursor': 'pointer'}}>
				<td className={classnames('class1','class2')}>{this.props.item.info.name}</td>
				<td className='itemTd'>{this.props.item.info.age}</td>
				<td className='itemTd'>{this.props.item.info.status}</td>
				<td className='itemTd'>{this.props.item.info.sex}</td>
				<td className='itemTd'>
				    <a className="itemBtn" onClick={this.handlerDel.bind(this)}>删除</a>
				</td>
			  </tr>
		);
	}
}
