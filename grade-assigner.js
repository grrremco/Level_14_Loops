function assignGrade(i) {
      if (i > 90) {
        return 'A';
    } else if (i > 80) {
        return 'B';
    } else if (i > 70) {
        return 'C';
    } else if (i > 65) {
        return 'D';
    } else {
        return 'E';
    }
}

for (var i = 60; i <= 100; i++) {
    console.log(`Voor ${i} punten, krijg je een ${assignGrade(i)}`); 
} 

