/*
===============================================================================
Looping a triangle
===============================================================================
Write a loop that makes seven calls to console.log to
output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of
a string by writing .length after it.
*/

let char = "#";

for (let counter = 0; counter < 7; counter++) {
  console.log(char);
  char += "#";
}
