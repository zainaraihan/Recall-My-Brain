// Contoh Sederhana
function delay(ms: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, ms);
    });
}

delay(1000).then((message) => {
    console.log(message);
});

// Penggunaan Async Await
async function runAsyncFunction() {
    try {
        const result = await delay(2000);
        console.log(result);
    } catch {
        console.error(Error);
    }
}

runAsyncFunction()