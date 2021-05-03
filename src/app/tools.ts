import {environment} from '../environments/environment';

export function $$(s: string, obj: any= null) {
  if((s!=null && s.startsWith("!")) || localStorage.getItem("debug")=="1"){
    debugger;
  }
  const lg = new Date().getHours() + ':' + new Date().getMinutes() + ' -> ' + s;
  if (obj != null) {
    obj = JSON.stringify(obj);
  } else {
    obj = '';
  }
  console.log(lg + ' ' + obj);
  if (lg.indexOf('!!') > -1  || localStorage.getItem("debug")=="2") {alert(lg); }
}


export function api(service: string , param: string= '', encode: boolean = true,format:string="json"): string  {
  let rc=environment.domain_server + '/api/' + service+"/?";
  if (encode) { param = encodeURI(param); }
  if(format.length>0)rc=rc+"&format="+format;
  if(param.length>0)rc=rc+"&"+param;
  for(let i=0;i<10;i++)
    rc=rc.replace("//","/").replace("?&","?");

  if(rc.endsWith("?"))rc=rc.substr(0,rc.length-1);
  rc=rc.replace("http:/","http://").replace("https:/","https://");
  rc=rc.replace("&&","&");
  return rc;
}

