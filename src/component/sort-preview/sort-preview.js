import React, {Component} from 'react';
import './sort-preview.css'
import SortPreviewCard from "./sort-preview-card";
import SortPreviewInfo from "./sort-preview-info";

export default class SortPreview extends Component {
    render() {
        return (
            <div className='sort-preview'>
                <SortPreviewCard/>
                <SortPreviewInfo/>
            </div>
        );
    }
}