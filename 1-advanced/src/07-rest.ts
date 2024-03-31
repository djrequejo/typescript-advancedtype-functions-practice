import { ROLES, User } from "./01-enum";

const currentUser: User = {
  username: "djrequejo",
  role: ROLES.CUSTOMER,
}

export const checkAdminRole = () => {
  if(currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
}

const response = checkAdminRole();
console.log("checkAdminRole", response);

export const checkRole = (role1: string, role2: string) => {
  if(currentUser.role === role1) {
    return true;
  }
  if(currentUser.role === role2) {
    return true;
  }
  return false;
}

const response2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log("checkRole", response2);

export const checkRolev2 = (roles: string[]) => {
  if(roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const response3 = checkRolev2([ROLES.ADMIN, ROLES.SELLER]);
console.log("checkRole", response3);

export const checkRolev3 = (...roles: string[]) => {
  if(roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}

const response4 = checkRolev3(ROLES.ADMIN, ROLES.SELLER);
console.log("checkRole", response4);
