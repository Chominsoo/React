import React from 'react';


function BoardList({ boardId, boardWriter, boardTitle, boardContent, onRemove, onRowClick }) {

    return (
        
        <tr>
            <td className = "tdn" onClick={() => onRowClick(boardId)}>{boardId}</td>
            <td className = "td" onClick={() => onRowClick(boardId)}>{boardWriter}</td>
            <td className = "td" onClick={() => onRowClick(boardId)}>{boardTitle}</td>
            <td className = "td" onClick={() => onRowClick(boardId)}>{boardContent}</td>
            <td className = "td">
                <button className = "bted" onClick={() => onRowClick(boardId)}>Edit</button>
                <button className = "btrm" onClick={() => onRemove(boardId)}>Delete</button>
            </td>
        </tr>
    )
}

export default BoardList;