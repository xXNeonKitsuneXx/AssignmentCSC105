function billingFunction(){
    let check = document.getElementById("same")
    // document.querySelectorAll("#same")
    if(check.checked){
        let Sname = document.getElementById("shippingName").value
        let Szip = document.getElementById("shippingZip").value
        document.getElementById("billingName").value = `${Sname}`
        document.getElementById("billingZip").value = `${Szip}`
    }
}