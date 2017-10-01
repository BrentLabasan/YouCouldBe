export default function () {
    let optionsScreen = document.createElement("div");        // Create a <button> element
    optionsScreen.id = "optionsScreen";
    optionsScreen.style.width = "100%";
    optionsScreen.style.height = "100%";
    optionsScreen.style.zIndex = "9999999";
    optionsScreen.style.visibility = "hidden";
    optionsScreen.style.backgroundColor = "#053F6F";
    optionsScreen.style.position = "absolute";
    optionsScreen.style.top = "0";
    optionsScreen.style.left = "0";
    let t = document.createTextNode("OPTIONS");       
    optionsScreen.appendChild(t);                               
    
    
    
    
    document.body.appendChild(optionsScreen);      
    
    
    let table = document.createElement("table");
    table.id = "table";
    optionsScreen.appendChild(table);
    
    
    // let i = 0;
    // DEFAULT_WHITELIST.forEach(function(element) {
    //     // console.log(element);
    //     let tr = document.createElement("tr");
    //     tr.id = "meh" + i;
    //     let td = document.createElement("td");
    //     table.appendChild(tr);
    //     tr.appendChild(td);
    //     // let t = document.createTextNode(element);
    //     let input = document.createElement("input");
    //     input.type = "text";
    //     input.defaultValue = element;
    //     td.appendChild(input);  
    
    //     i++;
    // });
    
    for (let i = 0; i < DEFAULT_WHITELIST.length; i++ ) {
        // console.log(element);
        let tr = document.createElement("tr");
        tr.id = "meh" + i;
        let td = document.createElement("td");
        table.appendChild(tr);
        tr.appendChild(td);
        // let t = document.createTextNode(element);
        let input = document.createElement("input");
        input.type = "text";
        input.defaultValue = DEFAULT_WHITELIST[i];
        td.appendChild(input);  
    
    
        let btnSave = document.createElement("button");        // Create a <button> element
        td.appendChild(btnSave);
        let u = document.createTextNode("Save");
        btnSave.appendChild(u);
    
        let btnDelete = document.createElement("button");        // Create a <button> element
        td.appendChild(btnDelete);
        let v = document.createTextNode("Delete");
        btnDelete.appendChild(v);  
    }
    
    // console.log(element);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    table.appendChild(tr);
    tr.appendChild(td);
    // let t = document.createTextNode(element);
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "domain e.g. facebook.com";
    td.appendChild(input);  
    
    
    let btnSave = document.createElement("button");        // Create a <button> element
    td.appendChild(btnSave);
    let u = document.createTextNode("Add");
    btnSave.appendChild(u);    
}