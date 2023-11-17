export const getAllData = async() => {

    const res = await fetch('https://mocki.io/v1/e9132029-1c5b-4298-ad5c-30e010aa4cc5');

    if (!res.ok) throw new Error('fail');

    return res.json();

}