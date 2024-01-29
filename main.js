var search = function(nums, target) {
    let comeco = 0
    let final = nums.length - 1

    do{
        let meio = parseInt((comeco + final) / 2)
        
        if(nums[meio] == target){
            return console.log(`O número ${nums[meio]} está na posição ${meio}`);
        }

        if(target > nums[meio]){
            comeco = meio + 1
        }else if (target < nums[meio]){
            final = meio - 1
        }
    }while(comeco <= final){
        return -1
    }
}

search([1, 2, 3, 4, 5], 5)