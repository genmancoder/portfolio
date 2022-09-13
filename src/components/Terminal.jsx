import React from 'react'
import $ from 'jquery';
const Terminal = () => {


    $(function() {
        $('.terminal').terminal({
            hello: function(what) {
                this.echo('Hello, ' + what +
                          '. Wellcome to this terminal.');
            }
        }, {
            greetings: 'My First Web Terminal'
        });
    });

  return (
    <div className='terminal'>
    </div>
  )
}

export default Terminal