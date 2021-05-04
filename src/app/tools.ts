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

export function hashCode(s:string) {
  // tslint:disable-next-line:no-bitwise
  return s.split('').reduce((a, b) => {a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
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


/**
 * Affichage du message
 * @param vm
 * @param s
 * @param duration
 */
export function showMessage(vm:any,s:string="",duration=2000,func:Function=null,label_button="ok") : void {
  if(s==null || s.length==0)return;
  s=s+"";
  $$("Affichage du message :",s)
  if(s.startsWith("#")){
    //Affichage en mode plein écran
    s=s.substr(1);
    vm.message=s;
    if(s.length>0)setTimeout(()=>{vm.showMessage=true;},500);
  } else {
    //Affichage en mode toaster
    var toaster=vm.toast || vm.snackBar || vm.toaster;
    if(toaster!=null){
      if(func){
        toaster.open(s,label_button,{duration:duration}).onAction().subscribe(()=>{
          func();
        });
      }
      else
        toaster.open(s,"",{duration:duration});
    }

  }
}


