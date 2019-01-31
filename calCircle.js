let stdin = process.openStdin()
console.log('Enter your radius: ')
stdin.addListener("data", (r)=> {
    let area
    if( r > 0){
        area = 3.14 * r * r
        console.log('area of circle = ' + area)
    }
    else
        console.log('enter your radius please')
    
    stdin.destroy()
})