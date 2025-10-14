function find_fib(n){
    if (n<=2) return 1;
    return find_fib(n-1) + find_fib(n-2);
}
function invoke_fib(n,panel){
    fib=find_fib(n);
    panel.innerHTML=fib;
}
function invoke_list_fib(n,panel){
    panel.innerHTML="";
    for (i=1;i<=n;i++){
        r=Math.floor(Math.random()*256);
        g=Math.floor(Math.random()*256);
        b=Math.floor(Math.random()*256);
        bg="rgb("+r+","+g+","+b+")";
        p="<p style='background-color:"+bg+"'>"+find_fib(i)+"</p>";
        panel.innerHTML+=p;
    }
}