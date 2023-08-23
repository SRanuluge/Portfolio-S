export const setLocalStorage =  (id:string,param:string) => 
       typeof window !== "undefined" &&  localStorage.setItem(`${id}`,param )

export const getLocalStorageValue = (id:string) => typeof window !== "undefined" && localStorage.getItem(id)

