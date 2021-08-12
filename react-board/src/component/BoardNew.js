import React from 'react';
import How from './How';


function BoardNew({ onSave, changeInput, inputData, resetForm }) {

    const saveBtnClick = (e) => {
        e.preventDefault();
        onSave(inputData);
        resetForm();
    }

    return (
        <div className="flex">
            <form className="new" onSubmit={saveBtnClick}>
                <div>
                    Name<br/><input type="text" name="boardWriter" onChange={changeInput} value={inputData.boardWriter} size="10"/>
                </div>
                <div>
                    Title<br/><input type="text" name="boardTitle" onChange={changeInput} value={inputData.boardTitle} size="50"/>
                </div>
                <div>
                    Contents<br/><textarea name="boardContent"  onChange={changeInput} value={inputData.boardContent} cols="52" rows="10" resize="none"/>
                </div>
                <div>
                    <input type="hidden" name="boardId" onChange={changeInput} value={inputData.boardId} />
                    <button className="btsb" type="submit" >Upload</button>
                </div>
                
            </form>
            <How/>
        </div>
    )
};

export default BoardNew;