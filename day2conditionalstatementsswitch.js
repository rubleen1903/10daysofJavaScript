function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0])
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
             return "A";
             break;
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
            return "B";
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            return "C";
            break;
        default: return "D";
    }
    return letter;
}

