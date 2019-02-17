import React, {Component} from 'react';
import './sort-footer.css'

export default class SortFooter extends Component {
    render() {
        return (
            <div className="sort-footer">
                <input type="text" placeholder='Код колоды'/>
                <textarea placeholder='Описание колоды'/>
                <input type="text" placeholder='Название колоды'/>
                <input type="submit" value='Сохранить'/>
            </div>
        );
    }
}