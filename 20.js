// try-catch block to handle an error of API fetch

const fetchData = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await data.json();
    console.log(res);
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
const result = fetchData();
console.log(result);
