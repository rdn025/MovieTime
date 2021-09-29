import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
adminLogged:any=false;
updateMovie:any={};
mvlist:any=[];
private resturl: string = 'http://localhost:8080/cinematicket/movie';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
    };


  adminInfo(adminInfo:any){
   this.adminLogged=adminInfo;
  }
  getAdminInfo():Observable<any>{
    return of(this.adminLogged);
  }

  getMovies(): Observable<Admin[]> {
  
    return this.http
    .get<Admin[]>(this.resturl + '/allMovie').pipe(retry(1), catchError(this.handleError));
    
    }
  
    addMovie(movie: any): Observable<any[]> {
    
      return this.http
      .post<any[]>(this.resturl + '/setmovie',JSON.stringify(movie),this.httpOptions).pipe(retry(1), catchError(this.handleError));
      
      }
  
      deleteMovie(mid: any): Observable<any> {
    
        return this.http
        .delete<any>(this.resturl + '/deleteMovie/' + mid,this.httpOptions).pipe(retry(1), catchError(this.handleError));
        
        }

        getAMovie(mid:any):Observable<any>{
          return this.http
          .get<any>(this.resturl + '/searchmoviebyid/' + mid,this.httpOptions).pipe(retry(1), catchError(this.handleError));
        }
  
        getMovieByName(movieName: any): Observable<any> {
   
          return this.http
       .get<any>(this.resturl + '/searchmoviebyname/' + movieName,this.httpOptions).pipe(retry(1), catchError(this.handleError));
        
        }

        searchedMovie(movielist:any){
          this.mvlist=movielist;
          console.log(this.mvlist);
        }

        getSearchedMovie():Observable<any>{
          console.log(this.mvlist);
          return of(this.mvlist);
        }
       
        setMovie(movie:any){
            this.updateMovie=movie;
        }

        getSetMovie():Observable<any>{

         return of(this.updateMovie);
      }
         
  
        updatedMovie(movie:any):Observable<any>{
          return this.http
          .put<any>(this.resturl + '/updatemovie',JSON.stringify(movie),this.httpOptions).pipe(retry(1), catchError(this.handleError));
        }

        handleError(err: { error: { message: string; }; status: any; message: any; }) {
    
          let errorMessage = '';
              
          if (err.error instanceof ErrorEvent) {
           
          errorMessage = err.error.message;
              
          } else {
          
          errorMessage = `Error code : ${err.status} \n Error Message : ${err.message}`;
             
           }
              
          window.alert(errorMessage);
              return throwError(errorMessage);
            
          }

}
