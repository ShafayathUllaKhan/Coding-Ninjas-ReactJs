// middleware is a function which has 3 parameters (store, next,action)

//middleware works with currying

export const loggerMIddleware = (store)=>{
    return function(next){
        return function(action){
            // log actions
            console.log("[LOG]: "+ action.type + " "+ new Date().toString());
            next(action);
            // log the modified state of app.
            console.log(store.getState());
        }
    }
}