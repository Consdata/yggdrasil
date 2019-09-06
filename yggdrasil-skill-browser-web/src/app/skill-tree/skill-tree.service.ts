import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SkillTree} from './skill-tree';

@Injectable({
    providedIn: 'root'
})
export class SkillTreeService {

    constructor(private httpClient: HttpClient) {
    }

    tree(): Observable<SkillTree> {
        return this.httpClient.get<SkillTree>('/api/skill-browser/v1/tree');
    }

}
