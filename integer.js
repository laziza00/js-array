
// =======================array 1
// let newArray = 10
// const c = [];
// for (let i = 0; i<=newArray; i++) {
//     if (i % 2 == 1) {
//             c[c.length] = i
//     }
// }
// console.log(c);


// =======================array 2
// let newArray = 10
// const c = [];
// for (let i = 0; i<=newArray; i++) {
//             c[c.length] = 2**i
// }
// console.log(c);


// =======================array 3

// let newArray = 10;
// let a = 2;
// let d = 4
// let count = a
// const arr = [];
// for (let i = 0; i<=newArray; i++) {
//             arr[arr.length] = count;
//             count = a+=d
// }
// console.log(arr);


// =======================array 4

// let newArray = 7;
// let a = 2;
// let d = 4
// let count = a
// const arr = [];
// for (let i = 0; i<=newArray; i++) {
//             arr[arr.length] = count;
//             count = a*=d
// }
// console.log(arr);


// =========================array 5
  
    // let fib = [0, 1];
    // let data = [];
    // let num = 10
    // for(let i = 2; i < num; i++) {
    //   fib[i] = fib[i - 1] + fib[i - 2]; 
    //   data[data.length]=(fib[i]);
    // }
    // console.log(data);
    

// =====================================array 6

    // let data = [];
    // let num = 10;
    // let A;
    // let B;
    // for (let i =0; i<=num; i++) {

    //     data[data.length] += i;
    // }



// =====================================array 7
 
// n = 10;
// let arr =[1,2,3,4,5,6,7,8,9,10]
// let newArr = []
// for (let i = arr.length; i>=0; i--) {
//     newArr[newArr.length] = i
// }
// console.log(newArr);



// =====================================array 8

// arr = [4,5,7,8,6,9]
// let b = 0
// let newArr = []
// for (let i = 0; i <= arr.length; i++){
//     arr[0] = 0;
//     if (arr[i] %2 ==1 && arr[0]<arr[i]) {
//         newArr[newArr.length] =arr[i]
//         b++;
//     }
// }
// console.log(newArr);
// console.log("toq sonlar soni", b, "ta" );


// =====================================array 9

// arr = [4,5,7,8,6,9]
// let b = 0
// let newArr = []
// for (let i = arr.length; i >= 0; i--){
//     if (arr[i] %2 ==0) {
//         newArr[newArr.length] =arr[i]
//         b++;
//     }
// }
// console.log(newArr);
// console.log("toq sonlar soni", b, "ta" );

// =====================================array 10

// arr = [4,5,7,8,6,9]
// let b = 0
// let newArr = []
// for (let i=0, j=arr.length; i<=arr.length, j>=0; i++, j--) {
//         if (arr[i] % 2==0) {
//             newArr[newArr.length] = arr[i];
//         }
//         else {
//             newArr[newArr.length] = arr[i];       
//         }
//     }
// console.log(newArr);


// =====================================array 18

// function MyFunc(array) {
//     for (let i = 0; i <= array.length; i++) {
//       let index = array[arr.length - 1];
//       if (array[i] < index) {
//         console.log(array[i]);
//         return array[i];
//       } else {
//         console.log(`yo'q`);
//         return 0;
//       }
//     }
//   }
  
//   let arr = [5, 3, 2, 7, 4, 3, 9];
  
//   MyFunc(arr);



// =====================================array 19

// function MyFunc(array) {
//   for (let i = 0; i <= array.length; i++) {
//     let index = array[arr.length - 1];
//     if (array[0] < index && array[array.length-1] > index) {
//       console.log(i);
//       return i;
//     } else {
//       console.log(`yo'q`);
//       return 0;
//     }
//   }
// }

// let arr = [5, 3, 2, 7, 4, 3, 9];

// MyFunc(arr);



// =====================================array 20

// let arr = [5, 3, 2, 7, 4, 3, 9, 7,3];
// let k =2;
// let l =6;
// let sum =0

// for (let i =k+1; i< l; i++) {
//   sum += arr[i]
// }
// console.log(sum);

// =====================================array 21

// let arr = [5, 3, 2, 7, 4, 3, 9, 7,3];
// let k =2;
// let l =6;
// let sum =0
// let count = 0

// for (let i =k+1; i< l; i++) {
//   sum += arr[i]
//   count ++;
// }
// console.log(sum/count);

// =====================================array 22


// let arr = [5, 3, 2, 7, 4, 3, 9, 7,3];
// let k =2;
// let l =6;
// let sum =0

// for (let i = 0; i<arr.length; i++) {
//     if (i<k || i >l){
//       sum += arr[i]
//     }
// }
// console.log(sum);

// =====================================array 23


// let arr = [5, 3, 2, 7, 4, 3, 9, 7,3];
// let k =2;
// let l =6;
// let sum =0
// let count = 0

// for (let i = 0; i<arr.length; i++) {
//     if (i<k || i >l){
//       sum += arr[i];
//       count ++;
//     }
// }
// console.log(sum/count);




