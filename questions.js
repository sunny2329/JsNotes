//! Min Swaps to sort

function minSwapsToSort(arr){
    const sortedArr = [...arr].sort((a,b) => a-b);

    const indexMap = new Map();

    sortedArr.forEach((v,ind) => {
        indexMap.set(v, ind);
    })

    const visited = new Array(arr.length).fill(false);
    let swaps = 0;

    for(let i = 0; i< arr.length;i++){
        if(visited[i] || indexMap.get(arr[i]) == i){
            continue;
        }

        let cycleLength = 0;
        let current = i;
        while(!visited[current]){
            visited[current] = true;
            current = indexMap.get(arr[current]);
            cycleLength++;
        }

        if(cycleLength > 1){
            swaps += (cycleLength - 1);
        }
    }
}