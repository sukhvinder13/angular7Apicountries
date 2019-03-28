import { HttpErrorResponse} from '@angular/common/http';
let errCallBack=(err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
        console.log("Client side error")
    }else{
        console.log("Server side error")
    }
}
export default errCallBack;