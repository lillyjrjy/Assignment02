let oneNum = prompt('enter first number')
let twoNum = prompt('enter secound number')
if(oneNum>twoNum){
    document.write(oneNum)
} else if(oneNum===twoNum){
    document.write(oneNum + " and "+ twoNum)
}else {
    document.write(twoNum)
}