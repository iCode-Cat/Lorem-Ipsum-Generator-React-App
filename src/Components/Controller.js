import React from 'react';

const Controller = ({setValue, value}) => {
    let targetValue = value;
    return <div className="controller-container">
         <h1>TIRED OF BORING LOREM IPSUM?</h1>
            <div className="controllers">
                <input onChange={(e)=>{
                    targetValue = e.target.value
                    if(e.target.value < 0) {
                        e.target.value = 0
                    }
                    }} type="number" name="" id=""/>
                <button onClick={()=>setValue(targetValue)}>GENERATE</button>
            </div>

    </div>

}

export default Controller;