import readlineSync from 'readline-sync';
//const greeting = () => {
    
//    console.log(`Hello, ${userName}!`);
//};

const getUserName = () => {
    const userName = readlineSync.question('May I have your name? ');
    
    console.log(`Hello, ${userName}`);
};

export default getUserName;


