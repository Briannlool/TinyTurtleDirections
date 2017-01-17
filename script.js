/* global TinyTurtle */ 
/* global forward */ 
/* global left */
/* global right */ 
/* global stamp */ 
/* global penUp */


TinyTurtle.apply(window); 
/*
forward (35);
left (90);
forward (70);
left (90); 
forward (35);
left (90); 
forward (70);
stamp ();

forward (60);
right (120);
forward (60);
right (120); 
forward (60);
stamp ();
 
right (30); 
forward (35);
left (60);
forward (40);
left (60);
forward (40);
stamp ();
 */
/*
penUp;  
right (30); 


right(60);
forward (30);
left (60); 
forward (30);
left (60);
forward (30);
left (60);
forward (30);
left (60);
forward (30);
left (60);
forward (30);
right (120);
forward (20);
stamp ();
*/
/*i represents the sides present */
function box(length) {
    for (var i = 0; i < 4 ; i++ )
    {
        forward(length); 
    right(90); 
    }
}
box(70)
