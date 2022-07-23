import conifg from "../conifg"

/**
 * Storege二次封装
 * */ 
export default {
    getStorege(){
        return JSON.parse(window.localStorage.getItem(conifg.namespace)) || {}
    },
    setItem(key,val){
        let storage = this.getStorege()
        storage[key] = val
        window.localStorage.setItem(conifg.namespace,JSON.stringify(storage))
    },
    getItem(key){
        return this.getStorege()[key]
    },
    clearItem(key){
        let storage = this.getStorege()
        delete storage[key]
    },
    clearAll(){
        window.localStorage.clear()
    }
}