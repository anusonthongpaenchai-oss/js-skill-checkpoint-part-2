// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try {
        const  response = await fetch ('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const result = data
                          .filter((data) => data['name'].length > 17)
                          .map((data) => data.name)
        console.log(result)
    } catch(error){
        console.log(error)
    }
}

getUsers()