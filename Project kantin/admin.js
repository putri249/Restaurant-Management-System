// TOTAL PENJUAL
const totalSeller =
    document.querySelectorAll("tbody tr").length;

// TOTAL PESANAN
let totalOrder = 0;
const rows =
    document.querySelectorAll("tbody tr");
    rows.forEach(function(row){
    const orderText = row.children[1].textContent;
    totalOrder += parseInt(orderText);
});

// UPDATE CARD
const statNumbers =
    document.querySelectorAll(".stat-number");
    statNumbers[0].textContent =
    totalSeller;
    statNumbers[1].textContent =
    totalOrder;

// CEK STATUS PENJUAL
rows.forEach(function(row){
    const badge = row.querySelector(".badge");
    if(badge.classList.contains("aktif")){
        badge.textContent = "Aktif";
    }else{
        badge.textContent = "Nonaktif";
    }

// EVENT LISTENER STATUS
rows.forEach(function(row){
    row.addEventListener("click", function(){
        const badge =
            row.querySelector(".badge");
        if(badge.classList.contains("aktif")){
            badge.classList.remove("aktif");
            badge.classList.add("nonaktif");
            badge.textContent = "Nonaktif";
        }else{
            badge.classList.remove("nonaktif");
            badge.classList.add("aktif");
            badge.textContent = "Aktif";
        }
    });
});
});