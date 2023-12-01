// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
let myArr = [6,7,8,9,10];
// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
let sum = myArr.reduce((firstNumber , secondNumber) => firstNumber + secondNumber);
console.log(sum);
// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
let v = 6;
let contain = arr.includes(v);
console.log(contain ? v : "not found");
// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
let moreThan0 = arr.every((item) => item > 0);
console.log("lớn hơn 0 hết : " + moreThan0);
// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
let moreThan5 = arr.find((item) => item > 5);
console.log(moreThan5);
// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
let [first,...rest] = arr;
console.log("first :" + first);
console.log(rest);
// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let people = [
    {name: "An", age: 19},
    {name: "Huy", age:19}
]
let [firstPerson, secondPerson] = people;
console.log(firstPerson.name, firstPerson.age);
console.log(secondPerson.name, secondPerson.age);
// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
function fsum(...item){
    return item.reduce((sum, item1) => sum + item1);
}
console.log(fsum(1,2,3));
// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
function welcome(...name){
    return `Welcome, ${name.join(", ")}, ...`;
}
console.log(welcome("Tran Van A","Tran Van B","Tran Van C"));
// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
let book = {
    title: "Chí Phèo",
    author: "Nam Cao",
    pages: 500 ,

    displayInfo(){
        console.log(`title: ${this.title}`)
        console.log(`author: ${this.author}`)
        console.log(`pages: ${this.pages}`)
    }
}
book.displayInfo(); 