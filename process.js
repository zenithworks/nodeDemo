setTimeout( ()=> process.exit(), 1000 )

process.on('exit', ()=> {
    console.log('The process has exited')
})