import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component{

    constructor(props){
        super(props);
        this.handleNamechange = this.handleNamechange.bind(this);
    }

    handleNamechange(e){
        this.props.onNameChange(e.target.value);
    }

    render(){
        return (
            <div className="Playlist">
                <input defaultValue="New Playlist" onChange={this.handleNamechange}/>
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/> 
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
};

export default Playlist ;