// =====================================array 24

// let arr = [3, 6, 9, 12, 13];
// let a = arr[1] - arr[0];
// let count = 0;
// for(let i = 1; i < arr.length; i++){
//   if(arr[i] == arr[i - 1] + a){
//     count += 0;
//   } else{
//     count++;
//     break;
//   }
// }
// if(count == 0){
//   console.log(a);
// } else{
//   console.log(0);
// }


// =====================================array 25


// let arr = [3, 9, 27, 81, 243];
// let a = Math.floor(arr[1] / arr[0]);
// let count = 0;
// for(let i = 1; i < arr.length; i++){
//   if(arr[i] == arr[i - 1] * a){
//     count += 0;
//   } else{
//     count++;
//     break;
//   }
// }
// if(count == 0){
//   console.log(a);
// } else{
//   console.log(0);
// }


// =====================================array 26

// let arr = [1,2,1,2,1,2,1,2]
// let natija = true;

// if (arr[0] %2==1){
//  for (let i=0; i<=arr.length; i++) {
//     if ( i %2 ==0 && arr[i] %2==0){
//         console.log("0");
//         break;
//     }
//     else if (i %2 == 1 && arr[i] % 2==1){
//         console.log(i);
//         break;
//     }
//  }
// }
//  else {
//     for (let i=0; i<=arr.length; i++) {
//         if ( i %2 ==0 && arr[i] %2==0){
//             console.log("0");
//             break;
//         }
//         else if (i %2 == 1 && arr[i] %2==1){
//             console.log(i);
//             break;
//         }
//      }
// }




// =====================================array 28

// let arr = [22, 4, 11, 5, 6, 7, 11, 3, 12];
// let newArr = [];
 
// for(let i = 0; i < arr.length; i++){
//   if(i % 2 == 0){
//     newArr[newArr.length] = arr[i];
//   }
// }
// console.log(Math.min(...newArr));


// =====================================array 27

// let arr = [-2, 5, -10, 12, 3, -4, -5]
// let natija = 0;

// if (arr[0] <0){
//  for (let i=0; i<=arr.length; i++) {
//     if ( i %2 ==0 && arr[i] > 0){
//         natija = i;
//         break;
//     }
//     else if (i %2 == 1 && arr[i] <0){
//         natija = i;
//         break;
//     }
//  }
// }
//  else {
//     for (let i=0; i<=arr.length; i++) {
//         if ( i %2 ==0 && arr[i] < 0){
//             natija = i;
//             break;
//         }
//         else if (i %2 == 1 && arr[i] >0){
//             natija = i;
//             break;
//         }
//      }
// }
// console.log(natija);


// =====================================array 29

// let arr = [22, 43, 11, 5, 6, 7, 11, 31, 12];
// let newArr = [];
 
// for(let i = 0; i < arr.length; i++){
//   if(i % 2 != 0){
//     newArr[newArr.length] = arr[i];
//   }
// }
// console.log(Math.max(...newArr));

// =====================================array 51

// let a = [1, 2, 3, true]
// let b = [2, 5, 6, null]
// let newTemp = []

// for (let i =0; i<a.length; i++) {
//         newTemp[i] = a[i];
//         a[i] = b[i];
//         b[i] = newTemp[i]   
// }
// console.log(a, b);


// =====================================array 52

// let a = [22, 43, 11, 5];
// let b = []
// for (let i=0; i<a.length; i++) {
//     if (a.length <=5) {
//         b[b.length] =2 * a[i];
//     }
//         else {
//             b[b.length] = a[i] /2 
//         }
// }
// console.log(b);

// =====================================array 54

// let a = [22, 43, 11, 5, 42, 8, 6];
// let b = []
// let count = 0

// for (let i=0; i<a.length; i++) {
//     if (a[i] % 2==0) {
//         b[b.length] = a[i];
//         count++
//     }
// }
// console.log(b, count);

// =====================================array 55


// let a = [22, 43, 11, 5, 42, 8, 6,1,11, 23, 25, 20];
// let b = []
// let count = 0

// for (let i=1; i<a.length; i++) {
//     if (i%2==1){
//     b[b.length]= a[i]
//     count ++;
//     }
// }
// console.log(b, count);


// =====================================array 56

// let a = [22, 43, 11, 5, 42, 8, 6,1,11, 23, 25, 20];
// let b = []
// let count = 0

// for (let i=1; i<a.length; i++) {
//     if (i%3==0){
//     b[b.length]= a[i]
//     count ++;
//     }
// }
// console.log(b, count);

// =====================================array 57

// let a = [22, 43, 11, 5, 42, 8, 6,1,11, 23, 25, 20];
// let b = []

// for (let i=0; i<a.length; i++) {
//     console.log(a[i]);
//     i+=2;
// }
// for (let i=1; i<a.length; i++) {
//     console.log(a[i]);
//     i+=2;
// }


// =====================================array 58

