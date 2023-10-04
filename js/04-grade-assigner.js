let choice = prompt('Input a number from 1 to 100 inclusive')
let range
(choice>100||choice<1)? (window.alert('only numbers between 1 and 100 are accepted')):range = true

if(choice<60){
    document.write('You received an F')
}else if(choice<70){
    document.write('You received a D')
}else if(choice<80){
    document.write('You received a C')
}else if(choice<90){
    document.write('You received a B')
}else if(choice<101){
        document.write('You received an A')
}