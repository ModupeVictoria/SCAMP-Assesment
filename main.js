

function fibonacci(n) {
    if (n==1) {
        return[0,1];
    }
    else{
        var s = fibonacci(n-1);
       //s.push(s.length-1+s.length-2);
        s.push(s[s.length-1]+s[s.length-2]);
        return s;
    }
    
};
document.write(fibonacci(10));