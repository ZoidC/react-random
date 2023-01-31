import { useRef, useState } from 'react';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import Action from '../js/interfaces/Action';
import Position from '../js/interfaces/Position';

interface DraggableWindowProps {
    actions: Action[]
}

const DraggableWindow = ({ actions }: DraggableWindowProps) => {
    const nodeRef = useRef(null);
    const SAFETY_NET = 20;
    const [position, setPosition] = useState<Position>({ x: SAFETY_NET, y: SAFETY_NET })
    
    const onStop = (event: DraggableEvent, data:DraggableData) => {
        let currentPosition: Position = { x: data.x, y: data.y};

        // Handle SAFETY_NET
        if (currentPosition.x < SAFETY_NET) currentPosition.x = SAFETY_NET;
        else if (currentPosition.x > window.innerWidth - SAFETY_NET - data.node.offsetWidth) currentPosition.x = window.innerWidth - SAFETY_NET - data.node.offsetWidth;
        if (currentPosition.y < SAFETY_NET) currentPosition.y = SAFETY_NET;
        else if (currentPosition.y > window.innerHeight - SAFETY_NET - data.node.offsetHeight) currentPosition.y = window.innerHeight - SAFETY_NET - data.node.offsetHeight;

        setPosition(currentPosition);
    }

    return (
        <Draggable 
            nodeRef={ nodeRef }
            handle=".draggable-window--header"
            position={ position }
            onStop={ onStop }>
            <div 
                ref={ nodeRef } 
                className="draggable-window">
                    <div className="draggable-window--header"></div>
                    <div className="draggable-window--content">
                        { actions.map((action, i) => <button key={i} className="draggable-window--content--button" onClick={ action.clickAction }>{ action.title }</button>)}
                    </div>
            </div>
        </Draggable>
    )
}

export default DraggableWindow;