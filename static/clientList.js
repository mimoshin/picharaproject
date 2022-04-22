function loadProfiles(client){
    var perfilList = document.getElementById('perfilList');
    perfilList.innerHTML = '';
    $.get('/profiles/Qprofiles?client='+client,function(response){
        respJSN = JSON.parse(response);
        respJSN.forEach((element,index)=> {
            let row = perfilList.insertRow(index);
            let cellname = row.insertCell(0);
            let cellstatus = row.insertCell(1);
            let cellbuttons = row.insertCell(2);
            cellname.classList.add('has-text-white','has-text-centered','clientlist');
            cellstatus.classList.add('has-text-white','has-text-centered','clientlist');
            cellstatus.dataset.target = element.id;
            cellbuttons.classList.add('has-text-white','has-text-centered','clientlist');
            cellname.innerHTML = element.name;
            if(element.status == 'true'){
                let desasigned = document.createElement('button');
                desasigned.classList.add('button','is-small','is-danger','asdsButton');
                desasigned.innerHTML = 'Desasignar';
                desasigned.id=element.id;
                desasigned.dataset['func'] = 'des';
                cellstatus.innerHTML = 'Asignado';
                cellbuttons.append(desasigned);
            }
            else{
                let asigned = document.createElement('button');
                asigned.innerHTML = 'Asignar';
                asigned.classList.add('button','is-small','is-success','asdsButton');
                asigned.id=element.id;
                asigned.dataset['func'] = 'as';
                cellstatus.innerHTML = 'No Asignado';
                cellbuttons.append(asigned);
                
            }
        });
    })
}




