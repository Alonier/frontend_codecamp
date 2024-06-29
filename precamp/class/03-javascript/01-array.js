const mail = "codecamp@gmail.com";
// undefined
mail.includes("@");
// true
mail.split("@");
// (2) ['codecamp', 'gmail.com']
mail;
// 'codecamp@gmail.com'
mail.includes("@")[0];
// undefined
mail.split("@");
// (2) ['codecamp', 'gmail.com']
mail.split("@")[0];
// 'codecamp'
let userMail = mail.split("@")[0];
// undefined
userMail;
// 'codecamp'
let company = mail.split("@")[1];
// undefined
company;
// 'gmail.com'
let maskingmail = [];
// undefined
maskingmail.push(userMail[0]);
// 1
maskingmail.push(userMail[1]);
// 2
maskingmail.push(userMail[2]);
// 3
maskingmail.push(userMail[3]);
// 4
maskingmail.pop();
// 'e'
maskingmail.pop();
// 'd'
maskingmail.pop();
// 'o'
maskingmail.pop();
// 'c'
for (let i = 0; i < userMail.length; i++) {
  if (userMail.length - i > 4) {
    maskingmail.push(userMail[i]);
  } else {
    maskingmail.push("*");
  }
}
// 8
maskingmail;
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingmail.join("");
// 'code****'
