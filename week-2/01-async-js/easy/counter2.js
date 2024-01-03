let i=0;

async function counter(){
    while(true){
        let p = new Promise(function(resolve){
            setTimeout(()=>{resolve();}, 2000);
        });
        await p;
        console.log(i);
        i++;
    }
};

counter();