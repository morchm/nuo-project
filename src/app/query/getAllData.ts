export const getAllData = async() => {

    // const res = await fetch('https://mocki.io/v1/b1baf75a-daa7-42ab-8f23-7e3c8f8720c8');
    const res = await fetch('https://mocki.io/v1/bbacca87-65e7-4847-9dd3-149277bea99e');

    if (!res.ok) throw new Error('fail');

    return res.json();

}