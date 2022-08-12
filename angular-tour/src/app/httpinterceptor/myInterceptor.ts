import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class MyInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const login = req.headers.get('login');
        const upload=req.headers.get("isupload");
        if (!!login) {
            return next.handle(req);
        }
        // if(upload){
        //     const uploadreq=req.clone({
        //         headers:req.headers.set("Content-Type","multipart/form-data")
        //     });
        //     return next.handle(uploadreq);
        // }
        const token = localStorage.getItem("token");
        const myreq = req.clone(
            {
                headers: req.headers.set('token', `${token}`)
            }
        );
        return next.handle(myreq);
    }
    
}