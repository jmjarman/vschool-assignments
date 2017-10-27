function daysAgo(n){
    let today = new Date()
    today.setDate(today.getDate()-n)
    console.log(today.toDateString());

}
daysAgo()
