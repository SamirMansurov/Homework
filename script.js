let grade = prompt ("оценка")

switch (grade) {
    case 'A':
        console.log("отлично");
        
    case 'B':
        console.log("Хорошо");
        
    case 'C':
        console.log("Удовлетворительно");
        
    case 'D':
        console.log("Неудовлетворительно");
        break

        default:
            console.log("Неккоректная оценка");
        break
}
