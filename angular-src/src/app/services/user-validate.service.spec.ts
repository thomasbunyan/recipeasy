import { TestBed, inject } from "@angular/core/testing";

import { UserValidateService } from "./user-validate.service";

describe("UserValidateService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserValidateService] });
  });

  it("should be created", inject(
    [UserValidateService],
    (service: UserValidateService) => {
      expect(service).toBeTruthy();
    }
  ));
});
