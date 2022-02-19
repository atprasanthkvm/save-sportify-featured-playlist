import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFeaturedPlaylists, loadSavedPlaylists } from '../../store/actions';
import "./Dashboard.scss"
import { Droppable } from "react-beautiful-dnd";

import RenderPlaylist from "../RenderPlaylist/RenderPlaylist";

const Dashboard = (props) => {
    const history = useHistory();

    const [token, setToken] = useState("")

    useEffect(() => {
        let token = window.localStorage.getItem("token")

        setToken(token)

        props.loadSavedPlaylists();
        props.fetchFeaturedPlaylists();


    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        history.push("/");
    }


    
    return (
        <>
            {token ? <button className="logout-button" onClick={logout}>Logout</button> : <h2>Please login</h2>}
            <div className="container">
                <Droppable droppableId="fPlaylist">
                    {(provided, snapshot) => (

                        <div className="playlist" ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <span className="playlist_heading" >Featured Playlist</span>

                            <RenderPlaylist playlist={props.featuredPlaylists} />
                            {provided.placeholder}

                        </div>
                    )}

                </Droppable>
                <Droppable droppableId="sPlaylist">
                    {(provided, snapshot) => (

                        <div className="playlist saved" ref={provided.innerRef}
                            {...provided.droppableProps} >
                            <span className="playlist_heading" >Saved Playlist</span>

                            <RenderPlaylist playlist={props.savedPlaylists} />

                            <span className="drophere" >Drop Here...</span>
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>

            </div>

        </>

    );





}

const mapStateToProps = state => {
    return { featuredPlaylists: state.featuredPlaylists, savedPlaylists: state.savedPlaylists  };
};


export default connect(
    mapStateToProps,
    { fetchFeaturedPlaylists, loadSavedPlaylists }
)(Dashboard);