const getstoredbook=(key)=>{
    const storebooks=localStorage.getItem(key);
    if(storebooks){
        return JSON.parse(storebooks);
    }
    return [];
}
const savelocalstorage=(key,id)=>{
    const storebook=getstoredbook(key);
    const existstorebook=storebook.find(bookid=>bookid===id);
    if(!existstorebook){
        storebook.push(id);
        localStorage.setItem(key,JSON.stringify(storebook))
    }
}
export {savelocalstorage,getstoredbook};