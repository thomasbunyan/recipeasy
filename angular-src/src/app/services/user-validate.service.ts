import { Injectable } from "@angular/core";
import { UserService } from "../services/user.service";

@Injectable()
export class UserValidateService {
  constructor(private userService: UserService) { }

  validateUsername(username): Promise<any> {
    const res = { res: false, error: "NO ERROR" };
    return new Promise((resolve, reject) => {
      const removeIllegal = username;
      if (username === undefined || username === "") {
        res.error = "Username required.";
        resolve(res);
      } else if (removeIllegal.replace(/\W/g, "") !== username) {
        res.error =
          "Username invalid. Must only contain letters, numbers and underscores.";
        resolve(res);
      } else if (username.length > 20) {
        res.error = "Username too long. Must be 3-20 characters.";
        resolve(res);
      } else if (username.length < 3) {
        res.error = "Username too short. Must be 3-20 characters.";
        resolve(res);
      } else if (this.profanityFilter(username)) {
        res.error = "Really...";
        resolve(res);
      } else {
        this.uniqueUsername(username).then(isUnique => {
          if (!isUnique) {
            res.error = "Username taken.";
            resolve(res);
          } else {
            res.res = true;
            resolve(res);
          }
        });
      }
    });
  }

  validateEmail(email): Promise<any> {
    const res = { res: false, error: "NO ERROR" };
    return new Promise((resolve, reject) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (email === undefined || email === "") {
        res.error = "Email required.";
        resolve(res);
      } else if (!re.test(String(email).toLowerCase())) {
        res.error = "Email not valid.";
        resolve(res);
      } else {
        this.uniqueEmail(email).then(isUnique => {
          if (!isUnique) {
            res.error = "Email already registered.";
            resolve(res);
          } else {
            res.res = true;
            resolve(res);
          }
        });
      }
    });
  }

  validateEmailConf(email, emailConf) {
    const res = { res: false, error: "NO ERROR" };
    if (email !== emailConf) {
      res.error = "Email addresses don't match.";
      return res;
    }
    res.res = true;
    return res;
  }

  validatePassword(password) {
    const res = { res: false, error: "NO ERROR" };
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20}$/;
    if (password === undefined || password === "") {
      res.error = "Password required.";
      return res;
    } else if (!re.test(password)) {
      res.error = "Password invalid. Must contain 8-20 characters, include a mix of capital and lowercase letters and at least one number.";
      return res;
    } else {
      res.res = true;
      return res;
    }
  }

  profanityFilter(username) {
    // TODO:
    return false;
  }

  uniqueUsername(username): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.checkUsername(username).subscribe(data => {
        if (data.success) {
          resolve(data.unique);
        } else {
          reject("Failed to check username");
        }
      });
    });
  }

  uniqueEmail(email): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.checkEmail(email).subscribe(data => {
        if (data.success) {
          resolve(data.unique);
        } else {
          reject("Failed to check email");
        }
      });
    });
  }
}
