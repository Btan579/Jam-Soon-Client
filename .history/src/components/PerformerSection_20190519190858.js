import React from 'react';
// import {landingSections}  from './ComponentData';
import '../styles/PerformerSection.css';

export default function PerformerSection(props) {
    return (
        <div className="performance-section">
            <h5>{props.artistName}</h5>
            <p>{props.artist_id}</p>
            <p>{props.billIndex}</p>
            <p>{props.billSlot}</p>
            <a target='_blank' href={`https://www.youtube.com/playlist?list=${props.playlist_id}`}><img classname='vidThumbnail' alt={`${props.artistName} playlist thumbnail`} src={props.thumbnail} /></a>
        </div>
    );
};

PerformerSection.defaultProps = {
    artistName: '',
    artist_id: '',
    billIndex: '',
    billSlot: '',
    playlist_id: '',
    thumbnail: ''
};


{/* <TransitionGroup className="shopping-list">
    {items.map(({ listItems }) => (
        <React.Fragment>
            <ListGroupItem>
                {listItems}
            </ListGroupItem>

            {listItems.map((eachThing) =>
                <ListGroupItem>
                    {eachThing.name}  | {eachThing.quantity} | {eachThing.listName}
                </ListGroupItem>
            )}
        </React.Fragment>
    ))}
</TransitionGroup>


{ */}
