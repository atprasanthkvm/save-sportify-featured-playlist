import './App.scss';
import { connect } from 'react-redux';

import Dashboard from './components/Dashboard/Dashboard';
import LoginPage from './components/LoginPage/LoginPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { DragDropContext } from "react-beautiful-dnd";
import { savePlaylist, updateFeaturedPlaylist } from './store/actions';


function App(props) {

    const onDragEnd = (result) => {
        const { destination, source } = result;


        if (!destination) {
            return;
          }

          if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
          ) {
            return;
          }


        if(destination.droppableId === "sPlaylist" && source.droppableId === "fPlaylist"){
            let featuredPlaylists = [...props.featuredPlaylists];
            let savedPlaylists = [...props.savedPlaylists]
    
            featuredPlaylists.splice(source.index, 1);
            savedPlaylists.splice(destination.index, 0, props.featuredPlaylists[source.index]);

            props.updateFeaturedPlaylist(featuredPlaylists);
            props.savePlaylist(savedPlaylists);
        }



        if(destination.droppableId === "fPlaylist" && source.droppableId === "sPlaylist"){
            let featuredPlaylists = [...props.featuredPlaylists];
            let savedPlaylists = [...props.savedPlaylists]
    
            savedPlaylists.splice(source.index, 1);
            featuredPlaylists.splice(destination.index, 0, props.savedPlaylists[source.index]);

            props.updateFeaturedPlaylist(featuredPlaylists);
            props.savePlaylist(savedPlaylists);
        }

    };


    return (
        <div className="App">
            <div className="App-header">
                <h1>Spotify Save Playlist</h1>

                <Router>
                    <Switch>
                    <DragDropContext onDragEnd={onDragEnd}>

                        <Route path='/dashboard'>
                            <Dashboard />
                        </Route>
                        <Route exact path='/'>
                            <LoginPage />
                        </Route>
                        </DragDropContext>

                    </Switch>
                </Router>


            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { featuredPlaylists: state.featuredPlaylists, savedPlaylists: state.savedPlaylists };
};


export default connect(
    mapStateToProps, 
    { savePlaylist, updateFeaturedPlaylist }
    )(App);