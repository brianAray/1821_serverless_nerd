// Async Await

/**
 * These are used to work with async operations in a more synchornous and readable manner
 * 
 * Introduced in ES8 and provide some keywords async and await
 */

// async function
/**
 * The async keyword is used to declare a function as asynchronous
 * An async function always returns a promise, which allows you to use await inside the function to pause execution until a promise
 * is resolved or rejected
 */

async function fetchData(){
    // async operation here
}

// await keyword
/**
 * This keyword is used inside an async function to pause execution until it is settled
 */

async function fetchAndProcessData(){
    const data = await fetchData(); // wait for the fetchData promise to resolve
    // process data here
}

// Error Handling
/**
 * You can use try catch blocks to handle errors when using await
 * If a promise is rejected inside an await expression, the code inside the catch block will be executed
 */

async function fetchDataAndHandleError(){
    try{
        const data = await fetchData();
    }catch(error){
        // handle error
    }
}

// Parallel await with Promise.all()

async function fetchParallelData(){
    const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
    // process data1 and data2
}

// Top Level Await
// This can be done in ES11, you can use await at the top level of your module making it easier to handle async operational setup