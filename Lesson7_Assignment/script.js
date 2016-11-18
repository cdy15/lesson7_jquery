/*
Program Name: Recipe Display Application
Author: Cy Yates
Date: 11/18/16
Filename: script.js
*/

        //displays the next element after the current target
           function display(event) {
            
            $(event.currentTarget).next().fadeIn("slow");
            
        }//end of display
        
        //Attach event listener to h3 elements to invoke display function when clicked
        
            $("h3").click(display);