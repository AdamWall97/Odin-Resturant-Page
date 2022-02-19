


    //controls flow
    
    const createDOMdiv = (classnameadd,IDadd,parentID,parentClass) => {
        //Create Div Function (Classname of Div, ID of Div,parentID,parentClass)
        const element = document.createElement('div');
        console.log(classnameadd,IDadd);
        if(classnameadd != ""){
            element.classList.add(classnameadd);
        }
        if(IDadd != ""){
            element.id = IDadd
        }
        if(parentID != "" ){
            if(parentID != undefined){
            const parent = document.getElementById(parentID);
            parent.appendChild(element);
        }
        }
        if(parentClass != ""){
            if(parentClass != undefined){
                const parent2 = document.getElementsByClassName(parentClass)[0];
                parent2.appendChild(element);
            }
        }
        return element;
    };


    const addHourList = (di) => {
        //Add Hours
        var weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
        for(var i =0;i < 8;i++){
            var li = document.createElement("li");
                li.id = weeks[i];
                li.innerText = weeks[i] + ": 8am - 5pm";
                di.appendChild(li);
        }
        
    }

    const createHeader = (di,name) => {
        //Add Header
        var h = document.createElement("h1");
        var t = document.createTextNode(name);
        h.appendChild(t);
        di.appendChild(h);

    }

    const setupPage  = () =>  {
    

    const page = document.getElementById("content");
   
    

    //Class ID ParentID ParentClass 
    const header = createDOMdiv("header","","content");
    const main = createDOMdiv("main","","content");
    const homeTab = createDOMdiv("tab","home","","header");
        homeTab.innerText = "Home";
    const menuTab = createDOMdiv("tab","menu","","header");
        menuTab.innerText = "Menu";
    const aboutTab = createDOMdiv("tab","about","","header");
        aboutTab.innerText = "About";



    const mainLoc = createDOMdiv("","location","","main");
   
    createHeader(mainLoc,"Location"); 
    mainLoc.innerHTML = mainLoc.innerHTML + "123 Madeup Street NE";   
    const mainName = createDOMdiv("","name","","main");
    mainName.innerText = "My Resturant";
    const mainIntro = createDOMdiv("","introduction","","main");
    mainIntro.innerText = "This resturant is the bomb dot com";
    const mainhours = createDOMdiv("","hours","","main");
    createHeader(mainhours,"Hours");
    addHourList(mainhours);

    //home menu about 



};



    







export default setupPage;