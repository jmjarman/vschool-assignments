function findDuplicates(str) {
    var arr = str.split("");
    var dupeArr = []

    for (var i = 0; i < arr.length; i++){
        console.log(arr[i] + "---" + arr[i + 1])
        if (arr[i] === arr[i + 1]) {
            dupeArr.push(arr[i])
        }
    }
    console.log(dupeArr)
}
findDuplicates("bookeeper larry")
