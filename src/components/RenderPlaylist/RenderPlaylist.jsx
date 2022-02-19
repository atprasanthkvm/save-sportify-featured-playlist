import React from 'react';
import { Draggable } from "react-beautiful-dnd";

const RenderPlaylist = (props) => {

    return (
        <>{
            props.playlist.map((artist, index) => (
                <Draggable draggableId={artist.id.toString()} key={"drag_" + artist.id} index={index}>
                    {(provided, snapshot) => (

                        <div key={artist.id}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}

                        >
                            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt="" /> : <div>No Image</div>}
                            {artist.name}
                        </div>
                    )}
                </Draggable>

            ))
        }</>
    )

}

export default RenderPlaylist