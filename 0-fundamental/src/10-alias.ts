(() => {
  type UserId = string | number | boolean;
  let userId: UserId;

  function greeting(userId: UserId, size: Sizes) {
    if (typeof userId === "string") {
      console.log(`string ${userId.toUpperCase()}`);
    }
  }

  // literal types
  type Sizes = "S" | "M" | "L" | "XL";
  let shirtSize: Sizes;
  shirtSize = "M";
  shirtSize = "XL";

  greeting(123123, "M");
})();
