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

// Fungsi dengan banyak promise
// Menggunakan promise.all
function dataFetch1(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result1 = 'Fetch API 1 Done';
            resolve(result1);
        }, 2000);
    });
};

function dataFetch2(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result2 = 'Fetch API 2 Done';
            resolve(result2);
        }, 3000);
    });
};

async function fetchAllData() {
    try {
        const [data1, data2] = await Promise.all([dataFetch1(), dataFetch2()]);
        console.log(data1);
        console.log(data2);
    } catch {
        console.error(Error);
    }
}

fetchAllData();