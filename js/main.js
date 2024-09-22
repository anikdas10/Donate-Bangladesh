 const balance = document.getElementById("balance");
  const historyDiv = document.getElementById("history-div");
function toNumber(id){
    return document.getElementById(id).value;
}
document.getElementById("donate-noakhali").addEventListener("click",function(){
     const Donate1 = parseFloat(toNumber("donate-iput1"));
    if(Donate1<0 || isNaN(Donate1)){
        alert('Invalid Input');

        return;
    }
   const mainBalance = parseFloat(balance.innerText);
  
   document.getElementById("donateMoney1").innerText = Donate1;
   balance.innerText = mainBalance - Donate1;
   document.getElementById("donate-iput1").value = "";
   const div = document.createElement('div');
   div.classList.add("border","p-6","rounded-xl","space-y-5");
   div.innerHTML = `<h3 class="text-xl font-bold">${Donate1} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h3>
   <p>Date: ${new Date()}</p>`
  
  historyDiv.insertBefore(div,historyDiv.firstChild);

});
// donate for feni

document.getElementById("donate-feni").addEventListener("click",function(){
     const Donate2 = parseFloat(toNumber("donate-iput2"));
    if(Donate2<0 || isNaN(Donate2)){
        alert('Invalid Input');

        return;
    }
   const mainBalance = parseFloat(balance.innerText);
  
   document.getElementById("donateMoney2").innerText = Donate2;
   balance.innerText = mainBalance - Donate2;
   document.getElementById("donate-iput2").value = "";
   const div = document.createElement('div');
   div.classList.add("border","p-6","rounded-xl","space-y-5");
   div.innerHTML = `<h3 class="text-xl font-bold">${Donate2} Taka is Donated for Flood Relief in Feni, Bangladesh</h3>
   <p>Date: ${new Date()}</p>`;

  historyDiv.insertBefore(div,historyDiv.firstChild);

});
// qutamovement
document.getElementById("donate-quta").addEventListener("click",function(){
     const Donate3 = parseFloat(toNumber("donate-iput3"));
    if(Donate3<0 || isNaN(Donate3)){
        alert('Invalid Input');

        return;
    }
   const mainBalance = parseFloat(balance.innerText);
  
   document.getElementById("donateMoney3").innerText = Donate3;
   balance.innerText = mainBalance - Donate3;
   document.getElementById("donate-iput3").value = "";
   const div = document.createElement('div');
   div.classList.add("border","p-6","rounded-xl","space-y-5");
   div.innerHTML = `<h3 class="text-xl font-bold">${Donate3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h3>
   <p>Date: ${new Date()}</p>`
 
  historyDiv.insertBefore(div,historyDiv.firstChild);

});
// hidden button
document.getElementById("history").addEventListener("click",function(){
    document.getElementById('history').classList.add("bg-[#B4F461]");
    historyDiv.classList.remove('hidden');
    document.getElementById("donate-section").classList.add("hidden");
    document.getElementById("donation").classList.remove("bg-[#B4F461]");
});
// donation section
document.getElementById("donation").addEventListener("click",function(){
    document.getElementById('history').classList.remove("bg-[#B4F461]");
    historyDiv.classList.add('hidden');
    document.getElementById("donate-section").classList.remove("hidden");
    document.getElementById("donation").classList.add("bg-[#B4F461]");
});