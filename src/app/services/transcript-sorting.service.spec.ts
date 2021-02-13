import { TestBed } from '@angular/core/testing';

import { TranscriptSortingService } from './transcript-sorting.service';

describe('TranscriptSortingService', () => {
    let service: TranscriptSortingService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TranscriptSortingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
