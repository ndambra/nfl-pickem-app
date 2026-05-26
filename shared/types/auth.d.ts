// shared/types/auth.d.ts
declare module "#auth-utils" {
  interface User {
    login: string;
    name: string;
    email: string | null;
  }

  // interface UserSession {
  //   // Add your own fields
  // }

  // interface SecureSessionData {
  //   // Add your own fields
  // }
}

export {};
