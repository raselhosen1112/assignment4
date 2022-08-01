
    /*document.getElementById("plusBtn").addEventListener("click",function(){
       const firstClassCount=document.getElementById("firstClassCount").value;
       let firstClassNumber=parseInt(firstClassCount);
      
       const newfirstClassCount=firstClassNumber+1;
       document.getElementById("firstClassCount").value=newfirstClassCount;
    })
    */
    function handleButton(idClassCount, isPlus)
    {
    
       let ClassNumber= getInput(idClassCount);
       var newClassCount=ClassNumber;
      if(isPlus==true)
      {
        newClassCount=ClassNumber+1;
      }
      else if(isPlus==false && ClassNumber>0)
      {
        newClassCount=ClassNumber-1;
      }
       document.getElementById(idClassCount).value=newClassCount;
       calculateAll();
    }
    function calculateAll()
    {
           const  firstClassCountNumber=getInput("firstClassCount");
        
       const economyClassCountNumber= getInput("economyClassCount");
       const subTotalPrice=150*firstClassCountNumber + 100*economyClassCountNumber;

       document.getElementById("subTotal").innerText=subTotalPrice;
       document.getElementById("vat").innerText=subTotalPrice*0.1;
       document.getElementById("total").innerText=subTotalPrice+(subTotalPrice*0.1);
       
    }
    function getInput(idClassCount)
    {
        const ClassCount=document.getElementById(idClassCount).value
        let newClassCount=parseInt(ClassCount);
        return newClassCount;
    }
    document.getElementById("bookBtn").addEventListener("click",function(){
     const bookingForm=document.getElementById("bookingForm");
     bookingForm.style.display="none";
     const bookingSheet=document.getElementById("booking-sheet");
    bookingSheet.style.display="block";
    const  firstClassCountNumber=getInput("firstClassCount"); 
        const economyClassCountNumber= getInput("economyClassCount");
        document.getElementById("Fcount").innerText=firstClassCountNumber;
        document.getElementById("Fprice").innerText=150*firstClassCountNumber;
        document.getElementById("Ecount").innerText=economyClassCountNumber;
        document.getElementById("Eprice").innerText=100*economyClassCountNumber;
        document.getElementById("Tcount").innerText=firstClassCountNumber+economyClassCountNumber;
        document.getElementById("Tprice").innerText=150*firstClassCountNumber + 100*economyClassCountNumber;
       
    })