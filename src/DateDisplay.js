import React from 'react';

class DateDisplay extends React.Component{

    render(){
        return (

                <div>

                <h1> It is {new Date().toLocaleTimeString()} now</h1>

                </div>

        )
    }

}
export default DateDisplay;