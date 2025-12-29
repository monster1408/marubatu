function winlist_set(size){
    win_list = [];
    for (i = 0; i < size*2; i++){
        win_list.push([]);
    }
    for (i = 1; i <= size*size; i+=size){
        for (j = 0; j < size; j++){
            win_list[j].push(i+j);
        }
    }
    for (i = 1; i <= size; i++){
        
        for (j = 0; j < size; j++){
            win_list[size+j].push(i + size*j);
        }
    }
    console.log(win_list);
    return win_list;
}

module.exports = {
    winlist_set: winlist_set
};
