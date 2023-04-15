


var extDiv = document.getElementById('name');
var sitess=document.getElementById('site');
var contestType=document.getElementById('contest-type');
var startingTime=document.getElementById('start-time')
var endingTime=document.getElementById('end-time')
fetch("https://kontests.net/api/v1/all")
.then(data =>data.json())
.then(apidata=>{
    for(var i=0;i<apidata.length;i++){
        
        var contestName=apidata[i].name;
        var contestLink=apidata[i].url;

        var newDivELement=document.createElement("div");
        newDivELement.className="projects";
        var anchorTag=document.createElement("a");
        anchorTag.target="blank";
        anchorTag.href=`${contestLink}`;
        anchorTag.innerText=`${contestName}`;
        newDivELement.appendChild(anchorTag);
        extDiv.appendChild(newDivELement);

        
        let status=apidata[i].status;

        let paraTag=document.createElement("p");
        paraTag.id="contest";
        let name=document.createTextNode(status);
        paraTag.appendChild(name);
        contestType.appendChild(paraTag);


        let site=apidata[i].site;
        
        let siteName=document.createElement('p');
        let siteName_=document.createTextNode(site);
        siteName.appendChild(siteName_);
        siteName.className="coding-platform";
        sitess.appendChild(siteName);


        let startTime=apidata[i].start_time;
        let endTime=apidata[i].end_time;

        var d=new Date(startTime);
        // console.log(d.getUTCHours()); // Hours
        // console.log(d.getUTCMinutes());
        // console.log(d.getUTCSeconds());
        // let test=;
        // test.replace('-','.');
        s=d.toISOString().slice(5, 10).replace('-','.')+"  "+String(d.getUTCHours()).padStart(2,'0')+":"+String(d.getUTCMinutes()).padEnd(2, '0');
        var e=new Date(endTime);
        st=e.toISOString().slice(5, 10).replace('-','.')+"  "+String(e.getUTCHours()).padStart(2,'0')+":"+String(e.getUTCMinutes()).padEnd(2, '0');
        let para=document.createElement('p');
        para.className="start-time";
        para.appendChild(document.createTextNode(s));
        startingTime.appendChild(para);
        let para2=document.createElement('p');
        para2.appendChild(document.createTextNode(st));
        para2.className="time"
        endingTime.appendChild(para2);


        let duration=apidata[i].duration;
        var result= new Date(duration);//.toISOString().slice(12,17);
        console.log(result);
    }
});
