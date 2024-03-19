let grade = 90;
switch (true) {
    case grade >= 90:
        console.log('Excellent');
        break;
    case grade >= 80:
        console.log('Good');
        break;
    case grade >= 70:
        console.log('Fair');
        break;
    case grade >= 60:
        console.log('Poor');
        break;
    default:
        console.log('Invalid Grade');
}