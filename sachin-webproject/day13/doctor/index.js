document.querySelector("form").addEventListener("submit",addlist);

function addlist(event){
    event.preventDefault();
    let docname = document.querySelector("#name") .value;
    let docid   = document.querySelector("#docID").value;
    let dept    = document.querySelector("#dept") .value;
    let exp     = document.querySelector("#exp")  .value;
    let mail   = document.querySelector("#email")  .value;
    let mbl     = document.querySelector("#name") .value;
    
    let obj={
        docname,docid,dept,exp,mbl,mail
    }
  
    let row = document.createElement("tr");
   
    let name = document.createElement("td");
    name.innerText=obj.docname;
    let doid = document.createElement("td");
    doid.innerText=obj.docid;
    let specs = document.createElement("td");
    specs.innerText=obj.dept;
    let expr = document.createElement("td");
    expr.innerText=obj.exp;
    let role = document.createElement("td");
    if(Number(obj.exp)>5){
        role.innerText="Senior";
    }else if(Number(obj.exp)>=2 && Number(obj.exp)<=5){
        role.innerText="Junior";

    }else{
        role.innerText="Trainee";
    }
    let email = document.createElement("td");
    email.innerText=obj.mail;
    let mobil = document.createElement("td");
    mobil.innerText=obj.mbl;

    let del = document.createElement("td");
    del.innerText="Delete";
    del.style.backgroundColor="red"
    del.setAttribute("class",obj.docid)
    row.append(name,doid,specs,expr,email,mobil,role,del)
    
//   console.log(row)
    document.querySelector("tbody").append(row);
    del.addEventListener("click",remove)
    
}
//  del.addEventListener("click",deleteRow(this));

function remove(event){
    console.log(obj.docid)
    console.log(event.target.class)

}

