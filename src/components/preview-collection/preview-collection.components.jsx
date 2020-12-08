import React from 'react'
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.components';
import "./preview-collection.styles.scss";

function PreviewCollection({title,items}) {
    return (
        <div className="collection-preview">
            <Link to={`/shop/${title.toLowerCase()}`} >
           <h1 className="title">{title.toUpperCase()}</h1>
           </Link>
           <div className="preview">
                  {
                      items
                      .filter((item,idx) => idx < 4 )
                      .map((item)=>(
                        <CollectionItem key={item.id} item={item} />
                      ))
                  }
            </div>            
        </div>
    )
}

export default PreviewCollection
