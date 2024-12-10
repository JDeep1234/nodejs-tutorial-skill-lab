const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data fetched successfully!'), 2000);
    });
};

const showData = async () => {
    const data = await fetchData();
    console.log(data);
};

showData();
