
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer  BQAc28z0-qAFQy1ERUbKguH-xe2nHqzhfpS0O6OcPWV9KqoBGxfxMF84E7oGE2ftw_k54FtXE5l6kh-oFfcs4ptsrDflBF5iGEJDD3yqUbNMk3CHPQJPUYf9CDAx4RMhHhjBc9Pdv8TkChWF65TnN9xnDNkSKqg'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
 
  }
   getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization:
         'Bearer  BQAc28z0-qAFQy1ERUbKguH-xe2nHqzhfpS0O6OcPWV9KqoBGxfxMF84E7oGE2ftw_k54FtXE5l6kh-oFfcs4ptsrDflBF5iGEJDD3yqUbNMk3CHPQJPUYf9CDAx4RMhHhjBc9Pdv8TkChWF65TnN9xnDNkSKqg'
         
    });
    
    return this.http.get(url, { headers });
  }
}

