export class AuthService {
  // fake Auth Service

  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
