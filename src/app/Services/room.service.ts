import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {House} from '../model/House';
import {Room} from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  API_URL = environment.apiUrl + '/room';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Room[]> {
    return this.http.get<Room[]>(this.API_URL);
  }

  create(room): Observable<Room> {
    return this.http.post<Room>(this.API_URL, room);
  }

  detail(id: string): Observable<Room> {
    return this.http.get<Room>(this.API_URL + `/${id}`);
  }

  edit(room: Room, id: string): Observable<Room> {
    return this.http.put<Room>(this.API_URL + `/${id}`, room);
  }

  delete(id: string): Observable<Room> {
    return this.http.delete<Room>(this.API_URL + `/${id}`);
  }

}
