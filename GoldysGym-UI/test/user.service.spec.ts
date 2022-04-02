import { TestBed,inject } from '@angular/core/testing';
import { UserService } from '../src/app/_services/user.service';

import { HttpClientModule } from '@angular/common/http';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule,HttpClientModule,
    ],

    providers:[UserService]
  }));

  //-------- testing the UserService is created or not ---------
  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

// ------- Testting the getUserBoard method -------
it('testing getUserBoard method return values not null',
    inject([UserService], async (myService: UserService) => {
        const result = await myService.getUserBoard
        expect(result).not.toBeNull()
     })
)
// ------- Testting the getMarketingBoard method -------
it('testing getMarketingBoard method return values not null',
    inject([UserService], async (myService: UserService) => {
        const result = await myService.getMarketingBoard
        expect(result).not.toBeNull()
     })
)
    
// -------- testing all the methods exists or not in UserService--------

  it('should have getUserBoard method', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.getUserBoard).toBeTruthy();
   });

   it('should have closeQuery method', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.closeQuery).toBeTruthy();
   });

   it('should have deleteProgram method', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.deleteProgram).toBeTruthy();
   });

  it('should have addProgram method', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.addProgram).toBeTruthy();
   });

   it('should have getMarketingBoard method', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.getMarketingBoard).toBeTruthy();
   });

   it('should have addQuery method', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.addQuery).toBeTruthy();
   });

  //  it('be able to programs from the API via GET', () => {
  //   const service: UserService = TestBed.get(UserService);
  //   const dummyPrograms  = [{
  //     id : 1,
  //     programName: "Fitness Program1",
  //     description: "This is a fitness program1",
  //     durationInMonths: 6,
  //     price: 8000,
  //     discountRate: 10,
  //     currentPrice: 6400,
  //     isActive: true
  //     }, 
  //     {
  //       id: 2,
  //       programName: "Fitness Program2",
  //       description: "This is a fitness program2",
  //       durationInMonths: 6,
  //       price: 8000,
  //       discountRate: 10,
  //       currentPrice: 6400,
  //       isActive: true
  //   }];
  //   service.getUserBoard().subscribe(
  //     programs => {
  //       expect(programs.length).toBe(2);
  //       expect(programs).toEqual(dummyPrograms);
  //   });
  // });
});
