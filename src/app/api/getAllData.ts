export const getAllData = async() => {

    // const res = await fetch('https://mocki.io/v1/b1baf75a-daa7-42ab-8f23-7e3c8f8720c8');
    const res = await fetch('https://mocki.io/v1/d9236c64-45b1-48f6-a766-49ddb023a8b0');

    if (!res.ok) throw new Error('fail');

    return res.json();

}